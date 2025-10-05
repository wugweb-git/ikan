import React from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ErrorBoundary } from '../../ErrorBoundary';
import { Check } from 'lucide-react';

// Import assets
import svgPaths from "../../../imports/svg-rdg85uq8eg";
import img653406093Ca73A37601Cc150PeersBloguCc88BersichtNewsletterP800Avif from "figma:asset/d520368580246229986afc39addcd14047393642.png";

export function NewsletterSection() {
  const benefits = [
    "News & Special Offers",
    "Practical Tips and Exercises"
  ];

  return (
    <ErrorBoundary>
      <section 
        className="w-full"
        style={{
          backgroundColor: 'var(--color-bg-page)',
          paddingTop: 'var(--spacing-8)',
          paddingBottom: 'var(--spacing-8)'
        }}
      >
        <div 
          className="max-w-7xl mx-auto"
          style={{ padding: '0 var(--spacing-4)' }}
        >
          {/* Mobile Layout */}
          <div className="block lg:hidden space-y-6">
            <div>
              <h2 
                className="font-bold mb-4"
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-family-base)'
                }}
              >
                Newsletter Signup
              </h2>
              
              <div 
                className="space-y-3 mb-6"
                style={{ gap: 'var(--spacing-3)' }}
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 flex-shrink-0">
                      <svg viewBox="0 0 12 12" className="w-full h-full">
                        <path d={svgPaths.p1d812c00} fill="var(--color-text-muted)" />
                      </svg>
                    </div>
                    <p 
                      className="leading-relaxed"
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-text-primary)',
                        lineHeight: 'var(--line-height-md)',
                        fontFamily: 'var(--font-family-base)'
                      }}
                    >
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <div 
                className="space-y-4"
                style={{ gap: 'var(--spacing-4)' }}
              >
                <div 
                  className="flex gap-4"
                  style={{ gap: 'var(--spacing-4)' }}
                >
                  <Input
                    placeholder="First Name"
                    className="ikan-input flex-1"
                    style={{
                      backgroundColor: 'var(--color-bg-input)',
                      border: '1px solid var(--color-border-default)',
                      height: '48px',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="ikan-input flex-1"
                    style={{
                      backgroundColor: 'var(--color-bg-input)',
                      border: '1px solid var(--color-border-default)',
                      height: '48px',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  />
                </div>
                <Button 
                  onClick={() => {
                    // TODO: Implement newsletter signup functionality
                    console.log('Newsletter signup clicked');
                  }}
                  className="ikan-button w-full mobile-button touch-target"
                  style={{
                    backgroundColor: 'var(--color-primary-default)',
                    color: 'var(--color-primary-on)',
                    height: '48px',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  Sign up now!
                </Button>
              </div>

              <p 
                className="text-sm mt-4 leading-relaxed"
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-muted)',
                  lineHeight: 'var(--line-height-md)',
                  fontFamily: 'var(--font-family-base)',
                  marginTop: 'var(--spacing-4)'
                }}
              >
                Privacy: We store and process your personal data based on our privacy policy. You can unsubscribe at any time.
              </p>
            </div>

            <div 
              className="relative rounded-xl overflow-hidden aspect-video"
              style={{ borderRadius: 'var(--radius-lg)' }}
            >
              <ImageWithFallback 
                src={img653406093Ca73A37601Cc150PeersBloguCc88BersichtNewsletterP800Avif}
                alt="Newsletter signup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div 
              className="flex items-stretch gap-0 rounded-2xl overflow-hidden"
              style={{ borderRadius: 'var(--radius-lg)' }}
            >
              {/* Form Section */}
              <div 
                className="flex-1 p-12"
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  padding: 'var(--spacing-8)'
                }}
              >
                <div 
                  className="space-y-8 max-w-md"
                  style={{ gap: 'var(--spacing-8)' }}
                >
                  {/* Header */}
                  <div 
                    className="space-y-4"
                    style={{ gap: 'var(--spacing-4)' }}
                  >
                    <h2 
                      className="font-bold"
                      style={{
                        fontSize: 'var(--text-2xl)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--color-text-primary)',
                        fontFamily: 'var(--font-family-base)'
                      }}
                    >
                      Newsletter Signup
                    </h2>
                    
                    <div 
                      className="space-y-3"
                      style={{ gap: 'var(--spacing-3)' }}
                    >
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-5 h-5 flex-shrink-0">
                            <svg viewBox="0 0 12 12" className="w-full h-full">
                              <path d={svgPaths.p1d812c00} fill="var(--color-text-muted)" />
                            </svg>
                          </div>
                          <p 
                            className="leading-relaxed"
                            style={{
                              fontSize: 'var(--text-sm)',
                              color: 'var(--color-text-primary)',
                              lineHeight: 'var(--line-height-md)',
                              fontFamily: 'var(--font-family-base)'
                            }}
                          >
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Form */}
                  <div 
                    className="space-y-4"
                    style={{ gap: 'var(--spacing-4)' }}
                  >
                    <div 
                      className="flex gap-4"
                      style={{ gap: 'var(--spacing-4)' }}
                    >
                      <Input
                        placeholder="First Name"
                        className="ikan-input flex-1"
                        style={{
                          backgroundColor: 'var(--color-bg-input)',
                          border: '1px solid var(--color-border-default)',
                          height: '48px',
                          borderRadius: 'var(--radius-sm)'
                        }}
                      />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className="ikan-input flex-1"
                        style={{
                          backgroundColor: 'var(--color-bg-input)',
                          border: '1px solid var(--color-border-default)',
                          height: '48px',
                          borderRadius: 'var(--radius-sm)'
                        }}
                      />
                    </div>
                    <Button 
                      className="ikan-button w-full"
                      style={{
                        backgroundColor: 'var(--color-primary-default)',
                        color: 'var(--color-primary-on)',
                        height: '48px',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      Sign up now!
                    </Button>
                  </div>

                  <p 
                    className="text-sm leading-relaxed"
                    style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-text-muted)',
                      lineHeight: 'var(--line-height-md)',
                      fontFamily: 'var(--font-family-base)'
                    }}
                  >
                    Privacy: We store and process your personal data based on our privacy policy. You can unsubscribe at any time.
                  </p>
                </div>
              </div>

              {/* Newsletter Image */}
              <div className="flex-1 relative">
                <ImageWithFallback 
                  src={img653406093Ca73A37601Cc150PeersBloguCc88BersichtNewsletterP800Avif}
                  alt="Newsletter signup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
}