import React from 'react';
import { motion } from 'motion/react';
import svgPathsIcon from "../imports/svg-ptmlmkxncr";
import svgPathsFull from "../imports/svg-epzl744ze1";

// Icon-only logo component
export function LogoIcon({ 
  size = 32, 
  className = "", 
  style = {}, 
  loading = false, 
  interactive = false 
}: { 
  size?: number; 
  className?: string; 
  style?: React.CSSProperties; 
  loading?: boolean;
  interactive?: boolean;
}) {
  return (
    <motion.div 
      className={`relative ${className}`} 
      style={{ width: size, height: size, ...style }}
      data-name="LogoIcon"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: loading ? [0, 360] : 0
      }}
      transition={{ 
        opacity: { duration: 0.3 },
        scale: { duration: 0.3, type: "spring", stiffness: 300 },
        rotate: { 
          duration: 2, 
          repeat: loading ? Infinity : 0, 
          ease: "linear" 
        }
      }}
      whileHover={interactive ? { 
        scale: 1.1, 
        rotate: 5,
        transition: { duration: 0.2 }
      } : {}}
      whileTap={interactive ? { 
        scale: 0.95,
        transition: { duration: 0.1 }
      } : {}}
    >
      <motion.svg 
        className="block size-full" 
        fill="none" 
        preserveAspectRatio="xMidYMid meet" 
        viewBox="0 0 47 47"
        style={{ color: 'var(--color-primary-default)' }}
        animate={loading ? {
          opacity: [1, 0.7, 1]
        } : {}}
        transition={loading ? {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        } : {}}
      >
        <g id="Logo">
          <motion.path 
            d={svgPathsIcon.p23092d00} 
            fill="currentColor" 
            id="Vector"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut",
              delay: 0.2
            }}
          />
        </g>
      </motion.svg>
    </motion.div>
  );
}

// Full logo component with icon and text
export function LogoFull({ height = 32, className = "", style = {} }: { 
  height?: number; 
  className?: string; 
  style?: React.CSSProperties; 
}) {
  return (
    <div 
      className={`relative ${className}`} 
      style={{ height, width: 'auto', ...style }}
      data-name="LogoFull"
    >
      <svg 
        className="block h-full w-auto" 
        fill="none" 
        preserveAspectRatio="xMidYMid meet" 
        viewBox="0 0 100 50"
        style={{ color: 'var(--color-primary-default)' }}
      >
        <g id="Logo">
          <g id="Vector">
            <path d={svgPathsFull.p28d7740} fill="currentColor" />
            <path d={svgPathsFull.p201d5680} fill="currentColor" />
            <path d={svgPathsFull.p2febba00} fill="currentColor" />
            <path d={svgPathsFull.p2be28440} fill="currentColor" />
            <path d={svgPathsFull.p1c12f8f0} fill="currentColor" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// Combined logo component that shows icon + text using flex layout
export function Logo({ 
  showText = true, 
  iconSize = 32, 
  className = "", 
  style = {},
  loading = false,
  interactive = false
}: { 
  showText?: boolean; 
  iconSize?: number; 
  className?: string; 
  style?: React.CSSProperties; 
  loading?: boolean;
  interactive?: boolean;
}) {
  if (!showText) {
    return <LogoIcon size={iconSize} className={className} style={style} loading={loading} interactive={interactive} />;
  }

  return (
    <motion.div 
      className={`flex items-center gap-2 ${className}`} 
      style={style}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.5, 
        ease: "easeOut",
        staggerChildren: 0.1
      }}
      whileHover={interactive ? { 
        scale: 1.02,
        transition: { duration: 0.2 }
      } : {}}
    >
      <LogoIcon size={iconSize} loading={loading} interactive={interactive} />
      <motion.span 
        style={{
          fontSize: iconSize >= 32 ? 'var(--text-xl)' : 'var(--text-lg)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-text-primary)',
          fontFamily: 'var(--font-family-base)'
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.3, 
          delay: 0.2,
          ease: "easeOut"
        }}
      >
        iKan
      </motion.span>
    </motion.div>
  );
}

// Default export for convenience
export default Logo;