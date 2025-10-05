import React, { useEffect } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import { cn } from './ui/utils';

// Import desktop and mobile Figma components
import FooterDesktop from '../imports/Footer-204-6776';
import FooterMobile from '../imports/Footer-204-7042';

interface FooterProps {
  onNavigate?: (route: string) => void;
  className?: string;
}

export function Footer({ onNavigate, className }: FooterProps) {
  const isMobile = useIsMobile();

  // Listen for footer navigation events from Figma footer components
  useEffect(() => {
    const handleFooterNavigation = (event: CustomEvent) => {
      const { route } = event.detail;
      console.log('Footer navigation event received:', route);
      if (onNavigate && route) {
        onNavigate(route);
      }
    };

    window.addEventListener('footerNavigate', handleFooterNavigation as EventListener);
    
    return () => {
      window.removeEventListener('footerNavigate', handleFooterNavigation as EventListener);
    };
  }, [onNavigate]);

  // Navigation handlers for different sections
  const handleQuickLinkClick = (link: string) => {
    const routeMap: { [key: string]: string } = {
      'Home': '/',
      'Assessment': '/assessments',
      'Programs': '/equip-programs',
      'Library': '/library',
      'Consultation': '/consultation'
    };
    
    console.log('Footer Quick Link clicked:', link, 'Route:', routeMap[link]);
    if (onNavigate && routeMap[link]) {
      onNavigate(routeMap[link]);
    } else {
      console.warn('Footer Quick Link navigation failed:', link, 'onNavigate:', !!onNavigate);
    }
  };

  const handleSupportLinkClick = (link: string) => {
    const routeMap: { [key: string]: string } = {
      'About us': '/about',
      'FAQs': '/faq',
      'Contact us': '/contact'
    };
    
    console.log('Footer Support Link clicked:', link, 'Route:', routeMap[link]);
    if (onNavigate && routeMap[link]) {
      onNavigate(routeMap[link]);
    } else {
      console.warn('Footer Support Link navigation failed:', link, 'onNavigate:', !!onNavigate);
    }
  };

  const handleLegalLinkClick = (link: string) => {
    const routeMap: { [key: string]: string } = {
      'Privacy Policy': '/privacy',
      'Terms & Condition': '/terms',
      'Return Policy': '/return-policy',
      'Sitemap': '/sitemap',
      'Cancellation Policy': '/cancellation-policy'
    };
    
    console.log('Footer Legal Link clicked:', link, 'Route:', routeMap[link]);
    if (onNavigate && routeMap[link]) {
      onNavigate(routeMap[link]);
    } else {
      console.warn('Footer Legal Link navigation failed:', link, 'onNavigate:', !!onNavigate);
    }
  };

  const handleSocialClick = (platform: string) => {
    const socialUrls: { [key: string]: string } = {
      'facebook': 'https://facebook.com/ikan.health',
      'instagram': 'https://instagram.com/ikan.health',
      'pinterest': 'https://pinterest.com/ikan.health',
      'linkedin': 'https://linkedin.com/company/ikan-health',
      'youtube': 'https://youtube.com/@ikan.health'
    };
    
    if (socialUrls[platform]) {
      window.open(socialUrls[platform], '_blank', 'noopener,noreferrer');
    }
  };

  const handleContactClick = (type: string) => {
    if (type === 'email') {
      window.location.href = 'mailto:support@ikan.health';
    } else if (type === 'phone') {
      window.location.href = 'tel:08001110111';
    }
  };

  if (isMobile) {
    return (
      <div className={cn("relative w-full", className)}>
        {/* Mobile Figma layout */}
        <div className="w-full">
          <FooterMobile />
        </div>



        {/* Overlay click handlers for mobile interactive elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Contact information */}
          <div 
            className="absolute top-[180px] left-[30px] w-[160px] h-[20px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleContactClick('email')}
          />
          
          <div 
            className="absolute top-[180px] right-[30px] w-[140px] h-[20px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleContactClick('phone')}
          />

          {/* Quick Links section */}
          <div 
            className="absolute top-[300px] left-[30px] w-[80px] h-[20px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleQuickLinkClick('Home')}
          />
          
          <div 
            className="absolute top-[340px] left-[30px] w-[100px] h-[20px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleQuickLinkClick('Assessment')}
          />
          
          <div 
            className="absolute top-[380px] left-[30px] w-[90px] h-[20px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleQuickLinkClick('Programs')}
          />
          
          <div 
            className="absolute top-[420px] left-[30px] w-[80px] h-[20px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleQuickLinkClick('Library')}
          />
          
          <div 
            className="absolute top-[460px] left-[30px] w-[110px] h-[20px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleQuickLinkClick('Consultation')}
          />

          {/* Support section */}
          <div 
            className="absolute top-[300px] right-[30px] w-[90px] h-[20px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleSupportLinkClick('About us')}
          />
          
          <div 
            className="absolute top-[340px] right-[30px] w-[60px] h-[20px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleSupportLinkClick('FAQs')}
          />
          
          <div 
            className="absolute top-[380px] right-[30px] w-[100px] h-[20px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleSupportLinkClick('Contact us')}
          />

          {/* Legal links */}
          <div 
            className="absolute top-[700px] left-[30px] w-[100px] h-[20px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleLegalLinkClick('Privacy Policy')}
          />
          
          <div 
            className="absolute top-[740px] left-[30px] w-[130px] h-[20px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleLegalLinkClick('Terms & Condition')}
          />

          <div 
            className="absolute top-[780px] left-[30px] w-[110px] h-[20px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleLegalLinkClick('Return Policy')}
          />

          <div 
            className="absolute top-[820px] left-[30px] w-[80px] h-[20px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleLegalLinkClick('Sitemap')}
          />

          <div 
            className="absolute top-[780px] right-[30px] w-[140px] h-[20px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleLegalLinkClick('Cancellation Policy')}
          />

          {/* Social media icons */}
          <div 
            className="absolute top-[860px] left-[30px] w-[16px] h-[16px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleSocialClick('facebook')}
          />
          
          <div 
            className="absolute top-[860px] left-[70px] w-[16px] h-[16px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleSocialClick('instagram')}
          />
          
          <div 
            className="absolute top-[860px] left-[110px] w-[16px] h-[16px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleSocialClick('pinterest')}
          />
          
          <div 
            className="absolute top-[860px] left-[150px] w-[16px] h-[16px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleSocialClick('linkedin')}
          />
          
          <div 
            className="absolute top-[860px] left-[190px] w-[16px] h-[16px] pointer-events-auto cursor-pointer z-10"
            onClick={() => handleSocialClick('youtube')}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative w-full", className)}>
      {/* Desktop Figma layout */}
      <div className="w-full">
        <FooterDesktop />
      </div>



      {/* Overlay click handlers for desktop interactive elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Contact information */}
        <div 
          className="absolute top-[180px] left-[100px] w-[180px] h-[20px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleContactClick('email')}
        />
        
        <div 
          className="absolute top-[210px] left-[100px] w-[140px] h-[20px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleContactClick('phone')}
        />

        {/* Quick Links section */}
        <div 
          className="absolute top-[380px] left-[346px] w-[80px] h-[30px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleQuickLinkClick('Home')}
        />
        
        <div 
          className="absolute top-[420px] left-[346px] w-[100px] h-[30px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleQuickLinkClick('Assessment')}
        />
        
        <div 
          className="absolute top-[460px] left-[346px] w-[90px] h-[30px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleQuickLinkClick('Programs')}
        />
        
        <div 
          className="absolute top-[500px] left-[346px] w-[80px] h-[30px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleQuickLinkClick('Library')}
        />
        
        <div 
          className="absolute top-[540px] left-[346px] w-[110px] h-[30px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleQuickLinkClick('Consultation')}
        />

        {/* Support section */}
        <div 
          className="absolute top-[380px] left-[740px] w-[90px] h-[30px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleSupportLinkClick('About us')}
        />
        
        <div 
          className="absolute top-[420px] left-[740px] w-[60px] h-[30px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleSupportLinkClick('FAQs')}
        />
        
        <div 
          className="absolute top-[460px] left-[740px] w-[100px] h-[30px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleSupportLinkClick('Contact us')}
        />

        {/* Legal links */}
        <div 
          className="absolute top-[720px] left-[380px] w-[100px] h-[18px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleLegalLinkClick('Privacy Policy')}
        />
        
        <div 
          className="absolute top-[720px] left-[510px] w-[130px] h-[18px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleLegalLinkClick('Terms & Condition')}
        />

        <div 
          className="absolute top-[750px] left-[380px] w-[110px] h-[18px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleLegalLinkClick('Return Policy')}
        />

        <div 
          className="absolute top-[750px] left-[510px] w-[80px] h-[18px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleLegalLinkClick('Sitemap')}
        />

        <div 
          className="absolute top-[780px] left-[380px] w-[140px] h-[18px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleLegalLinkClick('Cancellation Policy')}
        />

        {/* Social media icons */}
        <div 
          className="absolute top-[720px] right-[200px] w-[22px] h-[22px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleSocialClick('facebook')}
        />
        
        <div 
          className="absolute top-[720px] right-[160px] w-[22px] h-[22px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleSocialClick('instagram')}
        />
        
        <div 
          className="absolute top-[720px] right-[120px] w-[22px] h-[22px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleSocialClick('pinterest')}
        />
        
        <div 
          className="absolute top-[720px] right-[80px] w-[22px] h-[22px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleSocialClick('linkedin')}
        />
        
        <div 
          className="absolute top-[720px] right-[40px] w-[22px] h-[22px] pointer-events-auto cursor-pointer z-10"
          onClick={() => handleSocialClick('youtube')}
        />
      </div>
    </div>
  );
}