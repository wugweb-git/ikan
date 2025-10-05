import React from 'react';
import { ErrorBoundary } from '../../ErrorBoundary';

// Import assets
import svgPaths from "../../../imports/svg-rdg85uq8eg";

export function BenefitsSection() {
  const benefits = [
    {
      iconPath: svgPaths.pc098600,
      iconPath2: svgPaths.p34424700,
      title: "Confidence and Self-Trust",
      description: "You trust yourself to successfully master challenging and anxiety-filled situations."
    },
    {
      iconPath: svgPaths.p8ec6f80,
      iconPath2: svgPaths.pa1871f0,
      title: "Resolving and Preventing Stress",
      description: "You recognize stressors with ease and can prevent them in advance."
    },
    {
      iconPath: svgPaths.p293ab00,
      iconPath2: svgPaths.p2e966900,
      title: "Improved Social Communication",
      description: "You can clearly recognize and express feelings and needs. Healthy communication comes naturally to you."
    },
    {
      iconPath: svgPaths.pc098600,
      iconPath2: svgPaths.p23dbe100,
      title: "Enhanced Self-Worth",
      description: "You have successfully transformed your negative beliefs into positive ones and dissolved your inner self-critical voices."
    },
    {
      iconPath: svgPaths.p8ec6f80,
      iconPath2: svgPaths.p19b0a200,
      title: "Understanding and Mindfulness",
      description: "You are able to pay early attention to warning signs and have a clear understanding of the strategies that help you in such moments."
    },
    {
      iconPath: svgPaths.p293ab00,
      iconPath2: svgPaths.p2257400,
      title: "Mentally Healthier Living",
      description: "You have a deep understanding of your own thoughts and emotions and can better deal with stress, worries and challenges."
    }
  ];

  return (
    <ErrorBoundary>
      <section 
        className="w-full animate-fade-in"
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
            className="text-center space-y-4 mb-12 animate-slide-up"
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
              Our Benefits
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
              How your life can change after our program.
            </h2>
          </div>

          {/* Mobile Layout */}
          <div className="block lg:hidden space-y-6 mobile-optimized">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl text-center mobile-card animate-slide-up"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  backgroundColor: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-default)'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--color-accent-default)' }}
                >
                  <svg viewBox="0 0 51 51" className="w-8 h-8">
                    <path d={benefit.iconPath} fill="var(--color-neutral-300)" />
                    <path d={benefit.iconPath2} fill="var(--color-text-primary)" />
                    <path d={benefit.iconPath} stroke="white" strokeWidth="1.64493" fill="none" />
                  </svg>
                </div>
                <h3 
                  className="font-bold mb-3"
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-family-base)'
                  }}
                >
                  {benefit.title}
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-muted)',
                    lineHeight: 'var(--line-height-md)',
                    fontFamily: 'var(--font-family-base)'
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div 
              className="grid grid-cols-3 gap-6"
              style={{ gap: 'var(--spacing-6)' }}
            >
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl text-center"
                  style={{
                    backgroundColor: 'var(--color-bg-card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border-default)'
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: 'var(--color-accent-default)' }}
                  >
                    <svg viewBox="0 0 51 51" className="w-10 h-10">
                      <path d={benefit.iconPath} fill="var(--color-neutral-300)" />
                      <path d={benefit.iconPath2} fill="var(--color-text-primary)" />
                      <path d={benefit.iconPath} stroke="white" strokeWidth="1.64493" fill="none" />
                    </svg>
                  </div>
                  <h3 
                    className="font-bold mb-4"
                    style={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-text-primary)',
                      fontFamily: 'var(--font-family-base)'
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p 
                    className="leading-relaxed"
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-muted)',
                      lineHeight: 'var(--line-height-md)',
                      fontFamily: 'var(--font-family-base)'
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
}