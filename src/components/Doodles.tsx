import React from 'react';

// Hand-drawn scribble underline for poster titles
export const ScribbleUnderline: React.FC<{ color?: string; className?: string }> = ({
  color = '#FF5500',
  className = '',
}) => (
  <svg
    viewBox="0 0 280 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`overflow-visible ${className}`}
  >
    <path
      d="M3 14C45 4 110 3 175 6C215 8 260 12 277 18C255 21 210 20 160 17C105 14 50 16 12 21"
      stroke={color}
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Sparkle / Star doodle
export const HandDrawnStar: React.FC<{
  size?: number;
  color?: string;
  className?: string;
  rotation?: number;
}> = ({ size = 28, color = '#18181B', className = '', rotation = 0 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    <path
      d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z"
      fill={color}
      stroke="#18181B"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

// Four-point doodle cross
export const DoodleCross: React.FC<{ size?: number; color?: string; className?: string }> = ({
  size = 20,
  color = '#18181B',
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 3V21M3 12H21" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Pushpin accent for pinned cards
export const Pushpin: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#FF5500',
}) => (
  <div className={`relative flex items-center justify-center w-6 h-6 ${className}`}>
    <div
      className="w-4 h-4 rounded-full border-2 border-black hard-shadow-sm flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
    </div>
  </div>
);

// Washi tape strip component
export const WashiTapeStrip: React.FC<{
  width?: string;
  rotation?: number;
  className?: string;
  color?: string;
}> = ({
  width = 'w-24',
  rotation = -2,
  className = '',
  color = 'bg-yellow-200/90 border-yellow-300/80',
}) => (
  <div
    className={`h-5 ${width} border-t border-b ${color} backdrop-blur-xs opacity-95 shadow-xs select-none pointer-events-none ${className}`}
    style={{
      transform: `rotate(${rotation}deg)`,
      clipPath: 'polygon(0% 10%, 4% 0%, 96% 0%, 100% 12%, 98% 88%, 94% 100%, 2% 98%, 0% 85%)',
    }}
  />
);

// Stamp badge
export const StampBadge: React.FC<{
  text: string;
  color?: string;
  rotation?: number;
  className?: string;
}> = ({ text, color = '#18181B', rotation = -4, className = '' }) => (
  <div
    className={`inline-block px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase border-2 rounded-xs border-dashed select-none ${className}`}
    style={{
      color,
      borderColor: color,
      transform: `rotate(${rotation}deg)`,
    }}
  >
    {text}
  </div>
);

// Hand-drawn arrow doodle
export const HandDrawnArrow: React.FC<{
  color?: string;
  className?: string;
  direction?: 'down' | 'right';
}> = ({ color = '#18181B', className = '', direction = 'down' }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-8 h-8 ${className} ${direction === 'right' ? '-rotate-90' : ''}`}
  >
    <path
      d="M20 4V34M20 34L10 24M20 34L30 24"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
