import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Icon } from '../Icon';
import { LogoFull } from '../Logo';
import { useAuth } from '../../contexts/AuthContext';
import { getPrivateNavigationRoutes, corporateRoutes } from '../../lib/route-config';
import { NotificationCenterTrigger } from '../notifications/NotificationCenter';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '../ui/dropdown-menu';
import { Heart, User, LogOut, ChevronDown } from 'lucide-react';
import { cn } from '../ui/utils';
import svgPaths from "../../imports/svg-53vrzosjep";
import sideNavSvgPaths from "../../imports/svg-9hgv5sa7uo";
import imgAvatar from "figma:asset/f8bfdc3dfe2a754ded4c44d82d1518e16a087140.png";

interface TopNavBarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  className?: string;
  showAuthButtons?: boolean;
}

export function TopNavBar({ currentRoute, onNavigate, className, showAuthButtons = true }: TopNavBarProps) {
  const { user, signOut } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  // Define specific navigation items for top nav as requested by user
  // Top nav should have: Dashboard, Mood journal, Assessments, Program, Library, Let's Talk
  const topNavItems = [
    { label: 'Dashboard', route: '/dashboard', icon: 'home' },
    { label: 'Mood Journal', route: '/mood-journal', icon: 'heart' },
    { label: 'Assessments', route: '/assessments', icon: 'assignment' },
    { label: 'Program', route: '/equip-programs', icon: 'tools' },
    { label: 'Library', route: '/library', icon: 'library' },
    { label: 'Consultation', route: '/consultation', icon: 'chat' }
  ];
  
  const navItems = topNavItems.map(item => ({
    label: item.label,
    route: item.route,
    icon: { default: item.icon, active: item.icon },
    variant: { default: 'roundedOutline', active: 'roundedFilled' }
  }));

  // Handle scroll state for animations - JSON spec: states: ["default", "scrolled"]
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const navbarState = isScrolled ? 'scrolled' : 'default';

  return (
    <header 
      className={cn(
        "fixed backdrop-blur transition-all duration-300 flex items-center justify-between px-6",
        isScrolled && "shadow-sm animate-slideDown",
        className
      )}
      style={{ 
        backgroundColor: 'var(--color-bg-card)', 
        borderColor: 'var(--color-border-default)',
        zIndex: 'var(--z-nav)',
        minWidth: 'var(--constraint-nav-desktop-min)',
        maxWidth: 'var(--constraint-nav-desktop-max)',
        height: '88px',
        // Updated border radius as per design
        borderRadius: '12px',
        margin: '20px',
        // Fixed positioning from top
        top: '20px',
        left: '20px',
        right: '20px',
        fontSize: 'var(--text-lg)', // type.title
        fontWeight: 'var(--font-weight-medium)'
      }}
      data-state={navbarState}
    >
      {/* Logo/Brand */}
      <div className="flex items-center gap-3 animate-fadeIn">
        <button
          className="flex items-center gap-2 font-semibold transition-all duration-200"
          onClick={() => onNavigate('/dashboard')}
          style={{ 
            fontSize: 'var(--text-xl)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-primary-default)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <LogoFull height={50} />
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
        {navItems.map((item) => {
          const isActive = currentRoute === item.route;
          
          return (
            <Button
              key={item.route}
              variant="ghost"
              onClick={() => onNavigate(item.route)}
              className={cn(
                "gap-2 px-3 py-2 h-auto transition-all duration-200 relative overflow-hidden",
                // JSON spec interactions: ["hover"] 
                "hover:animate-fadeIn"
              )}
              style={{
                backgroundColor: isActive ? 'var(--color-bg-muted)' : 'transparent',
                color: isActive ? 'var(--color-primary-default)' : 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-medium)',
                borderRadius: 'var(--radius-md)'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'var(--color-bg-muted)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              <Icon 
                name={isActive ? item.icon.active : item.icon.default} 
                size={16}
                variant={isActive ? item.variant.active : item.variant.default}
              />
              {item.label}
              {isActive && (
                <div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 animate-slideRight"
                  style={{ backgroundColor: 'var(--color-primary-default)' }}
                />
              )}
            </Button>
          );
        })}
        
        {/* More Dropdown - Hidden as requested, functionality available through accounts section */}
        <div style={{ display: 'none' }}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="gap-2 px-3 py-2 h-auto transition-all duration-200"
              style={{
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-weight-medium)',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <Icon name="moreHorizontal" size={16} />
              More
              <ChevronDown size={14} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="end" 
            className="w-48"
            style={{
              backgroundColor: 'var(--semantic-navbar-default-bg)',
              borderColor: 'var(--semantic-navbar-default-border)',
              borderRadius: 'var(--radius-md)'
            }}
          >
            {corporateRoutes.map((page) => (
              <DropdownMenuItem
                key={page.path}
                onClick={() => onNavigate(page.path)}
                className="cursor-pointer"
                style={{
                  color: 'var(--semantic-navbar-default-fg)',
                  fontSize: 'var(--text-sm)'
                }}
              >
                {page.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      </nav>

      {/* Profile Section - JSON spec icons: { "profile": "{icon.account.roundedOutline}" } */}
      {showAuthButtons && (
        <div className="flex items-center gap-4">

          <button 
            className="bg-[#ecebf0] box-border content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative rounded-[8px] shrink-0 hover:opacity-90 transition-opacity"
            onClick={() => onNavigate('/contact')}
          >
            <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222222] text-[14px] text-nowrap">
              <p className="leading-[28px] whitespace-pre">Let's Talk</p>
            </div>
          </button>

          {/* Profile Dropdown Menu */}
          {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative shrink-0 size-[48px] hover:scale-105 transition-transform duration-200">
                <img alt="User Avatar" className="block max-w-none size-full rounded-full object-cover" height="48" src={imgAvatar} width="48" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="bg-white content-stretch flex flex-col items-start rounded-[12px] p-[20px] w-[280px]"
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '20px',
                border: 'none',
                boxShadow: '0 6px 20px rgba(0,0,0,0.08)'
              }}
            >
              {/* Profile Button */}
              <div className="bg-[#2e2a2f] h-[48px] relative rounded-[8px] shrink-0 w-full mb-3">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center px-[20px] py-[10px] relative w-full">
                    <div className="overflow-clip relative shrink-0 size-[18px]">
                      <div className="absolute inset-[5.21%_11.08%]">
                        <div className="absolute inset-[-3.1%_-3.57%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
                            <g>
                              <path d={sideNavSvgPaths.p2aa3cc80} fill="var(--fill-0, white)" stroke="var(--stroke-0, white)" />
                              <path d={sideNavSvgPaths.p189c7f80} fill="var(--fill-0, white)" stroke="var(--stroke-0, white)" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Ubuntu:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
                      <p className="leading-[28px] whitespace-pre">Profile</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Settings */}
              <button 
                onClick={() => onNavigate('/account')}
                className="relative rounded-[8px] shrink-0 w-full mb-3 hover:bg-gray-50 transition-colors"
              >
                <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative w-full">
                    <div className="overflow-clip relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                        <path d={sideNavSvgPaths.p3535ba00} fill="var(--fill-0, black)" />
                      </svg>
                    </div>
                    <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-nowrap tracking-[-0.6px]">
                      <p className="leading-[23.97px] whitespace-pre">Settings</p>
                    </div>
                  </div>
                </div>
              </button>

              {/* Notifications */}
              <button 
                onClick={() => onNavigate('/account/notifications')}
                className="relative rounded-[8px] shrink-0 w-full mb-3 hover:bg-gray-50 transition-colors"
              >
                <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative w-full">
                    <div className="overflow-clip relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
                        <path d={sideNavSvgPaths.p2ac53bf0} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.p3fc49280} fill="var(--fill-0, black)" />
                      </svg>
                    </div>
                    <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-nowrap tracking-[-0.6px]">
                      <p className="leading-[23.97px] whitespace-pre">Notifications</p>
                    </div>
                  </div>
                </div>
              </button>

              {/* Security */}
              <button 
                onClick={() => onNavigate('/account/privacy')}
                className="relative rounded-[8px] shrink-0 w-full mb-3 hover:bg-gray-50 transition-colors"
              >
                <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative w-full">
                    <div className="overflow-clip relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
                        <path d={sideNavSvgPaths.p3879200} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.p3932e240} fill="var(--fill-0, black)" />
                      </svg>
                    </div>
                    <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-nowrap tracking-[-0.6px]">
                      <p className="leading-[23.97px] whitespace-pre">Security</p>
                    </div>
                  </div>
                </div>
              </button>

              {/* Preferences */}
              <button 
                onClick={() => onNavigate('/account')}
                className="relative rounded-[8px] shrink-0 w-full mb-3 hover:bg-gray-50 transition-colors"
              >
                <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative w-full">
                    <div className="overflow-clip relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={sideNavSvgPaths.p6656b80} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.p10da980} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.p29f7df80} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.p2d44f700} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.pf7d2800} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.p39b09d00} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.p22900400} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.p3f3f7080} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.p39f74900} fill="var(--fill-0, black)" />
                      </svg>
                    </div>
                    <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-nowrap tracking-[-0.6px]">
                      <p className="leading-[28px] whitespace-pre">Preferences</p>
                    </div>
                  </div>
                </div>
              </button>

              {/* Corporate */}
              <button 
                onClick={() => onNavigate('/about')}
                className="relative rounded-[8px] shrink-0 w-full mb-3 hover:bg-gray-50 transition-colors"
              >
                <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative w-full">
                    <div className="overflow-clip relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={sideNavSvgPaths.p6656b80} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.p10da980} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.p29f7df80} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.p2d44f700} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.pf7d2800} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.p39b09d00} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.p22900400} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.p3f3f7080} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.p39f74900} fill="var(--fill-0, black)" />
                      </svg>
                    </div>
                    <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-nowrap tracking-[-0.6px]">
                      <p className="leading-[28px] whitespace-pre">Corporate</p>
                    </div>
                  </div>
                </div>
              </button>

              {/* Help & Support */}
              <button 
                onClick={() => onNavigate('/contact')}
                className="relative rounded-[8px] shrink-0 w-full mb-3 hover:bg-gray-50 transition-colors"
              >
                <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative w-full">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g clipPath="url(#clip0_89_2393)">
                          <path clipRule="evenodd" d={sideNavSvgPaths.p19332900} fill="var(--fill-0, black)" fillRule="evenodd" />
                        </g>
                        <defs>
                          <clipPath id="clip0_89_2393">
                            <rect fill="white" height="18" width="18" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-nowrap tracking-[-0.6px]">
                      <p className="leading-[28px] whitespace-pre">Help & Support</p>
                    </div>
                  </div>
                </div>
              </button>

              {/* FAQs */}
              <button 
                onClick={() => onNavigate('/faq')}
                className="relative rounded-[8px] shrink-0 w-full mb-3 hover:bg-gray-50 transition-colors"
              >
                <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative w-full">
                    <div className="overflow-clip relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={sideNavSvgPaths.p132bc00} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.p36b21200} fill="var(--fill-0, black)" />
                        <path d={sideNavSvgPaths.p26bfc271} fill="var(--fill-0, black)" />
                      </svg>
                    </div>
                    <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-nowrap tracking-[-0.6px]">
                      <p className="leading-[28px] whitespace-pre">FAQs</p>
                    </div>
                  </div>
                </div>
              </button>

              {/* Additional Corporate Routes - Previously in More dropdown */}
              <div className="w-full border-t border-neutral-100 my-2" />
              {corporateRoutes.map((page) => (
                <button 
                  key={page.path}
                  onClick={() => onNavigate(page.path)}
                  className="relative rounded-[8px] shrink-0 w-full mb-2 hover:bg-gray-50 transition-colors"
                >
                  <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-[8px] relative w-full">
                      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[12px] text-nowrap tracking-[-0.4px]">
                        <p className="leading-[20px] whitespace-pre">{page.label}</p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
              <div className="w-full border-t border-neutral-100 my-2" />

              {/* Log out */}
              <button 
                onClick={handleSignOut}
                className="relative rounded-[8px] shrink-0 w-full hover:bg-gray-50 transition-colors"
              >
                <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-[10px] relative w-full">
                    <div className="overflow-clip relative shrink-0 size-[18px]">
                      <div className="absolute bottom-[0.17%] left-0 right-[46.01%] top-[0.16%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 18">
                          <path d={sideNavSvgPaths.p1680ff80} fill="var(--fill-0, black)" />
                        </svg>
                      </div>
                      <div className="absolute bottom-[20.93%] left-[33.22%] right-0 top-[20.93%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 11">
                          <path d={sideNavSvgPaths.p29eef400} fill="var(--fill-0, black)" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[14px] text-nowrap tracking-[-0.6px]">
                      <p className="leading-[28px] whitespace-pre">Log out</p>
                    </div>
                  </div>
                </div>
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button 
            variant="ghost" 
            className="gap-2 px-2 py-2 h-auto transition-all duration-200 hover:scale-105" 
            onClick={() => onNavigate('/account')}
            style={{
              borderRadius: 'var(--radius-md)'
            }}
          >
            <Icon name="account" size={16} variant="roundedOutline" />
            <span className="hidden lg:inline">Sign In</span>
          </Button>
        )}
        </div>
      )}
    </header>
  );
}