export type TeamDomain = 'design' | 'tech' | 'events' | 'ops';

export type CardRarity = 'HOLO' | 'RARE' | 'LEGENDARY' | 'MYTHIC';

export interface DomainConfig {
  id: TeamDomain;
  name: string;
  shortCode: string;
  tagline: string;
  hex: string;
  borderClass: string;
  bgClass: string;
  textClass: string;
  badgeBg: string;
  lightBg: string;
  mascot: string;
  manifesto: string;
}

export interface MemberCard {
  id: string;
  name: string;
  callsign: string;
  role: string;
  domain: TeamDomain;
  academicYear: string;
  quirkyStat: {
    label: string;
    value: string;
    meter?: number; // 0-100
  };
  quote: string;
  passiveSkill: string;
  weakness: string;
  signatureMove: string;
  rarity: CardRarity;
  rotationDeg: number;
  avatarConfig: {
    hairStyle: 'beanie' | 'messy' | 'curls' | 'headphones' | 'cap' | 'bob' | 'shades' | 'bandana';
    accessory: 'coffee' | 'badge' | 'stickers' | 'mic' | 'dongle' | 'camera';
    bgPattern: 'stripes' | 'dots' | 'cross' | 'waves';
  };
  lore: string;
}

export type QuestStatus = 'COMPLETED' | 'IN_PROGRESS' | 'LOCKED';

export interface QuestItem {
  id: string;
  code: string;
  title: string;
  season: string;
  date: string;
  status: QuestStatus;
  leadDomains: TeamDomain[];
  xp: number;
  brief: string;
  lootDrop: string;
  unlockCondition?: string;
  progressPercent?: number;
  crewIntel: string;
}
