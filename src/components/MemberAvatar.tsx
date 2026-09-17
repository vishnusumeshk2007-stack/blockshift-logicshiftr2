import React from 'react';
import { MemberCard } from '../types';
import { DOMAINS } from '../data/domainConfig';

interface MemberAvatarProps {
  member: MemberCard;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const MemberAvatar: React.FC<MemberAvatarProps> = ({
  member,
  className = '',
  size = 'md',
}) => {
  const domain = DOMAINS[member.domain];
  const { hairStyle, accessory, bgPattern } = member.avatarConfig;

  // Background pattern variations
  const renderBackgroundPattern = () => {
    switch (bgPattern) {
      case 'stripes':
        return (
          <pattern id={`pat-stripes-${member.id}`} width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="8" stroke={domain.hex} strokeWidth="2.5" opacity="0.35" />
          </pattern>
        );
      case 'dots':
        return (
          <pattern id={`pat-dots-${member.id}`} width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill={domain.hex} opacity="0.4" />
          </pattern>
        );
      case 'cross':
        return (
          <pattern id={`pat-cross-${member.id}`} width="12" height="12" patternUnits="userSpaceOnUse">
            <path d="M6 3v6M3 6h6" stroke={domain.hex} strokeWidth="1.5" opacity="0.3" />
          </pattern>
        );
      case 'waves':
      default:
        return (
          <pattern id={`pat-waves-${member.id}`} width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M0 8 Q4 4 8 8 T16 8" fill="none" stroke={domain.hex} strokeWidth="2" opacity="0.35" />
          </pattern>
        );
    }
  };

  const renderAccessory = () => {
    switch (accessory) {
      case 'coffee':
        return (
          <g transform="translate(142, 140) rotate(-10)">
            {/* Paper coffee cup */}
            <path d="M4 10 L8 36 L24 36 L28 10 Z" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.5" />
            <path d="M2 7 L30 7 L29 10 L3 10 Z" fill={domain.hex} stroke="#18181B" strokeWidth="2" />
            <rect x="7" y="18" width="18" height="10" fill="#E4D5B7" stroke="#18181B" strokeWidth="1.5" />
            {/* Steam doodle */}
            <path d="M12 4 Q14 1 12 -2" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M18 5 Q20 2 18 -1" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </g>
        );
      case 'stickers':
        return (
          <g transform="translate(138, 142) rotate(15)">
            {/* Vinyl sticker badges */}
            <rect x="0" y="0" width="34" height="20" rx="3" fill="#FFE600" stroke="#18181B" strokeWidth="2" />
            <text x="5" y="14" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="#18181B">
              300DPI
            </text>
            <circle cx="28" cy="24" r="10" fill={domain.hex} stroke="#18181B" strokeWidth="2" />
            <path d="M25 24 L31 24" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          </g>
        );
      case 'dongle':
        return (
          <g transform="translate(145, 135) rotate(-25)">
            {/* Type C dongle hanging */}
            <rect x="4" y="8" width="22" height="32" rx="4" fill="#E2E8F0" stroke="#18181B" strokeWidth="2" />
            <rect x="11" y="2" width="8" height="6" fill="#94A3B8" stroke="#18181B" strokeWidth="1.5" />
            <circle cx="10" cy="18" r="2" fill="#2563EB" />
            <circle cx="10" cy="26" r="2" fill="#10B981" />
            <path d="M15 40 Q18 55 24 60" fill="none" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        );
      case 'mic':
        return (
          <g transform="translate(142, 138) rotate(-15)">
            {/* Stage dynamic mic */}
            <rect x="10" y="18" width="10" height="28" fill="#334155" stroke="#18181B" strokeWidth="2" />
            <circle cx="15" cy="14" r="10" fill="#94A3B8" stroke="#18181B" strokeWidth="2" />
            <line x1="8" y1="14" x2="22" y2="14" stroke="#18181B" strokeWidth="1.5" />
            <line x1="15" y1="7" x2="15" y2="21" stroke="#18181B" strokeWidth="1.5" />
          </g>
        );
      case 'camera':
        return (
          <g transform="translate(136, 140) rotate(8)">
            {/* Camera badge */}
            <rect x="2" y="8" width="34" height="24" rx="3" fill="#18181B" stroke="#18181B" strokeWidth="2" />
            <circle cx="19" cy="20" r="8" fill="#F8FAFC" stroke="#18181B" strokeWidth="2" />
            <circle cx="19" cy="20" r="4" fill={domain.hex} />
            <rect x="7" y="4" width="8" height="4" fill="#EF4444" />
          </g>
        );
      case 'badge':
      default:
        return (
          <g transform="translate(140, 140) rotate(5)">
            {/* Lanyard pass */}
            <rect x="2" y="6" width="30" height="36" rx="2" fill="#FFFFFF" stroke="#18181B" strokeWidth="2" />
            <rect x="6" y="10" width="22" height="12" fill={domain.hex} />
            <line x1="6" y1="26" x2="28" y2="26" stroke="#18181B" strokeWidth="1.5" />
            <line x1="6" y1="32" x2="20" y2="32" stroke="#18181B" strokeWidth="1.5" />
            <rect x="12" y="2" width="10" height="4" fill="#000" />
          </g>
        );
    }
  };

  const renderHairAndHead = () => {
    switch (hairStyle) {
      case 'headphones':
        return (
          <g>
            {/* Head base */}
            <circle cx="100" cy="98" r="42" fill="#FBD5B5" stroke="#18181B" strokeWidth="3" />
            {/* Short cropped hair */}
            <path d="M60 88 C60 52 140 52 140 88 C135 70 120 62 100 62 C80 62 65 70 60 88 Z" fill="#18181B" />
            {/* Over-ear studio headphones */}
            <path d="M54 94 C54 48 146 48 146 94" fill="none" stroke="#18181B" strokeWidth="6" strokeLinecap="round" />
            <rect x="46" y="82" width="15" height="30" rx="6" fill={domain.hex} stroke="#18181B" strokeWidth="2.5" />
            <rect x="139" y="82" width="15" height="30" rx="6" fill={domain.hex} stroke="#18181B" strokeWidth="2.5" />
          </g>
        );
      case 'beanie':
        return (
          <g>
            {/* Head base */}
            <circle cx="100" cy="102" r="42" fill="#F6C8A4" stroke="#18181B" strokeWidth="3" />
            {/* Hair bangs */}
            <path d="M68 96 Q80 110 88 98 Q96 112 106 98 Q118 112 132 96" fill="#18181B" />
            {/* Streetwear Beanie */}
            <path d="M58 88 C55 45 145 45 142 88 Z" fill={domain.hex} stroke="#18181B" strokeWidth="3" />
            <rect x="52" y="78" width="96" height="18" rx="4" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.5" />
            <line x1="56" y1="87" x2="144" y2="87" stroke="#18181B" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Beanie fold patch */}
            <rect x="88" y="80" width="24" height="14" fill="#18181B" rx="2" />
            <text x="91" y="90" fontSize="7" fontFamily="monospace" fill="#FFF" fontWeight="bold">COL</text>
          </g>
        );
      case 'cap':
        return (
          <g>
            {/* Head */}
            <circle cx="100" cy="104" r="42" fill="#E5B288" stroke="#18181B" strokeWidth="3" />
            {/* Baseball cap backwards/sideways */}
            <path d="M58 84 C60 48 140 48 142 84 Z" fill={domain.hex} stroke="#18181B" strokeWidth="3" />
            {/* Cap Brim turned */}
            <path d="M42 84 C42 80 148 76 158 86 C135 94 65 92 42 84 Z" fill="#18181B" stroke="#18181B" strokeWidth="2" />
          </g>
        );
      case 'curls':
        return (
          <g>
            {/* Big textured curly afro/hair */}
            <circle cx="70" cy="80" r="22" fill="#2E1C14" stroke="#18181B" strokeWidth="2.5" />
            <circle cx="130" cy="80" r="22" fill="#2E1C14" stroke="#18181B" strokeWidth="2.5" />
            <circle cx="100" cy="65" r="25" fill="#2E1C14" stroke="#18181B" strokeWidth="2.5" />
            <circle cx="60" cy="100" r="18" fill="#2E1C14" stroke="#18181B" strokeWidth="2.5" />
            <circle cx="140" cy="100" r="18" fill="#2E1C14" stroke="#18181B" strokeWidth="2.5" />
            {/* Face */}
            <circle cx="100" cy="104" r="40" fill="#D89A6B" stroke="#18181B" strokeWidth="3" />
          </g>
        );
      case 'shades':
        return (
          <g>
            {/* Face */}
            <circle cx="100" cy="100" r="42" fill="#F8D3B7" stroke="#18181B" strokeWidth="3" />
            {/* Hair slicked */}
            <path d="M58 85 C62 48 138 48 142 85 C125 72 75 72 58 85 Z" fill="#18181B" stroke="#18181B" strokeWidth="2" />
            {/* Bold Sunglasses */}
            <rect x="64" y="90" width="32" height="18" rx="2" fill="#18181B" stroke="#18181B" strokeWidth="2" />
            <rect x="104" y="90" width="32" height="18" rx="2" fill="#18181B" stroke="#18181B" strokeWidth="2" />
            <line x1="96" y1="96" x2="104" y2="96" stroke="#18181B" strokeWidth="3" />
            <line x1="68" y1="94" x2="80" y2="104" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            <line x1="108" y1="94" x2="120" y2="104" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          </g>
        );
      case 'bandana':
        return (
          <g>
            {/* Face */}
            <circle cx="100" cy="102" r="42" fill="#E6B48B" stroke="#18181B" strokeWidth="3" />
            {/* Bandana wrapped */}
            <path d="M56 82 L144 82 L140 68 C120 54 80 54 60 68 Z" fill="#18181B" stroke="#18181B" strokeWidth="2" />
            <rect x="54" y="78" width="92" height="14" fill={domain.hex} stroke="#18181B" strokeWidth="2" />
            <circle cx="80" cy="85" r="2" fill="#FFF" />
            <circle cx="100" cy="85" r="2" fill="#FFF" />
            <circle cx="120" cy="85" r="2" fill="#FFF" />
          </g>
        );
      case 'bob':
      case 'messy':
      default:
        return (
          <g>
            {/* Hair back */}
            <path d="M52 80 C50 135 60 145 60 145 L140 145 C140 145 150 135 148 80 C145 42 55 42 52 80 Z" fill="#1E293B" />
            {/* Face */}
            <circle cx="100" cy="100" r="40" fill="#FBD8BF" stroke="#18181B" strokeWidth="3" />
            {/* Angular bangs */}
            <path d="M60 82 C80 102 95 72 105 85 C115 72 130 98 140 82 Z" fill="#1E293B" stroke="#18181B" strokeWidth="2" />
          </g>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden bg-white border-2 border-black ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full object-cover select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {renderBackgroundPattern()}
        </defs>

        {/* Backdrop color block */}
        <rect width="200" height="200" fill={domain.lightBg.replace('bg-[', '').replace(']', '') || '#FFF5EB'} />
        {/* Pattern overlay */}
        <rect width="200" height="200" fill={`url(#pat-${bgPattern}-${member.id})`} />

        {/* Comic/Zine duotone graphic halo */}
        <circle cx="100" cy="100" r="68" fill="#FFFFFF" stroke="#18181B" strokeWidth="3.5" />

        {/* Shoulders / Hoodie body */}
        <path
          d="M40 196 C40 152 75 142 100 142 C125 142 160 152 160 196 Z"
          fill={domain.hex}
          stroke="#18181B"
          strokeWidth="3.5"
        />
        {/* Hoodie neckline/zipper */}
        <path d="M88 142 L100 162 L112 142" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.5" />
        <line x1="100" y1="162" x2="100" y2="196" stroke="#18181B" strokeWidth="2.5" />

        {/* Hair and Head */}
        {renderHairAndHead()}

        {/* Eyes & Eyebrows (if not covered by shades) */}
        {hairStyle !== 'shades' && (
          <g>
            {/* Eyebrows */}
            <path d="M78 92 Q85 88 92 92" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M108 92 Q115 88 122 92" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Eyes */}
            <circle cx="85" cy="99" r="3.5" fill="#18181B" />
            <circle cx="115" cy="99" r="3.5" fill="#18181B" />
            <circle cx="86" cy="98" r="1.2" fill="#FFFFFF" />
            <circle cx="116" cy="98" r="1.2" fill="#FFFFFF" />
            {/* Nose */}
            <path d="M98 103 L96 111 L102 111" fill="none" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {/* Smile / Smirk */}
            <path d="M92 118 Q100 124 110 118" fill="none" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        )}

        {/* Domain sticker or accessory */}
        {renderAccessory()}

        {/* Card corner domain tag */}
        <rect x="8" y="8" width="46" height="18" rx="2" fill="#18181B" />
        <text x="13" y="21" fontFamily="monospace" fontSize="9" fontWeight="bold" fill={domain.hex}>
          {domain.shortCode}
        </text>

        {/* Rarity Star cluster */}
        <g transform="translate(142, 10)">
          <rect x="0" y="0" width="50" height="18" rx="2" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.5" />
          <text x="6" y="13" fontFamily="sans-serif" fontSize="10" fontWeight="900" fill="#18181B">
            {member.rarity === 'MYTHIC' ? '★ MYTH' : member.rarity === 'LEGENDARY' ? '★ LGD' : member.rarity === 'HOLO' ? '★ HOLO' : '★ RARE'}
          </text>
        </g>
      </svg>
    </div>
  );
};
