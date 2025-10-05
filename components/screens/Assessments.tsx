import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { AssessmentFlow } from './AssessmentFlow';
import { AssessmentResults } from './AssessmentResults';
import { Icon } from '../Icon';
import { useAuth } from '../../contexts/AuthContext';
import { useNotifications } from '../../contexts/NotificationContext';
import { cn } from '../ui/utils';
import { assessmentsData } from '../../lib/sample-data/assessments';
import { apiClient } from '../../lib/api-client';
import svgPaths from "../../imports/svg-p4xm67qhqy";
import svgPathsFigma from "../../imports/svg-55emdlatj0";
import imgFrame1000007497 from "figma:asset/979cc1419b3348d67eec508265b8b79532e682a0.png";
import imgRectangle9 from "figma:asset/e14b378ba443955238f6e52a608bb6cfa341e5d8.png";
import imgRectangle10 from "figma:asset/33be9701c78a44f54392cf1bfcc20d8f8f00cd9d.png";
import imgRectangle11 from "figma:asset/2576c36c768010586aefac2ca3b21e8a5e123bd0.png";
import imgRectangle12 from "figma:asset/7668a3f1aed73fe6b7f00cdfdff2bb0eeddb5186.png";
import imgRectangle13 from "figma:asset/2538bf9854b969adcd4c598d1477955b454f6b1a.png";

interface Assessment {
  id: string;
  slug: string;
  title: string;
  description: string;
  estimatedTime: string;
  questionCount: number;
  status: 'available' | 'in-progress' | 'completed';
  lastCompletedDate?: string;
  category: 'anxiety' | 'depression' | 'stress' | 'wellness';
  metadata?: any;
  questions?: any[];
}

// Function to transform assessment data from the new format
const transformAssessmentData = (data: any, userHistory?: Record<string, any>): Assessment => {
  const assessmentId = data.slug || data.id;
  const userResponse = userHistory?.[assessmentId] || userHistory?.[data.assessment_id];
  
  let status: 'available' | 'in-progress' | 'completed' = 'available';
  let lastCompletedDate: string | undefined;
  
  if (userResponse) {
    if (userResponse.status === 'completed' && userResponse.completed_at) {
      status = 'completed';
      lastCompletedDate = userResponse.completed_at;
    } else if (userResponse.status === 'in_progress') {
      status = 'in-progress';
    }
  }

  return {
    id: assessmentId,
    slug: data.slug,
    title: data.title,
    description: data.description,
    estimatedTime: `${data.metadata?.estimated_minutes || 3} minutes`,
    questionCount: data.questions?.length || 0,
    status,
    lastCompletedDate,
    category: data.metadata?.category || 'wellness',
    metadata: data.metadata,
    questions: data.questions
  };
};

interface AssessmentsProps {
  className?: string;
  onNavigate?: (route: string) => void;
}

type ViewState = 'list' | 'landing' | 'flow' | 'results';
type TabState = 'catalogue' | 'history';

export function Assessments({ className, onNavigate }: AssessmentsProps) {
  const { user } = useAuth();
  const { showToast } = useNotifications();
  const [currentView, setCurrentView] = useState<ViewState>('list');
  const [selectedAssessment, setSelectedAssessment] = useState<Assessment | null>(null);
  const [assessmentResults, setAssessmentResults] = useState<any>(null);
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false);
  const [userAssessmentHistory, setUserAssessmentHistory] = useState<Record<string, any>>({});
  const [currentTab, setCurrentTab] = useState<TabState>('catalogue');

  // Handle tab state based on authentication
  useEffect(() => {
    if (!user && currentTab === 'history') {
      setCurrentTab('catalogue');
    }
  }, [user, currentTab]);

  // Check if we need to start assessment from landing page
  useEffect(() => {
    const shouldStartFromLanding = localStorage.getItem('ikan-start-assessment-from-landing');
    if (shouldStartFromLanding === 'true') {
      localStorage.removeItem('ikan-start-assessment-from-landing');
      
      // Get stored assessment and start the flow
      try {
        const storedAssessment = localStorage.getItem('ikan-selected-assessment');
        if (storedAssessment) {
          const assessment = JSON.parse(storedAssessment);
          setSelectedAssessment(assessment);
          setShowDisclaimerModal(true);
        }
      } catch (error) {
        console.warn('Could not retrieve stored assessment:', error);
      }
    }
  }, [currentView]); // Add currentView as dependency to ensure it runs when we return from landing

  // Fast loading of assessments with background history fetch
  useEffect(() => {
    const loadAssessments = async () => {
      try {
        // Fast path: Load assessments immediately without waiting for history
        console.log('⚡ Fast loading assessments...');
        
        // Transform assessment data without user history first (fast display)
        const transformedAssessments = assessmentsData.assessments.map(data => transformAssessmentData(data, {}));
        
        // Filter to show the main clinical assessments
        const clinicalAssessments = transformedAssessments.filter(assessment => 
          ['anxiety', 'depression', 'burnout', 'sleep-quality', 'resilience', 'work-engagement', 'wellbeing-index', 'mindfulness'].includes(assessment.slug)
        );
        
        setAssessments(clinicalAssessments);
        setLoading(false); // Set loading to false immediately
        
        console.log('✅ Assessments loaded instantly!');

        // Background: Load user assessment history if authenticated (non-blocking)
        if (user) {
          setTimeout(async () => {
            try {
              console.log('📊 Loading user assessment history in background...');
              const historyResponse = await apiClient.getUserAssessmentResponses();
              
              if (historyResponse && historyResponse.responses) {
                const { responses } = historyResponse;
                const historyMap: Record<string, any> = {};
                
                responses.forEach((response: any) => {
                  // Get the latest response for each assessment
                  if (!historyMap[response.assessment_id] || 
                      new Date(response.completed_at || response.started_at) > new Date(historyMap[response.assessment_id].completed_at || historyMap[response.assessment_id].started_at)) {
                    historyMap[response.assessment_id] = response;
                  }
                });
                
                setUserAssessmentHistory(historyMap);
                
                // Update assessments with history data
                const updatedAssessments = assessmentsData.assessments.map(data => transformAssessmentData(data, historyMap));
                const updatedClinicalAssessments = updatedAssessments.filter(assessment => 
                  ['phq9', 'gad7', 'burnout-risk', 'sleep-quality', 'resilience', 'work-engagement', 'wellbeing-index', 'mindfulness'].includes(assessment.slug)
                );
                
                setAssessments(updatedClinicalAssessments);
                console.log('✅ Assessment history loaded in background:', Object.keys(historyMap).length, 'assessments');
              }
            } catch (historyError) {
              console.log('⚠️ Background assessment history load failed:', historyError);
              // Silently fail - assessments still work without history
            }
          }, 100); // Small delay to ensure UI renders first
        }
        
      } catch (error) {
        console.error('Error loading assessments:', error);
        showToast('error', 'Failed to load assessments', 'Please try refreshing the page.');
        setLoading(false);
      }
    };

    loadAssessments();
  }, [showToast, user]);

  const handleStartAssessment = (assessment: Assessment) => {
    // Store the selected assessment for the landing page
    setSelectedAssessment(assessment);
    try {
      localStorage.setItem('ikan-selected-assessment', JSON.stringify(assessment));
    } catch (error) {
      console.warn('Could not store assessment in localStorage:', error);
    }
    
    // Navigate to the assessment landing page
    if (onNavigate) {
      onNavigate('/assessment-landing');
    } else {
      // Fallback to internal view if no navigation function
      setCurrentView('landing');
    }
  };

  const handleViewLanding = () => {
    // Store the selected assessment in localStorage for the landing page
    if (selectedAssessment) {
      try {
        localStorage.setItem('ikan-selected-assessment', JSON.stringify(selectedAssessment));
      } catch (error) {
        console.warn('Could not store assessment in localStorage:', error);
      }
    }
    
    // Navigate to the Figma assessment landing page
    if (onNavigate) {
      onNavigate('/assessment-landing');
    } else {
      // Fallback to disclaimer modal if no navigation function provided
      setShowDisclaimerModal(true);
    }
  };

  const handleDisclaimerAccept = () => {
    setShowDisclaimerModal(false);
    setCurrentView('flow');
  };

  const handleDisclaimerCancel = () => {
    setShowDisclaimerModal(false);
  };

  const handleAssessmentComplete = async (results: any) => {
    setAssessmentResults(results);
    setCurrentView('results');
    
    // Refresh user assessment history to show updated status
    if (user && selectedAssessment) {
      try {
        console.log('🔄 Refreshing assessment history...');
        const historyResponse = await apiClient.getUserAssessmentResponses();
        
        if (historyResponse && historyResponse.responses) {
          const { responses } = historyResponse;
          const historyMap: Record<string, any> = {};
          
          responses.forEach((response: any) => {
            if (!historyMap[response.assessment_id] || 
                new Date(response.completed_at || response.started_at) > new Date(historyMap[response.assessment_id].completed_at || historyMap[response.assessment_id].started_at)) {
              historyMap[response.assessment_id] = response;
            }
          });
          
          setUserAssessmentHistory(historyMap);
          
          // Update the current assessment's status
          setAssessments(prev => prev.map(assessment => {
            if (assessment.id === selectedAssessment.id) {
              return {
                ...assessment,
                status: 'completed' as const,
                lastCompletedDate: new Date().toISOString()
              };
            }
            return assessment;
          }));
          
          console.log('✅ Assessment history refreshed');
        }
      } catch (error) {
        console.error('⚠️ Failed to refresh assessment history:', error);
      }
    }
  };

  const handleReturnToList = () => {
    setCurrentView('list');
    setSelectedAssessment(null);
    setAssessmentResults(null);
    setShowDisclaimerModal(false);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'anxiety': return 'var(--color-status-warning)';
      case 'depression': return 'var(--color-status-info)';
      case 'stress': return 'var(--color-status-danger)';
      case 'wellness': return 'var(--color-status-success)';
      case 'work': return 'var(--color-primary-default)';
      default: return 'var(--color-text-muted)';
    }
  };

  const getStatusBadge = (status: string, lastCompletedDate?: string) => {
    switch (status) {
      case 'completed':
        return (
          <Badge 
            variant="secondary"
            style={{ 
              fontSize: 'var(--text-xs)',
              backgroundColor: 'var(--color-status-success-light)',
              color: 'var(--color-status-success)'
            }}
          >
            <Icon name="checkCircle" size={12} style={{ marginRight: '4px' }} />
            Completed {lastCompletedDate && new Date(lastCompletedDate).toLocaleDateString()}
          </Badge>
        );
      case 'in-progress':
        return (
          <Badge 
            variant="secondary"
            style={{ 
              fontSize: 'var(--text-xs)',
              backgroundColor: 'var(--color-status-warning-light)',
              color: 'var(--color-status-warning)'
            }}
          >
            <Icon name="clock" size={12} style={{ marginRight: '4px' }} />
            In Progress
          </Badge>
        );
      default:
        return (
          <Badge 
            variant="outline"
            style={{ fontSize: 'var(--text-xs)' }}
          >
            Available
          </Badge>
        );
    }
  };

  // Assessment Landing Page View
  if (currentView === 'landing' && selectedAssessment) {
    return (
      <>
        <div className={cn("space-y-6 pb-20 md:pb-6", className)}>
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={handleReturnToList}
            className="gap-2"
            style={{ marginBottom: 'var(--spacing-4)' }}
          >
            <Icon name="arrowLeft" size={16} />
            Back to Assessments
          </Button>

          {/* Header */}
          <div className="space-y-2">
            <h1 
              style={{ 
                fontSize: 'var(--text-2xl)', 
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)'
              }}
            >
              {selectedAssessment.title}
            </h1>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Learn more about this assessment before you begin
            </p>
          </div>

          {/* Assessment Details Card */}
          <Card 
            style={{
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--color-bg-card)',
              border: '1px solid var(--color-border-default)'
            }}
          >
            <CardHeader>
              <CardTitle 
                className="flex items-center gap-3"
                style={{ 
                  fontSize: 'var(--text-xl)', 
                  lineHeight: 'var(--line-height-sm)',
                  color: 'var(--color-text-primary)'
                }}
              >
                <Icon 
                  name="clipboard" 
                  size={24} 
                  style={{ color: getCategoryColor(selectedAssessment.category) }} 
                />
                {selectedAssessment.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Description */}
              <div className="space-y-2">
                <h3 style={{ 
                  fontSize: 'var(--text-base)', 
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-text-primary)'
                }}>
                  About This Assessment
                </h3>
                <p style={{ 
                  fontSize: 'var(--text-base)', 
                  color: 'var(--color-text-muted)',
                  lineHeight: 'var(--line-height-md)'
                }}>
                  {selectedAssessment.description}
                </p>
              </div>

              {/* Assessment Details */}
              <div className="space-y-4">
                <h3 style={{ 
                  fontSize: 'var(--text-base)', 
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-text-primary)'
                }}>
                  Assessment Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-3" style={{ backgroundColor: 'var(--color-bg-muted)', borderRadius: 'var(--radius-md)' }}>
                    <Icon name="clock" size={20} style={{ color: 'var(--color-text-muted)' }} />
                    <div>
                      <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-text-primary)' }}>
                        Time Required
                      </p>
                      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                        {selectedAssessment.estimatedTime}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3" style={{ backgroundColor: 'var(--color-bg-muted)', borderRadius: 'var(--radius-md)' }}>
                    <Icon name="list" size={20} style={{ color: 'var(--color-text-muted)' }} />
                    <div>
                      <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-text-primary)' }}>
                        Questions
                      </p>
                      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                        {selectedAssessment.questionCount} questions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3" style={{ backgroundColor: 'var(--color-bg-muted)', borderRadius: 'var(--radius-md)' }}>
                    <Icon name="tag" size={20} style={{ color: getCategoryColor(selectedAssessment.category) }} />
                    <div>
                      <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-text-primary)' }}>
                        Category
                      </p>
                      <p style={{ fontSize: 'var(--text-xs)', color: getCategoryColor(selectedAssessment.category) }}>
                        {selectedAssessment.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="space-y-3">
                <h3 style={{ 
                  fontSize: 'var(--text-base)', 
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-text-primary)'
                }}>
                  What to Expect
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Icon name="checkCircle" size={16} style={{ color: 'var(--color-status-success)', marginTop: '2px' }} />
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                      Answer questions honestly for the most accurate results
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="checkCircle" size={16} style={{ color: 'var(--color-status-success)', marginTop: '2px' }} />
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                      Take your time - there's no rush to complete
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="checkCircle" size={16} style={{ color: 'var(--color-status-success)', marginTop: '2px' }} />
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                      Your responses are private and secure
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="checkCircle" size={16} style={{ color: 'var(--color-status-success)', marginTop: '2px' }} />
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                      Receive personalized insights and recommendations
                    </span>
                  </li>
                </ul>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  onClick={handleViewLanding}
                  className="w-full gap-2"
                  style={{
                    backgroundColor: 'var(--color-primary-default)',
                    color: 'var(--color-primary-on)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    minHeight: '48px'
                  }}
                >
                  <Icon name="play" size={20} />
                  Begin Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer Modal */}
        <Dialog open={showDisclaimerModal} onOpenChange={setShowDisclaimerModal}>
          <DialogContent 
            style={{
              backgroundColor: 'var(--color-bg-card)',
              border: '1px solid var(--color-border-default)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '600px'
            }}
          >
            <DialogHeader>
              <DialogTitle 
                style={{ 
                  fontSize: 'var(--text-xl)', 
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--color-text-primary)'
                }}
              >
                Important Information
              </DialogTitle>
              <DialogDescription 
                style={{ 
                  fontSize: 'var(--text-sm)', 
                  color: 'var(--color-text-muted)',
                  lineHeight: 'var(--line-height-md)'
                }}
              >
                Please read this information carefully before proceeding with the assessment.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4" style={{ padding: 'var(--spacing-2) 0' }}>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="info" size={20} style={{ color: 'var(--color-status-info)', marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-text-primary)' }}>
                      This is not a medical diagnosis
                    </h4>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 'var(--line-height-md)' }}>
                      This assessment is for informational purposes only and should not replace professional medical advice, diagnosis, or treatment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="lock" size={20} style={{ color: 'var(--color-status-success)', marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-text-primary)' }}>
                      Your privacy is protected
                    </h4>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 'var(--line-height-md)' }}>
                      All responses are encrypted and stored securely. Your personal information will never be shared without your consent.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="heart" size={20} style={{ color: 'var(--color-status-danger)', marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-text-primary)' }}>
                      Seek help if needed
                    </h4>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 'var(--line-height-md)' }}>
                      If you're experiencing crisis or thoughts of self-harm, please contact emergency services or a mental health crisis line immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button 
                variant="outline" 
                onClick={handleDisclaimerCancel}
                style={{
                  backgroundColor: 'var(--color-accent-default)',
                  color: 'var(--color-accent-on)',
                  borderColor: 'var(--color-border-default)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleDisclaimerAccept}
                style={{
                  backgroundColor: 'var(--color-primary-default)',
                  color: 'var(--color-primary-on)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                I Understand, Continue
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  // Get assessment image based on category for better context
  const getAssessmentImage = (assessment: Assessment, index: number) => {
    const images = [imgRectangle9, imgRectangle10, imgRectangle11, imgRectangle12, imgRectangle13];
    
    // Map categories to specific images for better context
    const categoryImageMap: Record<string, string> = {
      'depression': imgRectangle9,
      'anxiety': imgRectangle10, 
      'stress': imgRectangle11,
      'wellness': imgRectangle12,
      'work': imgRectangle13
    };
    
    return categoryImageMap[assessment.category] || images[index % images.length];
  };

  // Enhanced assessment mapping with real data
  const mapAssessmentToCard = (assessment: Assessment, index: number) => {
    return {
      ...assessment,
      displayTitle: assessment.title, // Use real assessment title (PHQ-9, GAD-7, etc.)
      displayDescription: assessment.description, // Use real assessment description
      cardImage: getAssessmentImage(assessment, index),
      estimatedMinutes: assessment.metadata?.estimated_minutes || 5
    };
  };

  // Assessment List View
  if (currentView === 'list') {
    return (
      <div className={cn("w-full", className)}>
        <div className="relative w-full">
          <div className="w-full">
            <div 
              className="ikan-stack-xl"
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%'
              }}
            >
              
              {/* Hero Section */}
              <div 
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                style={{ gap: 'var(--spacing-8)' }}
              >
                <div 
                  className="relative shrink-0 w-full"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                >
                  <div 
                    aria-hidden="true" 
                    className="absolute inset-0 pointer-events-none"
                    style={{ borderRadius: 'var(--radius-lg)' }}
                  >
                    <div 
                      className="absolute inset-0"
                      style={{ 
                        backgroundColor: '#e5e2f1',
                        borderRadius: 'var(--radius-lg)'
                      }} 
                    />
                    <div 
                      className="absolute inset-0 overflow-hidden"
                      style={{ borderRadius: 'var(--radius-lg)' }}
                    >
                      <img 
                        alt="" 
                        className="absolute h-[221.48%] left-[33.62%] max-w-none top-[-25.86%] w-[67.25%] hidden md:block" 
                        src={imgFrame1000007497} 
                      />
                    </div>
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to right, #ffffff 37.016%, rgba(255,255,255,0) 73.226%)',
                        borderRadius: 'var(--radius-lg)'
                      }}
                    />
                  </div>
                  <div className="w-full">
                    <div 
                      className="ikan-card-spacing"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%'
                      }}
                    >
                      <div 
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-lg"
                        style={{ gap: 'var(--spacing-6)' }}
                      >
                        <div 
                          className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                          style={{ gap: 'var(--spacing-1)' }}
                        >
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                            <h1 
                              className="text-responsive-xl md:text-responsive-2xl"
                              style={{ 
                                fontFamily: 'var(--font-family-base)',
                                fontWeight: 'var(--font-weight-bold)',
                                color: '#251b4e',
                                lineHeight: 'var(--line-height-sm)'
                              }}
                            >
                              Health Assessments
                            </h1>
                          </div>
                          <div 
                            className="box-border content-stretch flex flex-col items-start relative shrink-0 w-full"
                            style={{ paddingTop: 'var(--spacing-1)' }}
                          >
                            <p 
                              className="text-responsive-base"
                              style={{ 
                                fontFamily: 'var(--font-family-base)',
                                fontWeight: 'var(--font-weight-regular)',
                                color: 'var(--color-text-primary)',
                                lineHeight: 'var(--line-height-md)'
                              }}
                            >
                              Gain insight into your mental and emotional health and find ways to support yourself
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                

              </div>
              
              {/* Content based on tab */}
              {!user && currentTab === 'history' ? (
                <Card>
                  <CardContent 
                    className="text-center"
                    style={{ padding: 'var(--spacing-6)' }}
                  >
                    <Icon name="lock" size={24} style={{ color: 'var(--color-text-muted)' }} />
                    <p 
                      style={{ 
                        color: 'var(--color-text-muted)', 
                        marginTop: 'var(--spacing-4)',
                        fontFamily: 'var(--font-family-base)'
                      }}
                    >
                      Please sign in to view your assessment history
                    </p>
                  </CardContent>
                </Card>
              ) : loading ? (
                <div 
                  className="grid w-full relative shrink-0 animate-pulse grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  style={{
                    gap: 'var(--spacing-6)'
                  }}
                >
                  {[1, 2, 3, 4, 5].map((index) => (
                    <div 
                      key={index} 
                      className="bg-white relative"
                      style={{
                        borderRadius: 'var(--radius-md)',
                        minHeight: '350px',
                        padding: 'var(--spacing-4)'
                      }}
                    >
                      <div 
                        className="h-6 bg-gray-200 rounded w-3/4"
                        style={{ marginBottom: 'var(--spacing-2)' }}
                      ></div>
                      <div 
                        className="h-4 bg-gray-200 rounded w-1/2"
                        style={{ marginBottom: 'var(--spacing-4)' }}
                      ></div>
                      <div 
                        className="h-32 bg-gray-200 rounded"
                        style={{ marginTop: 'var(--spacing-4)' }}
                      ></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div 
                  className="grid w-full relative shrink-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  style={{
                    gap: 'var(--spacing-6)'
                  }}
                >
                  {/* Empty state for when no assessments match filter */}
                  {assessments.filter(assessment => {
                    const hasHistory = userAssessmentHistory[assessment.id];
                    if (currentTab === 'history' && !hasHistory) return false;
                    return true;
                  }).length === 0 && (
                    <div 
                      className="col-span-full flex flex-col items-center justify-center text-center"
                      style={{
                        padding: 'var(--spacing-12)',
                        gap: 'var(--spacing-4)'
                      }}
                    >
                      <Icon 
                        name="clipboard" 
                        size={48} 
                        style={{ color: 'var(--color-text-muted)' }} 
                      />
                      <div style={{ gap: 'var(--spacing-2)' }} className="flex flex-col">
                        <h3 
                          className="text-responsive-lg"
                          style={{
                            fontFamily: 'var(--font-family-base)',
                            fontWeight: 'var(--font-weight-medium)',
                            color: 'var(--color-text-primary)'
                          }}
                        >
                          {currentTab === 'history' ? 'No Assessment History' : 'No Assessments Available'}
                        </h3>
                        <p 
                          className="text-responsive-base"
                          style={{
                            fontFamily: 'var(--font-family-base)',
                            fontWeight: 'var(--font-weight-regular)',
                            color: 'var(--color-text-muted)',
                            maxWidth: '300px'
                          }}
                        >
                          {currentTab === 'history' 
                            ? 'Complete an assessment to see your progress and insights here.'
                            : 'Check back later for new mental health assessments.'
                          }
                        </p>
                      </div>
                      {currentTab === 'history' && (
                        <button
                          onClick={() => setCurrentTab('catalogue')}
                          className="touch-target"
                          style={{
                            backgroundColor: 'var(--color-primary-default)',
                            color: 'var(--color-primary-on)',
                            padding: `var(--spacing-2) var(--spacing-4)`,
                            borderRadius: 'var(--radius-md)',
                            border: 'none',
                            fontFamily: 'var(--font-family-base)',
                            fontWeight: 'var(--font-weight-medium)',
                            cursor: 'pointer'
                          }}
                        >
                          Browse Assessment Catalogue
                        </button>
                      )}
                    </div>
                  )}
                  
                  {assessments.map((assessment, index) => {
                    const mappedAssessment = mapAssessmentToCard(assessment, index);
                    const showInHistory = currentTab === 'history';
                    const showInCatalogue = currentTab === 'catalogue';
                    const hasHistory = userAssessmentHistory[assessment.id];
                    
                    // Enhanced show logic: History tab shows assessments with history, Catalogue shows all
                    if (showInHistory && !hasHistory) return null;
                    if (!showInHistory && !showInCatalogue) return null;
                    
                    return (
                      <div 
                        key={assessment.id} 
                        className="bg-white relative shrink-0 hover:shadow-md transition-shadow cursor-pointer"
                        style={{
                          borderRadius: 'var(--radius-md)',
                          minHeight: '380px',
                          boxShadow: 'var(--shadow-xs)'
                        }}
                      >
                        <div className="w-full h-full">
                          <div 
                            className="box-border content-stretch flex flex-col items-start justify-between relative w-full h-full"
                            style={{
                              minHeight: '380px',
                              padding: 'var(--spacing-6)'
                            }}
                          >
                            
                            {/* Title and Description */}
                            <div 
                              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                              style={{ gap: 'var(--spacing-3)' }}
                            >
                              <div 
                                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                                style={{ gap: 'var(--spacing-2)' }}
                              >
                                <div className="flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-nowrap w-full">
                                  <p 
                                    className="overflow-ellipsis overflow-hidden text-responsive-sm uppercase tracking-wide"
                                    style={{
                                      fontFamily: 'var(--font-family-base)',
                                      fontWeight: 'var(--font-weight-regular)',
                                      color: '#2e2a2f',
                                      lineHeight: 'var(--line-height-sm)',
                                      letterSpacing: 'var(--letter-spacing-wide)'
                                    }}
                                  >
                                    {assessment.category}
                                  </p>
                                </div>
                                <div className="flex flex-col justify-center relative shrink-0 w-full">
                                  <h3 
                                    className="text-responsive-lg md:text-responsive-xl"
                                    style={{
                                      fontFamily: 'var(--font-family-base)',
                                      fontWeight: 'var(--font-weight-bold)',
                                      color: 'var(--color-text-primary)',
                                      lineHeight: 'var(--line-height-sm)'
                                    }}
                                  >
                                    {mappedAssessment.displayTitle}
                                  </h3>
                                </div>
                              </div>
                              
                              <div 
                                className="content-stretch flex items-center justify-center relative shrink-0 w-full"
                                style={{ gap: 'var(--spacing-2)' }}
                              >
                                <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
                                  <p 
                                    className="text-responsive-base"
                                    style={{
                                      fontFamily: 'var(--font-family-base)',
                                      fontWeight: 'var(--font-weight-regular)',
                                      color: 'var(--color-text-muted)',
                                      lineHeight: 'var(--line-height-md)'
                                    }}
                                  >
                                    {mappedAssessment.displayDescription}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Bottom Section with Image and Actions */}
                            <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
                              <div 
                                className="relative shrink-0 flex-shrink-0"
                                style={{
                                  borderRadius: 'var(--radius-md)',
                                  width: '120px',
                                  height: '120px'
                                }}
                              >
                                <img 
                                  alt={`${mappedAssessment.displayTitle} assessment illustration`}
                                  className="absolute inset-0 max-w-none object-center object-cover pointer-events-none w-full h-full" 
                                  style={{ borderRadius: 'var(--radius-md)' }}
                                  src={mappedAssessment.cardImage} 
                                />
                              </div>
                              
                              <div 
                                className="content-stretch flex flex-col items-end relative shrink-0"
                                style={{ gap: 'var(--spacing-6)' }}
                              >
                                {/* Info */}
                                <div 
                                  className="content-stretch flex items-center justify-center relative shrink-0"
                                  style={{ gap: 'var(--spacing-1)' }}
                                >
                                  <div 
                                    className="relative shrink-0"
                                    style={{ width: '18px', height: '18px' }}
                                  >
                                    <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                      <g id="approval 1">
                                        <path d={svgPathsFigma.p2cdeb7c0} fill="var(--color-text-primary)" id="Vector" />
                                      </g>
                                    </svg>
                                  </div>
                                  <div className="flex flex-col justify-center relative shrink-0">
                                    <p 
                                      className="text-center text-nowrap text-responsive-xs"
                                      style={{
                                        fontFamily: 'var(--font-family-base)',
                                        fontWeight: 'var(--font-weight-regular)',
                                        color: 'var(--color-text-primary)',
                                        lineHeight: 'var(--line-height-sm)'
                                      }}
                                    >
                                      {mappedAssessment.estimatedMinutes} min Quiz
                                    </p>
                                  </div>
                                </div>
                                
                                {/* Button */}
                                <button
                                  onClick={() => {
                                    if (assessment.status === 'completed' && userAssessmentHistory[assessment.id]) {
                                      // Show previous results
                                      const userResponse = userAssessmentHistory[assessment.id];
                                      const mockResults = {
                                        assessmentId: assessment.id,
                                        assessmentTitle: assessment.title,
                                        score: userResponse.score || 0,
                                        maxScore: 21,
                                        interpretation: userResponse.interpretation || {
                                          label: 'Previous Result',
                                          description: 'Your previous assessment results.',
                                          icon: 'info',
                                          recommendations: [
                                            'Continue practicing healthy coping strategies',
                                            'Consider retaking the assessment to track progress'
                                          ]
                                        },
                                        completedAt: userResponse.completed_at || userResponse.started_at,
                                        equipProgramSuggestion: {
                                          title: 'Recommended Program',
                                          description: 'Explore programs designed to support your wellbeing.',
                                          route: '/equip-programs'
                                        }
                                      };
                                      setAssessmentResults(mockResults);
                                      setCurrentView('results');
                                    } else {
                                      handleStartAssessment(assessment);
                                    }
                                  }}
                                  className="box-border content-stretch flex items-center relative shrink-0 transition-colors touch-target hover:shadow-sm"
                                  style={{
                                    backgroundColor: '#ecebf0',
                                    gap: 'var(--spacing-2)',
                                    padding: `var(--spacing-2) var(--spacing-5)`,
                                    borderRadius: 'var(--radius-md)',
                                    border: 'none',
                                    cursor: 'pointer'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#ddd9e0';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#ecebf0';
                                  }}
                                >
                                  <span 
                                    className="text-nowrap text-responsive-sm"
                                    style={{
                                      fontFamily: 'var(--font-family-base)',
                                      fontWeight: 'var(--font-weight-medium)',
                                      color: '#222222',
                                      lineHeight: 'var(--line-height-sm)'
                                    }}
                                  >
                                    {assessment.status === 'completed' && hasHistory ? 'View Results' : 'Take Assessment'}
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Assessment Flow View
  if (currentView === 'flow' && selectedAssessment) {
    return (
      <div className="space-y-4">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={handleReturnToList}
          className="gap-2"
          style={{ marginBottom: 'var(--spacing-4)' }}
        >
          <Icon name="arrowLeft" size={16} />
          Back to Assessments
        </Button>
        
        <AssessmentFlow
          assessment={selectedAssessment ? {
            id: selectedAssessment.slug,
            title: selectedAssessment.title,
            description: selectedAssessment.description,
            questions: selectedAssessment.questions || [],
            scoring: {
              type: 'sum' as const,
              ranges: [
                {
                  min: 0,
                  max: 4,
                  label: 'Minimal',
                  interpretation: 'Your responses suggest minimal symptoms. Continue practicing healthy coping strategies.',
                  icon: 'success' as const
                },
                {
                  min: 5,
                  max: 9,
                  label: 'Mild',
                  interpretation: 'Your responses suggest mild symptoms. Consider incorporating stress-reduction techniques into your daily routine.',
                  icon: 'warning' as const
                },
                {
                  min: 10,
                  max: 21,
                  label: 'Moderate to Severe',
                  interpretation: 'Your responses suggest significant symptoms. We recommend speaking with a mental health professional.',
                  icon: 'error' as const
                }
              ]
            }
          } : undefined}
          onComplete={handleAssessmentComplete}
        />
      </div>
    );
  }

  // Assessment Results View
  if (currentView === 'results' && assessmentResults) {
    return (
      <div className="space-y-4">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={handleReturnToList}
          className="gap-2"
          style={{ marginBottom: 'var(--spacing-4)' }}
        >
          <Icon name="arrowLeft" size={16} />
          Back to Assessments
        </Button>
        
        <AssessmentResults
          results={assessmentResults}
          onReturnToDashboard={handleReturnToList}
        />
      </div>
    );
  }

  return null;
}

