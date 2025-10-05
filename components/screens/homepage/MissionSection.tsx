import React from 'react';
import { Button } from '../../ui/button';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ErrorBoundary } from '../../ErrorBoundary';
import { Play } from 'lucide-react';

// Import assets
import svgPaths from "../../../imports/svg-rdg85uq8eg";
import img66292B188D01B0Eb2Ae89AdcCmInterviewThumbnailP500Webp from "figma:asset/7bc6aa20bd99b5e785a9f8afbbacaa7bb10acabd.png";

export function MissionSection() {
  return (
    <ErrorBoundary>
      <section 
        className="w-full"
        style={{
          backgroundColor: 'var(--color-bg-card)',
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
            <div 
              className="relative rounded-xl overflow-hidden aspect-video"
              style={{ borderRadius: 'var(--radius-lg)' }}
            >
              <ImageWithFallback 
                src={img66292B188D01B0Eb2Ae89AdcCmInterviewThumbnailP500Webp}
                alt="Mission interview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="lg" 
                  className="rounded-full w-16 h-16 p-0"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: 'var(--color-text-primary)',
                    borderRadius: 'var(--radius-pill)'
                  }}
                >
                  <Play className="w-6 h-6 ml-1" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p 
                  className="font-semibold text-center"
                  style={{
                    color: 'var(--color-text-inverse)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-semibold)',
                    fontFamily: 'var(--font-family-base)'
                  }}
                >
                  Watch the full interview
                </p>
              </div>
            </div>

            <div 
              className="p-6 rounded-xl"
              style={{
                backgroundColor: 'var(--color-accent-default)',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <h2 
                className="font-bold mb-4"
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-family-base)'
                }}
              >
                Our Mission
              </h2>
              <p 
                className="leading-relaxed"
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-text-muted)',
                  lineHeight: 'var(--line-height-md)',
                  fontFamily: 'var(--font-family-base)'
                }}
              >
                We believe that mental health support should be accessible, evidence-based, and delivered with empathy. Our platform connects individuals with qualified professionals and peer communities, creating a comprehensive support system for mental wellness and personal growth.
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div 
              className="flex gap-6 items-stretch"
              style={{ gap: 'var(--spacing-6)' }}
            >
              {/* Video Section */}
              <div className="flex-shrink-0 w-96">
                <div 
                  className="relative rounded-xl overflow-hidden h-80"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                >
                  <ImageWithFallback 
                    src={img66292B188D01B0Eb2Ae89AdcCmInterviewThumbnailP500Webp}
                    alt="Mission interview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="rounded-full w-16 h-16 p-0"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: 'var(--color-text-primary)',
                        borderRadius: 'var(--radius-pill)'
                      }}
                    >
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p 
                      className="font-semibold text-center"
                      style={{
                        color: 'var(--color-text-inverse)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 'var(--font-weight-semibold)',
                        fontFamily: 'var(--font-family-base)'
                      }}
                    >
                      Watch the full<br />interview
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Content */}
              <div 
                className="flex-1 p-12 rounded-xl flex flex-col justify-center"
                style={{
                  backgroundColor: 'var(--color-accent-default)',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <h2 
                  className="font-bold mb-6"
                  style={{
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-family-base)'
                  }}
                >
                  Our Mission
                </h2>
                <p 
                  className="leading-relaxed"
                  style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-text-muted)',
                    lineHeight: 'var(--line-height-md)',
                    fontFamily: 'var(--font-family-base)'
                  }}
                >
                  We believe that mental health support should be accessible, evidence-based, and delivered with empathy. Our platform connects individuals with qualified professionals and peer communities, creating a comprehensive support system for mental wellness and personal growth. Through innovative technology and human connection, we're building a world where everyone has access to the mental health resources they need to thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
}