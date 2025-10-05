import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { apiClient } from '../../lib/api-client';
import { cn } from '../ui/utils';
import { AlertCircle, User, Phone } from 'lucide-react';
import ConsultantCard from '../../imports/ConsultantCard';

interface ConsultationProps {
  className?: string;
}

export function Consultation({ className }: ConsultationProps) {
  const [professionals, setProfessionals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  useEffect(() => {
    // Add small delay to ensure API client is properly initialized
    const timer = setTimeout(() => {
      loadProfessionals();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const loadProfessionals = async () => {
    try {
      console.log('Loading professionals from API...');
      const result = await apiClient.getProfessionals();
      console.log('API result:', result);
      
      if (result && result.professionals) {
        setProfessionals(result.professionals);
        console.log('Loaded professionals from API:', result.professionals.length);
      } else {
        throw new Error('No professionals data received from API');
      }
    } catch (error) {
      console.error('Failed to load professionals from API:', error);
      setIsUsingFallback(true);
      
      // The API client should have already fallen back to offline data
      // But let's add an additional fallback just in case
      const fallbackProfessionals = [
        {
          professional_id: '1',
          name: 'Dr. Sarah Johnson',
          title: 'Clinical Psychologist',
          specialties: ['Anxiety', 'Depression', 'Trauma'],
          location: 'New York, NY',
          phone: '+1 (555) 123-4567',
          available: true
        },
        {
          professional_id: '2',
          name: 'Dr. Michael Chen',
          title: 'Licensed Therapist',
          specialties: ['CBT', 'Mindfulness', 'Stress Management'],
          location: 'Los Angeles, CA',
          phone: '+1 (555) 987-6543',
          available: true
        },
        {
          professional_id: '3',
          name: 'Dr. Emily Rodriguez',
          title: 'Psychiatrist',
          specialties: ['Medication Management', 'Bipolar Disorder', 'ADHD'],
          location: 'Chicago, IL',
          phone: '+1 (555) 456-7890',
          available: false
        }
      ];
      
      setProfessionals(fallbackProfessionals);
      console.log('Using fallback professionals data:', fallbackProfessionals.length);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("space-y-6 pb-20 md:pb-6", className)}>
      <div className="space-y-2">
        <h1 
          style={{ 
            fontSize: 'var(--text-2xl)', 
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-text-primary)'
          }}
        >
          Professional Support
        </h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Connect with mental health professionals for personalized support and guidance.
        </p>
      </div>

      {/* Crisis Support Banner */}
      <Card style={{ backgroundColor: 'var(--color-status-danger-light)', borderColor: 'var(--color-status-danger)' }}>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <AlertCircle size={20} style={{ color: 'var(--color-status-danger)' }} />
            <div className="flex-1">
              <h3 style={{ fontWeight: 'var(--font-weight-medium)', color: 'var(--color-status-danger)' }}>
                Crisis Support Available 24/7
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-status-danger)', marginTop: '4px' }}>
                If you're in immediate danger or having thoughts of self-harm, please call emergency services or a crisis hotline.
              </p>
            </div>
            <Button 
              variant="destructive" 
              size="sm"
              className="gap-2"
              onClick={() => {
                // Open emergency services contact modal or direct dial
                const emergencyNumber = '988'; // Suicide & Crisis Lifeline in US
                if (confirm('This will open your phone app to call the Suicide & Crisis Lifeline (988). Continue?')) {
                  window.location.href = `tel:${emergencyNumber}`;
                }
              }}
            >
              <Phone size={14} />
              Get Help Now
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Professional Directory */}
      <div className="space-y-4">
        <h2 
          style={{ 
            fontSize: 'var(--text-lg)', 
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-primary)'
          }}
        >
          Professional Directory
        </h2>

        {loading ? (
          <div className="grid gap-4 md:grid-cols-2">
            {[1, 2].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="animate-pulse space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {professionals.map((professional) => (
              <div key={professional.professional_id} className="hover:shadow-md transition-shadow">
                <ConsultantCard 
                  professional={professional}
                />
              </div>
            ))}
          </div>
        )}

        {!loading && professionals.length === 0 && (
          <Card>
            <CardContent className="p-6 text-center">
              <User size={24} className="mx-auto mb-4" style={{ color: 'var(--color-text-muted)' }} />
              <p style={{ color: 'var(--color-text-muted)' }}>
                No professionals available at this time. Please check back later.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {isUsingFallback && (
        <div 
          className="p-4 rounded-lg"
          style={{ 
            backgroundColor: 'var(--color-status-warning-light)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-status-warning)'
          }}
        >
          <p style={{ 
            fontSize: 'var(--text-sm)', 
            color: 'var(--color-status-warning)',
            lineHeight: 'var(--line-height-md)'
          }}>
            <strong>Notice:</strong> Using offline professional directory data due to connectivity issues.
          </p>
        </div>
      )}

      <div 
        className="p-4 rounded-lg"
        style={{ 
          backgroundColor: 'var(--color-status-info-light)',
          borderRadius: 'var(--radius-md)'
        }}
      >
        <p style={{ 
          fontSize: 'var(--text-sm)', 
          color: 'var(--color-status-info)',
          lineHeight: 'var(--line-height-md)'
        }}>
          <strong>Note:</strong> This is a demonstration of the professional directory feature. In production, 
          this would integrate with scheduling systems and professional availability APIs.
        </p>
      </div>
    </div>
  );
}