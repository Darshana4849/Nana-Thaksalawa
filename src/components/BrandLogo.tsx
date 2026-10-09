import React, { useState } from 'react';
import { IMAGES_CONFIG } from '../data/imagesConfig';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  logoSrc?: string;
  variant?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  logoSrc = IMAGES_CONFIG.logo.src,
  variant = 'light',
}) => {
  const [imgError, setImgError] = useState(false);

  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }[size];

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  }[size];

  const isExplicitDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brand Logo Container: Shows image if available, with SVG fallback */}
      <div
        className={`${iconDimensions} rounded-xl ${
          isExplicitDark
            ? 'bg-gradient-to-br from-blue-600 to-indigo-700 shadow-blue-500/20'
            : 'bg-gradient-to-br from-slate-900 to-blue-950 dark:from-slate-800 dark:to-slate-900 shadow-slate-900/10'
        } flex items-center justify-center p-1.5 shadow-md text-white shrink-0 relative overflow-hidden transition-transform duration-200 hover:scale-105 border border-white/10`}
        aria-hidden="true"
      >
        {logoSrc && !imgError ? (
          <img
            src={logoSrc}
            alt="Letter Helper Logo"
            className="w-full h-full object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Subtle grid lines denoting handwriting guide */}
            <line x1="6" y1="14" x2="42" y2="14" stroke={isExplicitDark ? '#93C5FD' : '#475569'} strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.6" />
            <line x1="6" y1="34" x2="42" y2="34" stroke={isExplicitDark ? '#93C5FD' : '#475569'} strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.6" />
            
            {/* Stylized Sinhala curved letter stroke */}
            <path
              d="M14 32 C 12 22, 21 16, 29 16 C 36 16, 38 20, 38 24 C 38 29, 33 32, 27 32 C 21 32, 19 26, 21 23"
              stroke={isExplicitDark ? '#FFFFFF' : '#38BDF8'}
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Precision Keypoint dot in Warm Amber */}
            <circle cx="37" cy="13" r="3.2" fill="#F59E0B" />
            {/* Stylus nib in Emerald/Teal */}
            <path d="M29 36 L36 33 L34 27 Z" fill="#10B981" />
          </svg>
        )}
      </div>

      <div className="flex flex-col text-left">
        <span
          className={`font-extrabold tracking-tight leading-tight ${titleSizes} ${
            isExplicitDark ? 'text-white' : 'text-slate-900 dark:text-white'
          }`}
        >
          LETTER{' '}
          <span
            className={
              isExplicitDark
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300 font-black'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-300 font-black'
            }
          >
            HELPER
          </span>
        </span>
        {showSubtitle && (
          <span
            className={`text-[11px] font-medium tracking-wide flex items-center gap-1.5 ${
              isExplicitDark ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <span className="font-sinhala font-semibold">නැණ තක්සලාව</span>
            <span className="text-slate-300 dark:text-slate-600">·</span>
            <span>SLIIT Research</span>
          </span>
        )}
      </div>
    </div>
  );
};
