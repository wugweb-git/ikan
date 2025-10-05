import React from 'react';
import { Button } from '../../ui/button';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ErrorBoundary } from '../../ErrorBoundary';

// Import assets
import imgDtsFitnessAllieLehmanPhotosId1797CopyWebp from "figma:asset/091bde3ca3df1576f3a7dde8590aee20d6858d69.png";
import imgFireflyABeautifulKitchenCounterShotFromTheSideTheBacksplashIsLightGreenTileThereI1Jpg from "figma:asset/7ee423e6dc20937088d7d916d0f5ff333a101e26.png";
import imgDtsPleaseDoNotDisturbFanetteGuilloudPhotosId8854Webp from "figma:asset/69630877b2f0ea1979fedcdee430b8d92c705a78.png";

interface BlogSectionProps {
  onNavigate: (route: string) => void;
}

export function BlogSection({ onNavigate }: BlogSectionProps) {
  const blogPosts = [
    {
      title: "Do I Need to Supplement with B12?",
      description: "It's one of those nutrients that gets a lot of attention, and for good reason. Learn about the importance of B12 for mental health.",
      date: "February 26 2024",
      image: imgDtsFitnessAllieLehmanPhotosId1797CopyWebp
    },
    {
      title: "Recipe: Mint Chip Smoothie",
      description: "This Mint Chip Smoothie was a limited edition menu item that still lives on in our dreams, and now you can enjoy it any time at home.",
      date: "February 06 2024",
      image: imgFireflyABeautifulKitchenCounterShotFromTheSideTheBacksplashIsLightGreenTileThereI1Jpg
    },
    {
      title: "The Wellness Edit",
      description: "Welcome to the Wellness Edit, the newest editorial project focused on mental health and wellbeing insights.",
      date: "February 02 2024",
      image: imgDtsPleaseDoNotDisturbFanetteGuilloudPhotosId8854Webp
    }
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
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8"
            style={{ 
              marginBottom: 'var(--spacing-8)',
              gap: 'var(--spacing-4)'
            }}
          >
            <h2 
              className="font-bold"
              style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-text-primary)',
                fontFamily: 'var(--font-family-base)'
              }}
            >
              Our Recent Thoughts
            </h2>
            <Button 
              onClick={() => onNavigate('/library')}
              variant="secondary"
              className="ikan-button self-start lg:self-auto mobile-button touch-target"
              style={{
                backgroundColor: 'var(--color-neutral-200)',
                color: 'var(--color-text-muted)',
                height: '48px',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              READ MORE
            </Button>
          </div>

          {/* Mobile Layout */}
          <div className="block lg:hidden space-y-6">
            {blogPosts.map((post, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl"
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-default)'
                }}
              >
                <div 
                  className="space-y-4"
                  style={{ gap: 'var(--spacing-4)' }}
                >
                  {/* Image */}
                  <div 
                    className="relative rounded-lg overflow-hidden aspect-video"
                    style={{ borderRadius: 'var(--radius-lg)' }}
                  >
                    <ImageWithFallback 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Date */}
                  <div 
                    className="text-sm font-normal uppercase tracking-wide opacity-60"
                    style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: 'var(--font-weight-normal)',
                      color: 'var(--color-text-primary)',
                      fontFamily: 'var(--font-family-base)',
                      letterSpacing: 'var(--letter-spacing-wide)'
                    }}
                  >
                    {post.date}
                  </div>

                  {/* Title */}
                  <h3 
                    className="font-bold"
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-text-primary)',
                      fontFamily: 'var(--font-family-base)'
                    }}
                  >
                    {post.title}
                  </h3>

                  {/* Description and Read More */}
                  <div 
                    className="space-y-4"
                    style={{ gap: 'var(--spacing-4)' }}
                  >
                    <p 
                      className="leading-relaxed"
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-text-primary)',
                        lineHeight: 'var(--line-height-md)',
                        fontFamily: 'var(--font-family-base)'
                      }}
                    >
                      {post.description}
                    </p>
                    <div 
                      className="pt-4 border-t border-opacity-40"
                      style={{ borderTopColor: 'var(--color-border-default)' }}
                    >
                      <Button
                        variant="ghost"
                        onClick={() => onNavigate('/library')}
                        className="p-0 h-auto"
                      >
                        <span 
                          className="font-normal tracking-wide"
                          style={{
                            fontSize: 'var(--text-sm)',
                            color: 'var(--color-text-primary)',
                            fontFamily: 'var(--font-family-base)',
                            letterSpacing: 'var(--letter-spacing-normal)'
                          }}
                        >
                          Read more
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div 
              className="grid grid-cols-3 gap-6"
              style={{ gap: 'var(--spacing-6)' }}
            >
              {blogPosts.map((post, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl"
                  style={{
                    backgroundColor: 'var(--color-bg-card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border-default)'
                  }}
                >
                  <div 
                    className="space-y-4 h-full flex flex-col"
                    style={{ gap: 'var(--spacing-4)' }}
                  >
                    {/* Image */}
                    <div 
                      className="relative rounded-lg overflow-hidden aspect-video"
                      style={{ borderRadius: 'var(--radius-lg)' }}
                    >
                      <ImageWithFallback 
                        src={post.image}
                        alt={post.title}
                        className={`w-full h-full object-cover ${
                          index === 0 ? 'object-[50%_3%]' : 
                          index === 1 ? 'object-[50%_12%]' : 
                          'object-[50%_10%]'
                        }`}
                      />
                    </div>

                    {/* Date */}
                    <div 
                      className="text-sm font-normal uppercase tracking-wide opacity-60"
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: 'var(--font-weight-normal)',
                        color: 'var(--color-text-primary)',
                        fontFamily: 'var(--font-family-base)',
                        letterSpacing: 'var(--letter-spacing-wide)'
                      }}
                    >
                      {post.date}
                    </div>

                    {/* Title */}
                    <h3 
                      className="font-bold"
                      style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--color-text-primary)',
                        fontFamily: 'var(--font-family-base)',
                        lineHeight: index === 0 ? 'var(--line-height-lg)' : 'var(--line-height-md)'
                      }}
                    >
                      {index === 0 ? (
                        <>Do I Need to Supplement<br />with B12?</>
                      ) : (
                        post.title
                      )}
                    </h3>

                    {/* Description and Read More */}
                    <div 
                      className="flex-1 flex flex-col justify-between space-y-4"
                      style={{ gap: 'var(--spacing-4)' }}
                    >
                      <p 
                        className="leading-relaxed"
                        style={{
                          fontSize: 'var(--text-sm)',
                          color: 'var(--color-text-primary)',
                          lineHeight: 'var(--line-height-md)',
                          fontFamily: 'var(--font-family-base)'
                        }}
                      >
                        {post.description}
                      </p>
                      <div 
                        className="pt-4 border-t border-opacity-40"
                        style={{ borderTopColor: 'var(--color-border-default)' }}
                      >
                        <Button
                          variant="ghost"
                          onClick={() => onNavigate('/library')}
                          className="p-0 h-auto"
                        >
                          <span 
                            className="font-normal tracking-wide"
                            style={{
                              fontSize: 'var(--text-sm)',
                              color: 'var(--color-text-primary)',
                              fontFamily: 'var(--font-family-base)',
                              letterSpacing: 'var(--letter-spacing-normal)'
                            }}
                          >
                            Read more
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
}