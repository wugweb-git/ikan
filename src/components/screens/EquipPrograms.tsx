import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { EquipFlow } from '../EquipFlow';
import { Icon } from '../Icon';
import { useAuth } from '../../contexts/AuthContext';
import { useNotifications } from '../../contexts/NotificationContext';
import { usePayment } from '../../contexts/PaymentContext';
import { cn } from '../ui/utils';
import { apiClient } from '../../lib/api-client';
import { equipProgramsData } from '../../lib/sample-data/equip-programs';
import { projectId, publicAnonKey } from '../../utils/supabase/info';
import svgPaths from "../../imports/svg-ta5wpcle0i";
import figmaCardSvgPaths from "../../imports/svg-1uue509bxb";

// Razorpay global declaration
declare global {
  interface Window {
    Razorpay: any;
  }
}

// Using the actual data structure from your JSON
interface EquipProgram {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  price: number | {
    currency: string;
    amount_cents: number;
    payment_provider: string;
    one_time: boolean;
  };
  currency?: string;
  duration_days: number;
  expires_in_days_after_payment?: number;
  expiry_days_after_purchase?: number;
  modules?: any[];
  days?: any[];
  tags: string[];
  created_at: string;
  equip_id?: string;
  onboarding?: any;
  structure?: any;
}

interface EquipProgramsProps {
  className?: string;
  onNavigate?: (route: string) => void;
}

type ViewState = 'list' | 'preview' | 'payment' | 'program';

// Direct use of your JSON data structure - no transformation needed
const getDisplayPrice = (program: EquipProgram) => {
  if (typeof program.price === 'object') {
    return `₹${(program.price.amount_cents / 100)}`;
  }
  return `₹${program.price}`;
};

export function EquipPrograms({ className, onNavigate }: EquipProgramsProps) {
  const { user } = useAuth();
  const { showToast } = useNotifications();
  const { processPayment, initializePayment, clearCurrentTransaction } = usePayment();
  
  const [currentView, setCurrentView] = useState<ViewState>('list');
  const [selectedProgram, setSelectedProgram] = useState<EquipProgram | null>(null);
  const [programs, setPrograms] = useState<EquipProgram[]>([]);
  const [purchasedPrograms, setPurchasedPrograms] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [currentProgramId, setCurrentProgramId] = useState<string | null>(null);

  // Load programs
  useEffect(() => {
    const loadPrograms = async () => {
      try {
        setIsLoading(true);
        console.log('Loading equip programs...');
        
        // Use fallback data if API fails with proper deduplication
        let loadedPrograms: EquipProgram[] = [];
        
        try {
          const response = await apiClient.getEquipPrograms();
          if (response && response.programs && response.programs.length > 0) {
            loadedPrograms = response.programs;
            console.log('✅ Loaded programs from API:', response.programs.length);
          } else if (response && Array.isArray(response) && response.length > 0) {
            loadedPrograms = response;
            console.log('✅ Loaded programs from API (array format):', response.length);
          } else {
            console.log('📦 API returned empty or invalid data, using sample data');
            loadedPrograms = [...equipProgramsData.equip_programs];
          }
        } catch (error) {
          console.log('📦 API unavailable, attempting automatic seeding...');
          loadedPrograms = [...equipProgramsData.equip_programs];
          
          // Background seeding - don't block the UI
          setTimeout(async () => {
            try {
              console.log('🌱 Background seeding of programs...');
              const seedResponse = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-cc205da9/seed/force-programs`, {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${publicAnonKey}`,
                  'Content-Type': 'application/json'
                }
              });
              
              if (seedResponse.ok) {
                const seedResult = await seedResponse.json();
                console.log('✅ Background seeding successful:', seedResult);
                
                // Silently retry loading programs after seeding
                setTimeout(async () => {
                  try {
                    const retryResponse = await apiClient.getEquipPrograms();
                    if (retryResponse && retryResponse.programs && retryResponse.programs.length >= 4) {
                      const uniquePrograms = retryResponse.programs.filter((program, index, self) => 
                        index === self.findIndex(p => p.id === program.id)
                      );
                      setPrograms(uniquePrograms);
                      console.log('✅ Auto-loaded programs after background seeding:', uniquePrograms.length);
                    }
                  } catch (retryError) {
                    console.log('Background retry failed:', retryError);
                  }
                }, 2000);
              }
            } catch (seedError) {
              console.log('Background seeding failed:', seedError);
            }
          }, 1000);
          
          console.log('✅ Using sample data while seeding in background:', loadedPrograms.length);
        }

        // Ensure no duplicates by program ID
        const validPrograms = loadedPrograms.filter(program => program && program.id);
        const uniquePrograms = validPrograms.filter((program, index, self) => 
          index === self.findIndex(p => p.id === program.id)
        );
        
        console.log('🔧 Program deduplication:', {
          loaded: loadedPrograms.length,
          valid: validPrograms.length,
          unique: uniquePrograms.length,
          duplicates: validPrograms.length - uniquePrograms.length
        });
        
        // Debug: Log all program IDs and titles
        console.log('📋 All unique programs:', uniquePrograms.map(p => ({
          id: p.id,
          slug: p.slug,
          title: p.title,
          duration_days: p.duration_days
        })));
        
        // Log any duplicates for debugging
        const duplicateIds = validPrograms
          .map(p => p.id)
          .filter((id, index, self) => self.indexOf(id) !== index);
        
        if (duplicateIds.length > 0) {
          console.log('🔧 Removed duplicate program IDs:', [...new Set(duplicateIds)]);
        }
        
        setPrograms(uniquePrograms);

        // Load purchased programs
        if (user?.id) {
          try {
            const purchased = await apiClient.getUserPurchasedPrograms(user.id);
            setPurchasedPrograms(new Set(purchased.map((p: any) => p.program_id || p.id)));
            console.log('✅ Loaded purchased programs:', purchased.length);
          } catch (error) {
            console.warn('Failed to load purchased programs:', error);
          }
        }
      } catch (error) {
        console.error('Error loading programs:', error);
        showToast('error', 'Failed to load programs', 'Using offline data');
        setPrograms(equipProgramsData.equip_programs);
      } finally {
        setIsLoading(false);
      }
    };

    loadPrograms();
  }, [user?.id, showToast]);

  const handlePurchase = async (program: EquipProgram) => {
    if (!user) {
      showToast('error', 'Please log in', 'You need to be logged in to purchase programs');
      return;
    }

    try {
      console.log('🔄 Starting purchase process for:', program.title);
      
      const amount = typeof program.price === 'object' ? program.price.amount_cents / 100 : program.price;
      const currency = program.currency || 'INR';
      
      // Step 1: Initialize payment and get order ID
      const orderId = await initializePayment(program.id, amount, currency);
      console.log('✅ Payment initialized with order ID:', orderId);
      
      // Step 2: Load Razorpay script if not already loaded
      const scriptLoaded = await new Promise((resolve) => {
        if (window.Razorpay) {
          resolve(true);
          return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
      
      if (!scriptLoaded) {
        throw new Error('Payment system unavailable. Please try again.');
      }
      
      // Step 3: Open Razorpay checkout
      const razorpay = new window.Razorpay({
        key: process.env.RAZORPAY_KEY_ID || 'rzp_test_key', // Use environment variable
        amount: amount * 100, // Razorpay expects amount in paise
        currency: currency,
        name: 'iKan Mental Health',
        description: `Purchase: ${program.title}`,
        order_id: orderId,
        handler: async (response: any) => {
          try {
            console.log('💳 Payment completed, verifying...', response.razorpay_payment_id);
            
            // Step 4: Process the payment with the response data
            const success = await processPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              amount: amount,
              currency: currency,
              programId: program.id
            });
            
            if (success) {
              showToast('success', 'Program Purchased!', `You now have access to ${program.title}`);
              setPurchasedPrograms(prev => new Set([...prev, program.id]));
              
              // Store program data for onboarding
              localStorage.setItem('ikan-selected-program', JSON.stringify({
                id: program.id,
                slug: program.slug,
                title: program.title,
                description: program.description,
                duration_days: program.duration_days,
                tags: program.tags
              }));
              
              // Navigate to program landing
              if (onNavigate) {
                onNavigate('/equip-programs-landing');
              }
            } else {
              throw new Error('Payment verification failed');
            }
          } catch (error) {
            console.error('Payment verification failed:', error);
            showToast('error', 'Payment Failed', 'Payment could not be verified. Please contact support.');
          }
        },
        prefill: {
          name: user.user_metadata?.name || user.email?.split('@')[0] || '',
          email: user.email || '',
          contact: user.user_metadata?.phone || ''
        },
        theme: {
          color: '#2A2A2A' // iKan primary color
        },
        modal: {
          ondismiss: () => {
            console.log('💳 Payment cancelled by user');
            clearCurrentTransaction(); // Clear transaction on cancellation
            showToast('info', 'Payment Cancelled', 'You can try again anytime');
          }
        }
      });
      
      razorpay.open();
      
    } catch (error) {
      console.error('Purchase failed:', error);
      clearCurrentTransaction(); // Clear transaction on error
      showToast('error', 'Payment Failed', error.message || 'Please try again or contact support');
    }
  };

  const handlePreview = (program: EquipProgram) => {
    console.log('🔍 Previewing program:', program.title);
    
    // Store the selected program for the preview
    localStorage.setItem('ikan-selected-program', JSON.stringify({
      id: program.id,
      slug: program.slug,
      title: program.title,
      description: program.description,
      summary: program.summary,
      duration_days: program.duration_days,
      tags: program.tags,
      price: program.price
    }));
    
    // Navigate to the Figma landing page
    if (onNavigate) {
      onNavigate('/equip-programs-landing');
    }
  };

  const handleStartProgram = (program: EquipProgram) => {
    if (!purchasedPrograms.has(program.id)) {
      handlePurchase(program);
      return;
    }

    console.log('🚀 Starting purchased program:', program.title);
    
    // Store program data
    localStorage.setItem('ikan-selected-program', JSON.stringify({
      id: program.id,
      slug: program.slug,
      title: program.title,
      description: program.description,
      duration_days: program.duration_days,
      tags: program.tags
    }));
    
    // Navigate to program flow
    if (onNavigate) {
      onNavigate('/equip-program-onboarding');
    }
  };

  const isPurchased = (programId: string) => purchasedPrograms.has(programId);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div 
            className="animate-spin rounded-full h-8 w-8 border-2 border-t-0 mx-auto"
            style={{ borderColor: 'var(--color-primary-default)' }}
          ></div>
          <p style={{ color: 'var(--color-text-muted)' }}>Loading programs...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={cn("space-y-6", className)}>
        {/* Header Section */}
        <div className="space-y-2">
          <h1 
            style={{ 
              fontSize: 'var(--text-2xl)', 
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-family-base)'
            }}
          >
            Equip Programs
          </h1>
          <p 
            style={{ 
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-family-base)'
            }}
          >
            Structured programs to help you build mental wellness skills
          </p>
        </div>



        {/* Programs Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {programs
            .filter(program => program && program.id)
            .filter((program, index, self) => 
              index === self.findIndex(p => p.id === program.id)
            )
            .map((program, index) => {
            const isProgramPurchased = isPurchased(program.id);
            
            // Debug logging for problematic ID
            if (program.id === '00000000-0000-0000-0000-000000000010') {
              console.log('🔍 Rendering problematic program:', { 
                id: program.id, 
                index, 
                title: program.title,
                key: `program-${program.id}-${index}`
              });
            }
            
            return (
              <div key={`program-${program.id}-${index}`} className="group">
                {/* Desktop Card Layout */}
                <div className="hidden md:block">
                  <Card 
                    className="relative overflow-hidden transition-all duration-200 hover:shadow-md cursor-pointer h-full"
                    style={{
                      backgroundColor: 'var(--color-bg-card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--color-border-default)'
                    }}
                    onClick={() => handlePreview(program)}
                  >
                    {/* Using Figma Card Layout */}
                    <div className="size-full">
                      <div 
                        className="box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full"
                        style={{ padding: 'var(--spacing-6)' }}
                      >
                        {/* Title Section (Frame28) */}
                        <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full">
                          <div className="flex flex-col justify-center relative shrink-0 w-full">
                            <p 
                              className="leading-[15px] uppercase tracking-[1.5px]"
                              style={{ 
                                fontSize: '14.648px',
                                color: isProgramPurchased ? 'var(--color-status-success)' : 'var(--color-text-primary)',
                                fontFamily: 'var(--font-family-base)',
                                fontWeight: 'var(--font-weight-semibold)'
                              }}
                            >
                              {isProgramPurchased ? 'PURCHASED' : (program.tags && program.tags.length > 0 ? program.tags[0] : 'PROGRAM')}
                            </p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0 w-full">
                            <p 
                              className="leading-[37.4px]"
                              style={{ 
                                fontSize: '32.672px',
                                color: 'var(--color-text-primary)',
                                fontFamily: 'var(--font-family-base)',
                                fontWeight: 'var(--font-weight-semibold)'
                              }}
                            >
                              {program.title}
                            </p>
                          </div>
                        </div>

                        {/* Description Section (Container) */}
                        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
                          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0">
                            <p 
                              className="leading-[27.2px]"
                              style={{ 
                                fontSize: '15.406px',
                                color: 'var(--color-text-muted)',
                                fontFamily: 'var(--font-family-base)',
                                fontWeight: 'var(--font-weight-normal)'
                              }}
                            >
                              {program.summary}
                            </p>
                          </div>
                        </div>

                        {/* Bottom Section with Image and Actions (Frame27) */}
                        <div className="content-stretch flex gap-[12px] items-end relative shrink-0 w-full">
                          {/* Image Placeholder */}
                          <div 
                            className="shrink-0 size-[148px] rounded-lg"
                            style={{ backgroundColor: 'var(--color-bg-muted)' }}
                          />
                          
                          {/* Right Section with Info and Button */}
                          <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[177px]">
                            {/* Duration Info */}
                            <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
                              <div className="relative shrink-0 size-[18px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                  <g>
                                    <path d={figmaCardSvgPaths.p239c0200} stroke="var(--color-text-primary)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.9375 2.25V15.75" stroke="var(--color-text-primary)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.91249 5.02496H2.66249" stroke="var(--color-text-primary)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.91249 7.5H2.66249" stroke="var(--color-text-primary)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.91249 9.9H2.66249" stroke="var(--color-text-primary)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.9125 12.2999H3.9375" stroke="var(--color-text-primary)" strokeLinecap="round" strokeLinejoin="round" />
                                  </g>
                                </svg>
                              </div>
                              <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-center text-nowrap tracking-[0.06px] uppercase">
                                <p 
                                  className="leading-[24px] whitespace-pre"
                                  style={{ 
                                    fontSize: '12px',
                                    color: 'var(--color-text-primary)',
                                    fontFamily: 'var(--font-family-base)',
                                    fontWeight: 'var(--font-weight-medium)'
                                  }}
                                >
                                  {program.duration_days} days
                                </p>
                              </div>
                            </div>

                            {/* Activities Info */}
                            <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
                              <div className="relative shrink-0 size-[18px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                  <g>
                                    <path d={figmaCardSvgPaths.p239c0200} stroke="var(--color-text-primary)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.9375 2.25V15.75" stroke="var(--color-text-primary)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.91249 5.02496H2.66249" stroke="var(--color-text-primary)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.91249 7.5H2.66249" stroke="var(--color-text-primary)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.91249 9.9H2.66249" stroke="var(--color-text-primary)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.9125 12.2999H3.9375" stroke="var(--color-text-primary)" strokeLinecap="round" strokeLinejoin="round" />
                                  </g>
                                </svg>
                              </div>
                              <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-center text-nowrap tracking-[0.06px] uppercase">
                                <p 
                                  className="leading-[24px] whitespace-pre"
                                  style={{ 
                                    fontSize: '12px',
                                    color: 'var(--color-text-primary)',
                                    fontFamily: 'var(--font-family-base)',
                                    fontWeight: 'var(--font-weight-medium)'
                                  }}
                                >
                                  {getDisplayPrice(program)}
                                </p>
                              </div>
                            </div>

                            {/* Action Button */}
                            <div 
                              className="relative rounded-[8px] shrink-0 w-full cursor-pointer"
                              style={{
                                backgroundColor: isProgramPurchased 
                                  ? 'var(--color-status-success)' 
                                  : 'var(--color-primary-default)'
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                // KNOW MORE should go to landing page for preview
                                if (isProgramPurchased) {
                                  handleStartProgram(program); // If purchased, continue to program
                                } else {
                                  handlePreview(program); // If not purchased, preview on landing page
                                }
                              }}
                            >
                              <div className="flex flex-row items-center size-full">
                                <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative w-full">
                                  <div className="relative shrink-0 size-[18px]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                      <g>
                                        <path d={figmaCardSvgPaths.p239c0200} stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.9375 2.25V15.75" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.91249 5.02496H2.66249" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.91249 7.5H2.66249" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.91249 9.9H2.66249" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.9125 12.2999H3.9375" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                      </g>
                                    </svg>
                                  </div>
                                  <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-nowrap">
                                    <p 
                                      className="leading-[28px] whitespace-pre"
                                      style={{ 
                                        fontSize: '14px',
                                        color: 'white',
                                        fontFamily: 'var(--font-family-base)',
                                        fontWeight: 'var(--font-weight-medium)'
                                      }}
                                    >
                                      {isProgramPurchased ? 'CONTINUE' : 'KNOW MORE'}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Mobile Card Layout - Figma Design */}
                <div className="block md:hidden">
                  <div 
                    className="relative overflow-hidden cursor-pointer"
                    style={{
                      backgroundColor: 'var(--color-bg-card)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--color-border-default)'
                    }}
                    onClick={() => handlePreview(program)}
                  >
                    <div className="size-full">
                      <div 
                        className="box-border content-stretch flex flex-col items-start relative size-full"
                        style={{
                          gap: 'var(--spacing-6)', // 24px
                          padding: 'var(--spacing-6)' // 24px
                        }}
                      >
                        {/* Title Section */}
                        <div 
                          className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 w-full"
                          style={{
                            gap: 'var(--spacing-2)', // 8px
                            fontFamily: 'var(--font-family-base)',
                            fontWeight: 'var(--font-weight-semibold)'
                          }}
                        >
                          <div 
                            className="flex flex-col justify-center relative shrink-0 tracking-[1.5px] uppercase w-full"
                            style={{
                              fontSize: 'var(--text-sm)', // 14px equivalent
                              fontFamily: 'var(--font-family-base)',
                              color: 'var(--color-text-primary)'
                            }}
                          >
                            <p className="leading-[15px]">
                              {isProgramPurchased ? 'PURCHASED' : (program.tags && program.tags.length > 0 ? program.tags[0] : 'PROGRAM')}
                            </p>
                          </div>
                          <div 
                            className="flex flex-col justify-center relative shrink-0 w-full"
                            style={{
                              fontSize: 'var(--text-3xl)', // 32px equivalent 
                              fontFamily: 'var(--font-family-base)',
                              color: 'var(--color-text-primary)'
                            }}
                          >
                            <p className="leading-[37.4px]">{program.title}</p>
                          </div>
                        </div>

                        {/* Description Section */}
                        <div 
                          className="content-stretch flex items-center justify-center relative shrink-0 w-full"
                          style={{
                            gap: 'var(--spacing-3)' // 12px (closest to 10px)
                          }}
                        >
                          <div 
                            className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0"
                            style={{
                              fontFamily: 'var(--font-family-base)',
                              fontWeight: 'var(--font-weight-regular)',
                              fontSize: 'var(--text-base)', // 16px equivalent
                              color: 'var(--color-text-primary)'
                            }}
                          >
                            <p className="leading-[27.2px]">{program.summary}</p>
                          </div>
                        </div>

                        {/* Bottom Section with Image and Actions */}
                        <div 
                          className="content-stretch flex items-end relative shrink-0 w-full"
                          style={{
                            gap: 'var(--spacing-3)' // 12px
                          }}
                        >
                          {/* Program Type/Status Image Placeholder */}
                          <div 
                            className="relative shrink-0 overflow-hidden"
                            style={{
                              width: '148px', // Keep specific size for image
                              height: '148px',
                              borderRadius: 'var(--radius-sm)' // 8px
                            }}
                          >
                            <img 
                              src="https://images.unsplash.com/photo-1621887348744-6b0444f8a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB3ZWxsbmVzcyUyMHByb2dyYW18ZW58MXx8fHwxNzU5MzA1ODk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                              alt="Mental wellness program"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                              <div className="text-center space-y-2">
                                {isProgramPurchased ? (
                                  <>
                                    <Icon name="checkCircle" size={32} style={{ color: 'var(--color-status-success)' }} />
                                    <div 
                                      className="font-medium text-white uppercase tracking-wide"
                                      style={{
                                        fontSize: 'var(--text-xs)', // 12px (closest available)
                                        fontFamily: 'var(--font-family-base)'
                                      }}
                                    >
                                      {getDisplayPrice(program)}
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <Icon name="wrench" size={32} style={{ color: 'white' }} />
                                    <div 
                                      className="font-medium text-white uppercase tracking-wide"
                                      style={{
                                        fontSize: 'var(--text-xs)', // 12px (closest available)
                                        fontFamily: 'var(--font-family-base)'
                                      }}
                                    >
                                      {getDisplayPrice(program)}
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          {/* Actions Section */}
                          <div 
                            className="content-stretch flex flex-col items-start relative shrink-0 flex-1"
                            style={{
                              gap: 'var(--spacing-5)' // 20px (closest to 18px)
                            }}
                          >
                            {/* Duration Info */}
                            <div 
                              className="content-stretch flex items-center justify-center relative shrink-0"
                              style={{
                                gap: 'var(--spacing-2)' // 8px (closest to 6px)
                              }}
                            >
                              <div className="relative shrink-0 size-[18px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                  <g id="Component 24">
                                    <path d={svgPaths.p239c0200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.9375 2.25V15.75" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.91249 5.02496H2.66249" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.91249 7.5H2.66249" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.91249 9.9H2.66249" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.9125 12.2999H3.9375" id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                                  </g>
                                </svg>
                              </div>
                              <div 
                                className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-center text-nowrap tracking-[0.06px] uppercase"
                                style={{
                                  fontFamily: 'var(--font-family-base)',
                                  fontWeight: 'var(--font-weight-medium)',
                                  fontSize: 'var(--text-xs)',
                                  color: 'var(--color-text-primary)'
                                }}
                              >
                                <p className="leading-[24px] whitespace-pre">{program.duration_days} days</p>
                              </div>
                            </div>

                            {/* Activities Info */}
                            <div 
                              className="content-stretch flex items-center justify-center relative shrink-0"
                              style={{
                                gap: 'var(--spacing-2)' // 8px (closest to 6px)
                              }}
                            >
                              <div className="relative shrink-0 size-[18px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                                  <g id="Component 24">
                                    <path d={svgPaths.p239c0200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.9375 2.25V15.75" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.91249 5.02496H2.66249" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.91249 7.5H2.66249" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.91249 9.9H2.66249" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.9125 12.2999H3.9375" id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                                  </g>
                                </svg>
                              </div>
                              <div 
                                className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-center text-nowrap tracking-[0.06px] uppercase"
                                style={{
                                  fontFamily: 'var(--font-family-base)',
                                  fontWeight: 'var(--font-weight-medium)',
                                  fontSize: 'var(--text-xs)',
                                  color: 'var(--color-text-primary)'
                                }}
                              >
                                <p className="leading-[24px] whitespace-pre">{(program.modules?.length || program.days?.length || 23)} Activities</p>
                              </div>
                            </div>

                            {/* Action Button */}
                            <button
                              onClick={() => {
                                // Store the selected program for the landing page
                                localStorage.setItem('ikan-selected-program', JSON.stringify({
                                  id: program.id,
                                  slug: program.slug,
                                  title: program.title,
                                  description: program.description,
                                  summary: program.summary,
                                  duration_days: program.duration_days,
                                  tags: program.tags,
                                  price: program.price
                                }));
                                
                                if (onNavigate) {
                                  onNavigate('/equip-programs-landing');
                                }
                              }}
                              style={{
                                backgroundColor: 'var(--color-primary-default)',
                                color: 'var(--color-primary-on)',
                                borderRadius: 'var(--radius-md)',
                                fontFamily: 'var(--font-family-base)',
                                fontWeight: 'var(--font-weight-medium)',
                                fontSize: 'var(--text-sm)',
                                padding: 'var(--spacing-2) var(--spacing-4)',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--spacing-2)',
                                width: '100%',
                                justifyContent: 'center'
                              }}
                            >
                              <Icon name="arrowRight" size={16} />
                              PREVIEW
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {programs.length === 0 && (
          <div className="text-center py-12">
            <Icon name="package" size={48} style={{ color: 'var(--color-text-muted)', margin: '0 auto 16px' }} />
            <h3 
              style={{ 
                fontSize: 'var(--text-lg)', 
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-text-primary)',
                fontFamily: 'var(--font-family-base)',
                marginBottom: 'var(--spacing-2)'
              }}
            >
              No programs available
            </h3>
            <p 
              style={{ 
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-family-base)'
              }}
            >
              Check back later for new mental wellness programs
            </p>
          </div>
        )}
      </div>

      {/* Payment Dialog */}
      <Dialog open={paymentDialogOpen} onOpenChange={setPaymentDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Purchase</DialogTitle>
            <DialogDescription>
              {selectedProgram && (
                <>
                  You're about to purchase <strong>{selectedProgram.title}</strong> for{' '}
                  <strong>{getDisplayPrice(selectedProgram)}</strong>.
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setPaymentDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => selectedProgram && handlePurchase(selectedProgram)}>
              Complete Purchase
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}