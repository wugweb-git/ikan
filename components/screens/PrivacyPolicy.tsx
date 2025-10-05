import React, { useState } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Icon } from '../Icon';
import { Card, CardContent } from '../ui/card';

interface PrivacyPolicyProps {
  className?: string;
  onBack?: () => void;
}

export function PrivacyPolicy({ className, onBack }: PrivacyPolicyProps) {
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const lastUpdated = "January 4, 2025";

  const sections = [
    {
      id: 'overview',
      title: 'Privacy Overview',
      icon: 'shield-check',
      content: `
        At iKan, protecting your privacy is fundamental to everything we do. This Privacy Policy explains how we collect, use, protect, and share your personal information when you use our mental health platform.

        We believe that mental health care requires the highest standards of privacy and confidentiality. Your trust is essential to your healing journey, and we are committed to earning and maintaining that trust through transparent privacy practices.

        Key principles that guide our privacy approach:
        • We collect only the information necessary to provide effective mental health support
        • Your data is encrypted and protected with bank-level security
        • We never sell your personal information to third parties
        • You have full control over your data and can delete it at any time
        • We are fully compliant with HIPAA, GDPR, and other privacy regulations
      `
    },
    {
      id: 'collection',
      title: 'Information We Collect',
      icon: 'database',
      content: `
        To provide personalized mental health support, we collect several types of information:

        **Account Information**
        • Name, email address, and contact details
        • Account preferences and settings
        • Profile information you choose to share

        **Assessment Data**
        • Responses to mental health assessments and questionnaires
        • Mood tracking and journal entries
        • Progress measurements and outcome data
        • Self-reported symptoms and concerns

        **Usage Information**
        • How you interact with our platform and features
        • Time spent in different sections and programs
        • Device information and technical data for platform optimization
        • Login times and session duration

        **Communication Data**
        • Messages sent through our platform
        • Support tickets and customer service interactions
        • Feedback and survey responses

        All assessment and mental health data is treated as Protected Health Information (PHI) under HIPAA regulations.
      `
    },
    {
      id: 'usage',
      title: 'How We Use Your Information',
      icon: 'target',
      content: `
        Your information is used exclusively to provide and improve your mental health care experience:

        **Personalized Care**
        • Recommend relevant assessments and programs based on your needs
        • Track your progress and adjust treatment recommendations
        • Provide personalized insights and wellness reports
        • Connect you with appropriate resources and interventions

        **Platform Improvement**
        • Analyze usage patterns to improve user experience
        • Develop new features and mental health tools
        • Conduct research to validate our assessment tools and programs
        • Ensure platform security and prevent fraud

        **Communication**
        • Send important account and safety notifications
        • Provide customer support and technical assistance
        • Share relevant educational content and wellness tips
        • Notify you of platform updates and new features

        **Legal and Safety**
        • Comply with legal obligations and regulatory requirements
        • Protect user safety and prevent harm
        • Respond to legal requests when required by law
        • Maintain accurate records for healthcare purposes

        We never use your mental health data for advertising or marketing purposes.
      `
    },
    {
      id: 'sharing',
      title: 'Information Sharing',
      icon: 'users',
      content: `
        We limit information sharing to essential scenarios that support your care:

        **With Your Consent**
        • Healthcare providers you explicitly authorize
        • Family members or supporters you designate
        • Third-party services you choose to integrate

        **Service Providers**
        • Technology partners who help operate our platform (under strict data agreements)
        • Security services that protect your data
        • Analytics providers for platform improvement (data is anonymized)

        **Legal Requirements**
        • When required by law, court order, or regulatory authority
        • To protect user safety in emergency situations
        • To prevent fraud or security threats
        • During company transfers (with privacy protections intact)

        **Research Purposes**
        • Anonymized, aggregated data for mental health research
        • Clinical validation studies (only with explicit consent)
        • Population health insights (no individual identification possible)

        Important: We never sell your personal information or share it for commercial purposes. All sharing is governed by strict legal agreements that require the same level of privacy protection.
      `
    },
    {
      id: 'security',
      title: 'Data Security',
      icon: 'lock',
      content: `
        We implement multiple layers of security to protect your sensitive information:

        **Technical Safeguards**
        • End-to-end encryption for all data transmission
        • AES-256 encryption for data storage
        • Multi-factor authentication for account access
        • Regular security audits and penetration testing
        • Secure cloud infrastructure with 99.9% uptime

        **Administrative Safeguards**
        • HIPAA-compliant policies and procedures
        • Regular staff training on privacy and security
        • Background checks for all personnel with data access
        • Incident response procedures for any potential breaches
        • Business associate agreements with all vendors

        **Physical Safeguards**
        • Secure data centers with 24/7 monitoring
        • Biometric access controls and surveillance
        • Redundant backup systems and disaster recovery
        • Geographic data distribution for resilience

        **Monitoring and Response**
        • Continuous monitoring for security threats
        • Automated anomaly detection
        • Immediate response to potential security incidents
        • Regular security assessments and updates

        We maintain certifications including SOC 2 Type II, ISO 27001, and HIPAA compliance.
      `
    },
    {
      id: 'rights',
      title: 'Your Privacy Rights',
      icon: 'user-check',
      content: `
        You have comprehensive control over your personal information:

        **Access Rights**
        • View all personal data we have about you
        • Download a complete copy of your information
        • Understand how your data is being used
        • Review your privacy settings and preferences

        **Control Rights**
        • Update or correct your personal information
        • Delete your account and associated data
        • Opt out of non-essential communications
        • Control data sharing preferences

        **Portability Rights**
        • Export your data in common formats
        • Transfer information to other healthcare providers
        • Maintain copies of your assessment results
        • Share data with authorized third parties

        **Deletion Rights**
        • Request immediate deletion of your account
        • Remove specific pieces of information
        • Understand our data retention policies
        • Ensure complete data removal upon request

        To exercise these rights, contact us at privacy@ikan.health or use the privacy controls in your account settings. We will respond to all requests within 30 days.
      `
    },
    {
      id: 'retention',
      title: 'Data Retention',
      icon: 'calendar',
      content: `
        We retain your information only as long as necessary for your care and legal compliance:

        **Active Account Data**
        • Account information: Retained while your account is active
        • Assessment results: Kept for historical tracking and progress monitoring
        • Communication records: Maintained for customer service quality
        • Usage analytics: Stored for platform improvement purposes

        **After Account Deletion**
        • Personal identifiers: Deleted within 30 days
        • Assessment data: Anonymized for research (if consented)
        • Backup systems: Completely purged within 90 days
        • Legal records: Retained only as required by law

        **Research Data**
        • Anonymized data may be retained indefinitely for mental health research
        • No personal identification is possible in research datasets
        • You can opt out of research data use at any time
        • Research data follows strict ethical guidelines

        **Special Circumstances**
        • Data may be retained longer if required by legal obligations
        • Safety-related information may be preserved to protect other users
        • Financial records kept per accounting requirements
        • We will notify you of any extended retention needs

        You can request immediate deletion of all your data at any time.
      `
    },
    {
      id: 'contact',
      title: 'Contact & Updates',
      icon: 'message-circle',
      content: `
        **Privacy Questions**
        For any privacy-related questions or concerns:
        • Email: privacy@ikan.health
        • Phone: 1-800-IKAN-HELP
        • Mail: iKan Privacy Officer, 123 Mental Health Blvd, Wellness City, CA 90210

        **Data Protection Officer**
        Our Data Protection Officer is available for:
        • Privacy rights requests
        • Data security concerns
        • Compliance questions
        • Breach notifications

        **Policy Updates**
        • We will notify you of significant privacy policy changes
        • Updates will be posted on this page with revision dates
        • You will receive email notification of material changes
        • Continued use constitutes acceptance of updated terms

        **Regulatory Compliance**
        We are subject to oversight by:
        • Department of Health and Human Services (HIPAA)
        • State mental health regulatory boards
        • Federal Trade Commission (FTC)
        • International data protection authorities

        **Emergency Contact**
        For urgent privacy or security concerns outside business hours:
        • Emergency hotline: 1-800-IKAN-SOS
        • Security incidents: security@ikan.health
        • Available 24/7 for critical issues

        Your privacy is our priority. We are committed to addressing any concerns promptly and transparently.
      `
    }
  ];

  const tableOfContents = sections.map(section => ({
    id: section.id,
    title: section.title,
    icon: section.icon
  }));

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
          padding: isMobile ? 'var(--ikan-component-spacing-large) var(--ikan-component-spacing-default)' : 'var(--spacing-12) var(--ikan-component-spacing-large)'
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
                  padding: 'var(--ikan-component-spacing-default)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <Icon name="shield-check" size={32} style={{ color: 'var(--color-text-inverse)' }} />
              </div>
            </div>
            
            <h1 
              style={{
                fontSize: isMobile ? 'var(--text-3xl)' : 'var(--text-4xl)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: 'var(--line-height-sm)',
                margin: '0',
                marginBottom: 'var(--ikan-component-spacing-default)'
              }}
            >
              Privacy Policy
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
              Your privacy and data security are fundamental to our mission of providing safe, effective mental health support.
            </p>
            
            <div 
              className="inline-flex items-center gap-2 mt-4"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: 'var(--ikan-component-spacing-small) var(--ikan-component-spacing-default)',
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

      {/* Content Layout */}
      <div 
        className="w-full mx-auto"
        style={{
          maxWidth: 'var(--constraint-content-max)',
          padding: isMobile ? 'var(--ikan-component-spacing-large) var(--ikan-component-spacing-default)' : 'var(--spacing-12) var(--ikan-component-spacing-large)',
          marginTop: '-var(--ikan-component-spacing-large)',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div 
          className="grid gap-8"
          style={{
            gridTemplateColumns: isMobile ? '1fr' : '300px 1fr',
            alignItems: 'start'
          }}
        >
          {/* Table of Contents - Desktop Sidebar */}
          {!isMobile && (
            <div className="sticky top-8">
              <Card
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-light)'
                }}
              >
                <CardContent style={{ padding: 'var(--ikan-component-spacing-large)' }}>
                  <h3 
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--color-text-primary)',
                      margin: '0 0 var(--ikan-component-spacing-default) 0'
                    }}
                  >
                    Contents
                  </h3>
                  
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition-colors"
                        style={{
                          fontSize: 'var(--text-sm)',
                          fontWeight: 'var(--font-weight-regular)',
                          color: activeSection === item.id ? 'var(--color-primary-default)' : 'var(--color-text-muted)',
                          textDecoration: 'none',
                          backgroundColor: activeSection === item.id ? 'var(--color-accent-default)' : 'transparent'
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSection(item.id);
                          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <Icon name={item.icon as any} size={16} />
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Main Content */}
          <div className="space-y-8">
            {sections.map((section) => (
              <Card
                key={section.id}
                id={section.id}
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-light)',
                  scrollMarginTop: '100px'
                }}
              >
                <CardContent style={{ padding: 'var(--ikan-component-spacing-large)' }}>
                  <div className="space-y-6">
                    {/* Section Header */}
                    <div className="flex items-center gap-4">
                      <div
                        style={{
                          backgroundColor: 'var(--color-primary-default)',
                          borderRadius: 'var(--radius-md)',
                          padding: 'var(--ikan-component-spacing-small)',
                          color: 'var(--color-text-inverse)'
                        }}
                      >
                        <Icon name={section.icon as any} size={24} />
                      </div>
                      
                      <h2 
                        style={{
                          fontSize: 'var(--text-2xl)',
                          fontWeight: 'var(--font-weight-medium)',
                          color: 'var(--color-text-primary)',
                          margin: '0'
                        }}
                      >
                        {section.title}
                      </h2>
                    </div>

                    {/* Section Content */}
                    <div 
                      className="prose prose-ikan max-w-none"
                      style={{
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-regular)',
                        lineHeight: 'var(--line-height-md)',
                        color: 'var(--color-text-primary)'
                      }}
                    >
                      {section.content.split('\n\n').map((paragraph, index) => {
                        if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                          // Handle bold headings
                          return (
                            <h3 
                              key={index}
                              style={{
                                fontSize: 'var(--text-lg)',
                                fontWeight: 'var(--font-weight-medium)',
                                color: 'var(--color-text-primary)',
                                margin: 'var(--ikan-component-spacing-default) 0 var(--ikan-component-spacing-small) 0'
                              }}
                            >
                              {paragraph.replace(/\*\*/g, '')}
                            </h3>
                          );
                        } else if (paragraph.trim().startsWith('•')) {
                          // Handle bullet points
                          const items = paragraph.split('\n').filter(item => item.trim().startsWith('•'));
                          return (
                            <ul 
                              key={index}
                              style={{
                                listStyle: 'none',
                                padding: '0',
                                margin: 'var(--ikan-component-spacing-default) 0'
                              }}
                            >
                              {items.map((item, itemIndex) => (
                                <li 
                                  key={itemIndex}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 'var(--ikan-component-spacing-small)',
                                    marginBottom: 'var(--ikan-component-spacing-small)'
                                  }}
                                >
                                  <span style={{ color: 'var(--color-primary-default)', marginTop: '2px' }}>•</span>
                                  <span>{item.replace('•', '').trim()}</span>
                                </li>
                              ))}
                            </ul>
                          );
                        } else {
                          // Handle regular paragraphs
                          return (
                            <p 
                              key={index}
                              style={{
                                margin: 'var(--ikan-component-spacing-default) 0',
                                lineHeight: 'var(--line-height-md)'
                              }}
                            >
                              {paragraph.trim()}
                            </p>
                          );
                        }
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
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
          <CardContent style={{ padding: 'var(--ikan-component-spacing-large)' }}>
            <div className="space-y-4">
              <h3 
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-text-primary)',
                  margin: '0'
                }}
              >
                Questions about Privacy?
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
                Our privacy team is here to help you understand how we protect your information and exercise your rights.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <a
                  href="mailto:privacy@ikan.health"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg hover:opacity-80 transition-opacity"
                  style={{
                    backgroundColor: 'var(--color-primary-default)',
                    color: 'var(--color-text-inverse)',
                    textDecoration: 'none',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    borderRadius: 'var(--ikan-component-border-radius)',
                    height: 'var(--ikan-component-button-height)',
                    display: 'inline-flex',
                    alignItems: 'center'
                  }}
                >
                  <Icon name="mail" size={20} />
                  privacy@ikan.health
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
                    cursor: 'pointer',
                    borderRadius: 'var(--ikan-component-border-radius)',
                    height: 'var(--ikan-component-button-height)'
                  }}
                >
                  <Icon name="message-circle" size={20} />
                  Contact Form
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}