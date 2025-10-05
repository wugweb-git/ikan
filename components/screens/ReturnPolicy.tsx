import React from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Icon } from '../Icon';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

interface ReturnPolicyProps {
  className?: string;
  onBack?: () => void;
}

export function ReturnPolicy({ className, onBack }: ReturnPolicyProps) {
  const isMobile = useIsMobile();

  const lastUpdated = "January 4, 2025";

  const policyTypes = [
    {
      icon: 'smartphone',
      title: 'Digital Services',
      description: 'Assessments, programs, and digital content',
      features: [
        '7-day full refund window',
        'Partial refunds for unused programs',
        'Email billing@ikan.health to request',
        'Processing time: 3-5 business days'
      ],
      highlight: '7 Days'
    },
    {
      icon: 'calendar',
      title: 'Subscription Plans',
      description: 'Monthly and annual membership subscriptions',
      features: [
        'Cancel anytime with no fees',
        'Pro-rated refunds to cancellation date',
        'Access continues until period ends',
        'Automatic processing via account settings'
      ],
      highlight: 'Anytime'
    },
    {
      icon: 'video',
      title: 'Consultation Services',
      description: 'One-on-one sessions with mental health professionals',
      features: [
        'Full refund up to 24 hours before',
        'Reschedule with 2+ hours notice',
        'No-show appointments non-refundable',
        'Credit issued for provider cancellations'
      ],
      highlight: '24 Hours'
    }
  ];

  const processSteps = [
    {
      step: 1,
      icon: 'mail',
      title: 'Contact Us',
      description: 'Email billing@ikan.health with your order number and reason for refund'
    },
    {
      step: 2,
      icon: 'user-check',
      title: 'Verification',
      description: 'Our team reviews your request and verifies eligibility within 24 hours'
    },
    {
      step: 3,
      icon: 'credit-card',
      title: 'Processing',
      description: 'Approved refunds are processed within 3-5 business days'
    },
    {
      step: 4,
      icon: 'check-circle',
      title: 'Completion',
      description: 'Refund appears on your original payment method within 5-7 business days'
    }
  ];

  const faqs = [
    {
      question: 'What if I\'m not satisfied with a program?',
      answer: 'We offer partial refunds for unused portions of Equip Programs. Contact us with details about your experience and we\'ll work out a fair resolution.'
    },
    {
      question: 'Can I get a refund after the 7-day period?',
      answer: 'While our standard policy is 7 days, we consider exceptions for technical issues, billing errors, or extenuating circumstances. Contact our support team to discuss your situation.'
    },
    {
      question: 'What happens to my data after a refund?',
      answer: 'Your account data remains intact even after a refund. You can continue using our free tier features or resubscribe at any time.'
    },
    {
      question: 'Are gift subscriptions refundable?',
      answer: 'Gift subscriptions follow the same refund policy. The gift recipient can request refunds, or the purchaser can request a refund within 7 days of purchase.'
    }
  ];

  return (
    <div 
      className={`min-h-screen ${className || ''}`}
      style={{
        backgroundColor: 'var(--color-bg-page)',
        fontFamily: 'var(--font-family-base)'
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--color-primary-default) 0%, #1a1a1a 100%)',
          color: 'var(--color-text-inverse)',
          padding: isMobile ? 'var(--spacing-8) var(--spacing-4)' : 'var(--spacing-12) var(--spacing-6)'
        }}
      >
        <div 
          className="w-full mx-auto"
          style={{
            maxWidth: 'var(--constraint-content-max)'
          }}
        >
          {/* Back Navigation */}
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 mb-6 touch-target hover:opacity-80 transition-all duration-200"
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-regular)',
                color: 'rgba(255, 255, 255, 0.8)',
                background: 'none',
                border: 'none',
                padding: '0',
                cursor: 'pointer',
                marginBottom: 'var(--ikan-component-spacing-large)'
              }}
            >
              <Icon name="arrow-left" size={16} />
              Back
            </button>
          )}

          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center mb-6">
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-4)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <Icon name="rotate-ccw" size={32} style={{ color: 'var(--color-text-inverse)' }} />
              </div>
            </div>
            
            <h1 
              style={{
                fontSize: isMobile ? 'var(--text-3xl)' : 'var(--text-4xl)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: 'var(--line-height-sm)',
                margin: '0',
                marginBottom: 'var(--spacing-4)'
              }}
            >
              Return Policy
            </h1>
            
            <p 
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-regular)',
                lineHeight: 'var(--line-height-md)',
                opacity: 0.9,
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              Your satisfaction is our priority. We offer flexible return options to ensure you're happy with your mental health journey.
            </p>
            
            <div 
              className="inline-flex items-center gap-2 mt-4"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: 'var(--spacing-2) var(--spacing-4)',
                borderRadius: 'var(--radius-pill)',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-regular)'
              }}
            >
              <Icon name="calendar" size={16} />
              Last updated: {lastUpdated}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div 
        className="w-full mx-auto"
        style={{
          maxWidth: 'var(--constraint-content-max)',
          padding: isMobile ? 'var(--spacing-8) var(--spacing-4)' : 'var(--spacing-12) var(--spacing-6)',
          marginTop: '-var(--spacing-8)',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Policy Types Grid */}
        <div 
          className="grid gap-6 mb-12"
          style={{
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            marginBottom: 'var(--spacing-12)'
          }}
        >
          {policyTypes.map((type, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden"
              style={{
                backgroundColor: 'var(--color-bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border-light)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {/* Highlight Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: 'var(--spacing-4)',
                  right: 'var(--spacing-4)',
                  backgroundColor: 'var(--color-status-success)',
                  color: 'var(--color-text-inverse)',
                  padding: 'var(--spacing-1) var(--spacing-3)',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 'var(--font-weight-medium)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {type.highlight}
              </div>

              <CardContent style={{ padding: 'var(--spacing-6)' }}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      style={{
                        backgroundColor: 'var(--color-primary-default)',
                        borderRadius: 'var(--radius-md)',
                        padding: 'var(--spacing-3)',
                        color: 'var(--color-text-inverse)'
                      }}
                    >
                      <Icon name={type.icon as any} size={24} />
                    </div>
                    
                    <div>
                      <h3 
                        style={{
                          fontSize: 'var(--text-lg)',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--color-text-primary)',
                          margin: '0'
                        }}
                      >
                        {type.title}
                      </h3>
                      <p 
                        style={{
                          fontSize: 'var(--text-sm)',
                          fontWeight: 'var(--font-weight-regular)',
                          color: 'var(--color-text-muted)',
                          margin: '0'
                        }}
                      >
                        {type.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start gap-2"
                        style={{
                          fontSize: 'var(--text-sm)',
                          fontWeight: 'var(--font-weight-regular)',
                          color: 'var(--color-text-primary)',
                          lineHeight: 'var(--line-height-md)'
                        }}
                      >
                        <Icon 
                          name="check" 
                          size={16} 
                          style={{ 
                            color: 'var(--color-status-success)', 
                            marginTop: '2px',
                            flexShrink: 0
                          }} 
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Refund Process */}
        <Card
          className="mb-12"
          style={{
            backgroundColor: 'var(--color-bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border-light)',
            marginBottom: 'var(--spacing-12)'
          }}
        >
          <CardContent style={{ padding: 'var(--spacing-8)' }}>
            <div className="space-y-8">
              <div className="text-center space-y-2">
                <h2 
                  style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-text-primary)',
                    margin: '0'
                  }}
                >
                  How to Request a Refund
                </h2>
                <p 
                  style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-regular)',
                    color: 'var(--color-text-muted)',
                    margin: '0',
                    lineHeight: 'var(--line-height-md)'
                  }}
                >
                  Our streamlined process ensures quick and hassle-free refunds
                </p>
              </div>

              <div 
                className="grid gap-6"
                style={{
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))'
                }}
              >
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Connector Line - Desktop only */}
                    {!isMobile && index < processSteps.length - 1 && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '32px',
                          right: '-24px',
                          width: '48px',
                          height: '2px',
                          backgroundColor: 'var(--color-border-light)',
                          zIndex: 1
                        }}
                      />
                    )}
                    
                    <div className="text-center space-y-3">
                      <div 
                        className="relative inline-flex items-center justify-center"
                        style={{
                          backgroundColor: 'var(--color-primary-default)',
                          borderRadius: '50%',
                          width: '64px',
                          height: '64px',
                          color: 'var(--color-text-inverse)',
                          zIndex: 2,
                          position: 'relative'
                        }}
                      >
                        <Icon name={step.icon as any} size={24} />
                        <div
                          style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '-8px',
                            backgroundColor: 'var(--color-status-info)',
                            color: 'var(--color-text-inverse)',
                            borderRadius: '50%',
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 'var(--text-xs)',
                            fontWeight: 'var(--font-weight-medium)'
                          }}
                        >
                          {step.step}
                        </div>
                      </div>
                      
                      <div>
                        <h3 
                          style={{
                            fontSize: 'var(--text-base)',
                            fontWeight: 'var(--font-weight-medium)',
                            color: 'var(--color-text-primary)',
                            margin: '0 0 var(--spacing-1) 0'
                          }}
                        >
                          {step.title}
                        </h3>
                        <p 
                          style={{
                            fontSize: 'var(--text-sm)',
                            fontWeight: 'var(--font-weight-regular)',
                            color: 'var(--color-text-muted)',
                            margin: '0',
                            lineHeight: 'var(--line-height-md)'
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  onClick={() => window.open('mailto:billing@ikan.health?subject=Refund Request', '_blank')}
                  style={{
                    height: 'var(--ikan-component-button-height)',
                    borderRadius: 'var(--ikan-component-border-radius)',
                    backgroundColor: 'var(--semantic-button-primary-bg)',
                    color: 'var(--semantic-button-primary-fg)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    border: 'none'
                  }}
                >
                  <Icon name="mail" size={20} style={{ marginRight: 'var(--spacing-2)' }} />
                  Request Refund
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card
          style={{
            backgroundColor: 'var(--color-bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border-light)'
          }}
        >
          <CardContent style={{ padding: 'var(--spacing-8)' }}>
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 
                  style={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-text-primary)',
                    margin: '0'
                  }}
                >
                  Common Questions
                </h2>
                <p 
                  style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-regular)',
                    color: 'var(--color-text-muted)',
                    margin: '0',
                    lineHeight: 'var(--line-height-md)'
                  }}
                >
                  Quick answers to frequently asked questions about refunds
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    style={{
                      padding: 'var(--spacing-4)',
                      backgroundColor: 'var(--color-bg-muted)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border-light)'
                    }}
                  >
                    <h3 
                      style={{
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-medium)',
                        color: 'var(--color-text-primary)',
                        margin: '0 0 var(--spacing-2) 0'
                      }}
                    >
                      {faq.question}
                    </h3>
                    <p 
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: 'var(--font-weight-regular)',
                        color: 'var(--color-text-muted)',
                        margin: '0',
                        lineHeight: 'var(--line-height-md)'
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Support Section */}
        <Card 
          className="mt-12"
          style={{
            backgroundColor: 'var(--color-bg-muted)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border-light)',
            marginTop: 'var(--spacing-12)',
            textAlign: 'center'
          }}
        >
          <CardContent style={{ padding: 'var(--spacing-8)' }}>
            <div className="space-y-4">
              <h3 
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-text-primary)',
                  margin: '0'
                }}
              >
                Need Help with a Refund?
              </h3>
              
              <p 
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-regular)',
                  color: 'var(--color-text-muted)',
                  margin: '0',
                  lineHeight: 'var(--line-height-md)',
                  maxWidth: '500px',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              >
                Our billing team is here to help with refund requests, payment issues, and account questions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <a
                  href="mailto:billing@ikan.health"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg hover:opacity-80 transition-opacity"
                  style={{
                    backgroundColor: 'var(--color-primary-default)',
                    color: 'var(--color-text-inverse)',
                    textDecoration: 'none',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)'
                  }}
                >
                  <Icon name="mail" size={20} />
                  billing@ikan.health
                </a>
                
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border hover:opacity-80 transition-opacity"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--color-text-primary)',
                    border: '1px solid var(--color-border-default)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    cursor: 'pointer'
                  }}
                >
                  <Icon name="message-circle" size={20} />
                  Contact Support
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}