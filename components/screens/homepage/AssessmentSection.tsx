import React from 'react';
import { Button } from '../../ui/button';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ErrorBoundary } from '../../ErrorBoundary';
import { Play } from 'lucide-react';

// Import assets
import svgPaths from "../../../imports/svg-rdg85uq8eg";
import img6539Ab94Cbe52Be4E0475506ThumbnailVideoPpzmAvif from "figma:asset/dac40265648f46f1bc58bd0517c761f36d8747b2.png";
import img653420D817Daafaf291Eec74PeersKurseAngstSymbolbildP500Avif from "figma:asset/74379979001a9436419ca623342e99d1d418e7e7.png";

interface AssessmentSectionProps {
  onGetStarted: () => void;
}

export function AssessmentSection({ onGetStarted }: AssessmentSectionProps) {
  // Suitable criteria in English
  const suitableIf = [
    "you constantly feel \"on edge\" and stressed.",
    "you feel like you can never switch off or relax.",
    "you feel overwhelmed, restless, helpless and driven.",
    "you feel the need to always function perfectly and deliver flawless performance."
  ];

  // Common thoughts/symptoms in English
  const symptoms = [
    "\"I have so much to do, I'll never get it all done.\"",
    "\"Why can't I just relax and unwind?\"",
    "\"I feel completely exhausted and burned out.\"",
    "\"What if I fail? Everyone will think...\""
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
          {/* Header */}
          <div 
            className="text-center space-y-4 mb-12 animate-fade-in"
            style={{ marginBottom: 'var(--spacing-8)' }}
          >
            <div 
              className="text-sm font-medium tracking-wide uppercase"
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-family-base)',
                letterSpacing: 'var(--letter-spacing-wide)'
              }}
            >
              MORE INFO
            </div>
            <h2 
              className="font-bold max-w-4xl mx-auto"
              style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-text-primary)',
                lineHeight: 'var(--line-height-sm)',
                fontFamily: 'var(--font-family-base)'
              }}
            >
              Is our course right for your needs?
            </h2>
            <p 
              className="max-w-3xl mx-auto leading-relaxed"
              style={{
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-muted)',
                lineHeight: 'var(--line-height-md)',
                fontFamily: 'var(--font-family-base)'
              }}
            >
              This course can help you finally experience calm again. With sustainable stress management methods, you'll learn to better understand stress and burnout and develop a healthier approach to stressful situations.
            </p>
          </div>

          {/* Mobile Layout */}
          <div className="block lg:hidden space-y-6 animate-slide-up mobile-optimized">
            {/* Video Card */}
            <div 
              className="relative rounded-xl overflow-hidden aspect-video mobile-card touch-target"
              style={{
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--color-bg-card)'
              }}
            >
              <ImageWithFallback 
                src={img6539Ab94Cbe52Be4E0475506ThumbnailVideoPpzmAvif}
                alt="Is our concept right for me?"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
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
                <h4 
                  className="font-semibold"
                  style={{
                    color: 'var(--color-text-inverse)',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-weight-semibold)',
                    fontFamily: 'var(--font-family-base)'
                  }}
                >
                  Does our concept work for you?
                </h4>
              </div>
            </div>

            {/* Suitable For Card */}
            <div 
              className="p-6 rounded-xl"
              style={{
                backgroundColor: 'var(--color-bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border-default)'
              }}
            >
              <h3 
                className="font-bold mb-6"
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-family-base)'
                }}
              >
                The online course is suitable for you if...
              </h3>
              <div 
                className="space-y-4 mb-6"
                style={{ gap: 'var(--spacing-4)' }}
              >
                {suitableIf.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                      <svg viewBox="0 0 15 11" className="w-full h-full">
                        <path d={svgPaths.p25a5e700} fill="var(--color-text-primary)" />
                      </svg>
                    </div>
                    <p 
                      className="leading-relaxed"
                      style={{
                        fontSize: 'var(--text-base)',
                        color: 'var(--color-text-primary)',
                        lineHeight: 'var(--line-height-md)',
                        fontFamily: 'var(--font-family-base)'
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <Button 
                onClick={onGetStarted}
                className="ikan-button w-full mobile-button touch-target"
                style={{
                  backgroundColor: 'var(--color-primary-default)',
                  color: 'var(--color-primary-on)',
                  height: '48px',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                Get Started
              </Button>
            </div>

            {/* Symptoms Cards */}
            <div className="grid grid-cols-1 gap-4">
              {/* Anxiety Image Card */}
              <div 
                className="relative rounded-xl overflow-hidden h-64"
                style={{ borderRadius: 'var(--radius-lg)' }}
              >
                <ImageWithFallback 
                  src={img653420D817Daafaf291Eec74PeersKurseAngstSymbolbildP500Avif}
                  alt="Anxiety course symbol"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 
                    className="font-bold mb-4"
                    style={{
                      color: 'var(--color-text-inverse)',
                      fontSize: 'var(--text-lg)',
                      fontWeight: 'var(--font-weight-bold)',
                      fontFamily: 'var(--font-family-base)'
                    }}
                  >
                    Do you recognize these thoughts?
                  </h4>
                </div>
              </div>

              {/* Symptoms List Card */}
              <div 
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: 'var(--color-primary-default)',
                  color: 'var(--color-primary-on)',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div 
                  className="inline-block px-3 py-1 rounded mb-4"
                  style={{
                    backgroundColor: 'var(--color-bg-card)',
                    color: 'var(--color-text-primary)',
                    fontSize: 'var(--text-sm)',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  Common Symptoms
                </div>
                <div 
                  className="space-y-3"
                  style={{ gap: 'var(--spacing-3)' }}
                >
                  {symptoms.map((symptom, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex-shrink-0">
                        <svg viewBox="0 0 20 14" className="w-full h-full">
                          <path d={svgPaths.p177c6000} fill="currentColor" />
                        </svg>
                      </div>
                      <p 
                        className="leading-relaxed"
                        style={{
                          fontSize: 'var(--text-base)',
                          lineHeight: 'var(--line-height-md)',
                          fontFamily: 'var(--font-family-base)'
                        }}
                      >
                        {symptom}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Main Video Card */}
            <div 
              className="relative rounded-2xl overflow-hidden mb-8"
              style={{
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--color-bg-card)',
                border: '1px solid var(--color-border-default)'
              }}
            >
              <div className="flex h-[400px]">
                {/* Left Side - Suitable If */}
                <div className="w-1/2 p-12 flex flex-col justify-center">
                  <h3 
                    className="font-bold mb-6"
                    style={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-text-primary)',
                      fontFamily: 'var(--font-family-base)'
                    }}
                  >
                    The online course is suitable for you if...
                  </h3>
                  <div 
                    className="space-y-4 mb-6"
                    style={{ gap: 'var(--spacing-4)' }}
                  >
                    {suitableIf.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                          <svg viewBox="0 0 15 11" className="w-full h-full">
                            <path d={svgPaths.p25a5e700} fill="var(--color-text-primary)" />
                          </svg>
                        </div>
                        <p 
                          className="leading-relaxed"
                          style={{
                            fontSize: 'var(--text-base)',
                            color: 'var(--color-text-primary)',
                            lineHeight: 'var(--line-height-md)',
                            fontFamily: 'var(--font-family-base)'
                          }}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={onGetStarted}
                    className="ikan-button self-start"
                    style={{
                      backgroundColor: 'var(--color-primary-default)',
                      color: 'var(--color-primary-on)',
                      height: '48px',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    Get Started
                  </Button>
                </div>

                {/* Right Side - Video */}
                <div className="w-1/2 relative">
                  <div className="h-full relative rounded-r-2xl overflow-hidden">
                    <ImageWithFallback 
                      src={img6539Ab94Cbe52Be4E0475506ThumbnailVideoPpzmAvif}
                      alt="Does our concept work for you?"
                      className="w-full h-full object-cover"
                    />
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
                      <h4 
                        className="font-semibold"
                        style={{
                          color: 'var(--color-text-inverse)',
                          fontSize: 'var(--text-lg)',
                          fontWeight: 'var(--font-weight-semibold)',
                          fontFamily: 'var(--font-family-base)'
                        }}
                      >
                        Does our concept<br />work for you?
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - Image Card and Symptoms Card */}
            <div 
              className="grid grid-cols-2 gap-4"
              style={{ gap: 'var(--spacing-4)' }}
            >
              {/* Anxiety Image Card */}
              <div 
                className="relative rounded-2xl overflow-hidden h-80"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-default)'
                }}
              >
                <ImageWithFallback 
                  src={img653420D817Daafaf291Eec74PeersKurseAngstSymbolbildP500Avif}
                  alt="Anxiety course symbol"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 
                    className="font-bold mb-6"
                    style={{
                      color: 'var(--color-text-inverse)',
                      fontSize: 'var(--text-xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      fontFamily: 'var(--font-family-base)'
                    }}
                  >
                    Do you recognize these thoughts?
                  </h4>
                  <div 
                    className="space-y-3"
                    style={{ gap: 'var(--spacing-3)' }}
                  >
                    {symptoms.slice(0, 2).map((symptom, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 mt-1 flex-shrink-0">
                          <svg viewBox="0 0 20 14" className="w-full h-full">
                            <path d={svgPaths.p177c6000} fill="currentColor" />
                          </svg>
                        </div>
                        <p 
                          className="leading-relaxed"
                          style={{
                            color: 'var(--color-text-inverse)',
                            fontSize: 'var(--text-base)',
                            lineHeight: 'var(--line-height-md)',
                            fontFamily: 'var(--font-family-base)'
                          }}
                        >
                          {symptom}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Symptoms Card */}
              <div 
                className="p-8 rounded-2xl h-80"
                style={{
                  backgroundColor: 'var(--color-primary-default)',
                  color: 'var(--color-primary-on)',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div 
                  className="inline-block px-3 py-1 rounded mb-6"
                  style={{
                    backgroundColor: 'var(--color-bg-card)',
                    color: 'var(--color-text-primary)',
                    fontSize: 'var(--text-sm)',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  Common Symptoms
                </div>
                <div 
                  className="space-y-4 mb-6"
                  style={{ gap: 'var(--spacing-4)' }}
                >
                  <p 
                    className="font-bold"
                    style={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      fontFamily: 'var(--font-family-base)'
                    }}
                  >
                    Loss of Appetite
                  </p>
                  <div 
                    className="space-y-3"
                    style={{ gap: 'var(--spacing-3)' }}
                  >
                    {['Overwhelm', 'Physical Tension', 'Loss of Interest', 'Helplessness'].map((symptom, index) => (
                      <p 
                        key={index}
                        className="font-bold"
                        style={{
                          fontSize: 'var(--text-lg)',
                          fontWeight: 'var(--font-weight-bold)',
                          fontFamily: 'var(--font-family-base)'
                        }}
                      >
                        {symptom}
                      </p>
                    ))}
                  </div>
                </div>
                <Button 
                  variant="secondary" 
                  className="ikan-button w-full"
                  style={{
                    backgroundColor: 'var(--color-bg-card)',
                    color: 'var(--color-text-primary)',
                    height: '48px',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  More Symptoms
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
}