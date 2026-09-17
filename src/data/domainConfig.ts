import { DomainConfig, TeamDomain } from '../types';

export const DOMAINS: Record<TeamDomain, DomainConfig> = {
  design: {
    id: 'design',
    name: 'Design Crew',
    shortCode: 'DSGN',
    tagline: 'Fixing kerning and breaking grid rules since day one',
    hex: '#FF6B35', // Bold vermilion orange from theme
    borderClass: 'border-[#FF6B35]',
    bgClass: 'bg-[#FF6B35]',
    textClass: 'text-[#FF6B35]',
    badgeBg: 'bg-[#FF6B35]/15 text-[#C43D00] border-[#FF6B35]',
    lightBg: 'bg-[#FFF3EC]',
    mascot: 'Vector Pen & CMYK Tape',
    manifesto: 'If the poster doesn’t hurt your eyes a little bit, it’s not loud enough. We fight for 300 DPI stickers and outlaw Comic Sans under penalty of washing the banner brushes.',
  },
  tech: {
    id: 'tech',
    name: 'Tech Crew',
    shortCode: 'TECH',
    tagline: 'Turning cold brew into syntax errors and hotfixes',
    hex: '#4361EE', // Electric cobalt blue from theme
    borderClass: 'border-[#4361EE]',
    bgClass: 'bg-[#4361EE]',
    textClass: 'text-[#4361EE]',
    badgeBg: 'bg-[#4361EE]/15 text-[#4361EE] border-[#4361EE]',
    lightBg: 'bg-[#EFF6FF]',
    mascot: 'Terminal Prompt & Solder Wire',
    manifesto: 'The portal is not broken, it’s just aggressively caching. We maintain the wifi hot-rod, write scripts that automate everything except our laundry, and refuse to push to main before 2 AM.',
  },
  events: {
    id: 'events',
    name: 'Events Crew',
    shortCode: 'EVNT',
    tagline: 'Decibels, crowd control, and emergency gaffer tape',
    hex: '#06D6A0', // Vibrant cyber mint from theme
    borderClass: 'border-[#06D6A0]',
    bgClass: 'bg-[#06D6A0]',
    textClass: 'text-[#06D6A0]',
    badgeBg: 'bg-[#06D6A0]/15 text-[#047857] border-[#06D6A0]',
    lightBg: 'bg-[#ECFDF5]',
    mascot: 'Walkie-Talkie & Stage Pass',
    manifesto: 'No schedule survives contact with the stage soundcheck. We can fit 350 people into a 120-seat seminar hall using spatial geometry, polite shouting, and extra folding chairs.',
  },
  ops: {
    id: 'ops',
    name: 'Ops & Media',
    shortCode: 'OPS+',
    tagline: 'Chasing the dean for signatures and capturing 4K chaos',
    hex: '#8B5CF6', // Vivid violet
    borderClass: 'border-[#8B5CF6]',
    bgClass: 'bg-[#8B5CF6]',
    textClass: 'text-[#8B5CF6]',
    badgeBg: 'bg-[#8B5CF6]/15 text-[#6D28D9] border-[#8B5CF6]',
    lightBg: 'bg-[#F5F3FF]',
    mascot: 'Requisition Form & Fisheye Lens',
    manifesto: 'We extract budget from administrative stone. We shoot recap videos that make a 20-person workshop look like Glastonbury, and we know the exact office hours of every faculty advisor.',
  },
};
