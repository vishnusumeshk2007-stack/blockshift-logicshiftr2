import React, { useState, useMemo } from 'react';
import { MemberCard, TeamDomain } from '../types';
import { DOMAINS } from '../data/domainConfig';
import { TradingCard } from './TradingCard';
import { ScribbleUnderline, HandDrawnStar } from './Doodles';
import { Search, Filter, Shuffle, UserPlus, Sparkles, CheckCircle2 } from 'lucide-react';

interface TradingCardGridProps {
  members: MemberCard[];
  onOpenRecruitModal: () => void;
  onInspectMember: (member: MemberCard) => void;
}

export const TradingCardGrid: React.FC<TradingCardGridProps> = ({
  members,
  onOpenRecruitModal,
  onInspectMember,
}) => {
  const [selectedDomain, setSelectedDomain] = useState<TeamDomain | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [spotlightedMemberId, setSpotlightedMemberId] = useState<string | null>(null);

  // Filtered members list
  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const matchesDomain = selectedDomain === 'all' || member.domain === selectedDomain;
      const matchesRarity = selectedRarity === 'all' || member.rarity === selectedRarity;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        member.name.toLowerCase().includes(query) ||
        member.callsign.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.quirkyStat.label.toLowerCase().includes(query) ||
        member.quirkyStat.value.toLowerCase().includes(query);

      return matchesDomain && matchesRarity && matchesSearch;
    });
  }, [members, selectedDomain, selectedRarity, searchQuery]);

  // Handle random gacha draw
  const handleRandomDraw = () => {
    if (members.length === 0) return;
    const randomIndex = Math.floor(Math.random() * members.length);
    const chosen = members[randomIndex];
    setSpotlightedMemberId(chosen.id);

    // Scroll to the card
    const el = document.getElementById(`trading-card-${chosen.id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      onInspectMember(chosen);
    }
  };

  // Counts per domain
  const counts = useMemo(() => {
    return {
      all: members.length,
      design: members.filter((m) => m.domain === 'design').length,
      tech: members.filter((m) => m.domain === 'tech').length,
      events: members.filter((m) => m.domain === 'events').length,
      ops: members.filter((m) => m.domain === 'ops').length,
    };
  }, [members]);

  return (
    <section id="crew-roster" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Bold Section Header matching theme: The Crew */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-3xl sm:text-4xl font-black uppercase bg-black text-white px-4 py-1.5 tracking-tight">
          THE CREW
        </h2>
        <div className="flex-1 h-1 bg-black"></div>
      </div>

      {/* Header Info & Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b-4 border-black gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#FFD100] text-black px-2.5 py-1 text-xs font-mono font-black uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              ROSTER ARCHIVE // S26
            </span>
            <span className="text-xs font-mono text-neutral-800 font-bold uppercase">
              COLLECTIBLE TRADING CARDS
            </span>
          </div>

          <p className="mt-2 text-base text-[#1A1A1A] max-w-xl font-medium">
            Not a corporate directory. Every card is an active crew member with verified campus lore, emergency skills, and questionable sleep habits.
          </p>
        </div>

        {/* Action Buttons: Gacha draw & Recruit button */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            id="btn-random-card-draw"
            type="button"
            onClick={handleRandomDraw}
            className="btn-tactile px-5 py-3 bg-[#FFD100] hover:bg-yellow-300 text-black border-4 border-black font-mono font-black text-xs uppercase flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
          >
            <Shuffle className="w-4 h-4" />
            <span>DRAW RANDOM CREW</span>
          </button>

          <button
            id="btn-open-recruit-modal"
            type="button"
            onClick={onOpenRecruitModal}
            className="btn-tactile px-5 py-3 bg-black hover:bg-neutral-900 text-white border-4 border-black font-mono font-black text-xs uppercase flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(67,97,238,1)] cursor-pointer"
          >
            <UserPlus className="w-4 h-4 text-[#06D6A0]" />
            <span>MINT YOUR CARD</span>
          </button>
        </div>
      </div>

      {/* Domain Filters & Controls Bar */}
      <div className="mb-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Loud Accent Color Domain Chips */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* All chip */}
          <button
            id="filter-domain-all"
            type="button"
            onClick={() => setSelectedDomain('all')}
            className={`btn-tactile px-4 py-2 text-xs font-mono font-black uppercase border-3 border-black transition-colors flex items-center gap-1.5 cursor-pointer ${
              selectedDomain === 'all'
                ? 'bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-white text-black hover:bg-neutral-100'
            }`}
          >
            <span>ALL CREW</span>
            <span className="px-1.5 py-0.2 bg-neutral-200 text-black text-[10px] font-mono">
              {counts.all}
            </span>
          </button>

          {/* Design Chip */}
          <button
            id="filter-domain-design"
            type="button"
            onClick={() => setSelectedDomain('design')}
            className={`btn-tactile px-4 py-2 text-xs font-mono font-black uppercase border-3 border-black transition-colors flex items-center gap-1.5 cursor-pointer ${
              selectedDomain === 'design'
                ? 'bg-[#FF6B35] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-white text-black hover:bg-orange-50'
            }`}
          >
            <span className="w-2.5 h-2.5 bg-[#FF6B35] border border-black inline-block" />
            <span>DESIGN</span>
            <span className="px-1.5 py-0.2 bg-black text-white text-[10px] font-mono">
              {counts.design}
            </span>
          </button>

          {/* Tech Chip */}
          <button
            id="filter-domain-tech"
            type="button"
            onClick={() => setSelectedDomain('tech')}
            className={`btn-tactile px-4 py-2 text-xs font-mono font-black uppercase border-3 border-black transition-colors flex items-center gap-1.5 cursor-pointer ${
              selectedDomain === 'tech'
                ? 'bg-[#4361EE] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-white text-black hover:bg-blue-50'
            }`}
          >
            <span className="w-2.5 h-2.5 bg-[#4361EE] border border-black inline-block" />
            <span>TECH</span>
            <span className="px-1.5 py-0.2 bg-black text-white text-[10px] font-mono">
              {counts.tech}
            </span>
          </button>

          {/* Events Chip */}
          <button
            id="filter-domain-events"
            type="button"
            onClick={() => setSelectedDomain('events')}
            className={`btn-tactile px-4 py-2 text-xs font-mono font-black uppercase border-3 border-black transition-colors flex items-center gap-1.5 cursor-pointer ${
              selectedDomain === 'events'
                ? 'bg-[#06D6A0] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-white text-black hover:bg-emerald-50'
            }`}
          >
            <span className="w-2.5 h-2.5 bg-[#06D6A0] border border-black inline-block" />
            <span>EVENTS</span>
            <span className="px-1.5 py-0.2 bg-black text-white text-[10px] font-mono">
              {counts.events}
            </span>
          </button>

          {/* Ops & Media Chip */}
          <button
            id="filter-domain-ops"
            type="button"
            onClick={() => setSelectedDomain('ops')}
            className={`btn-tactile px-4 py-2 text-xs font-mono font-black uppercase border-3 border-black transition-colors flex items-center gap-1.5 cursor-pointer ${
              selectedDomain === 'ops'
                ? 'bg-[#8B5CF6] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-white text-black hover:bg-purple-50'
            }`}
          >
            <span className="w-2.5 h-2.5 bg-[#8B5CF6] border border-black inline-block" />
            <span>OPS & MEDIA</span>
            <span className="px-1.5 py-0.2 bg-black text-white text-[10px] font-mono">
              {counts.ops}
            </span>
          </button>
        </div>

        {/* Search Input with Tactile Border */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 text-neutral-600 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="input-search-crew"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search callsign or stat..."
              className="w-full pl-9 pr-3 py-2 bg-white border-3 border-black font-mono text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-hidden"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-black font-mono text-xs font-bold cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Trading Card Grid */}
      {filteredMembers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-x-8 md:gap-y-12">
          {filteredMembers.map((member, index) => (
            <TradingCard
              key={member.id}
              member={member}
              index={index}
              onInspect={onInspectMember}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white border-2 border-dashed border-neutral-400 rounded-sm">
          <div className="text-4xl mb-3">🃏</div>
          <h4 className="font-display font-black text-lg text-neutral-800 mb-1">
            No Crew Member Found
          </h4>
          <p className="text-xs text-neutral-500 font-mono mb-4">
            No one matches your current filter query &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedDomain('all');
            }}
            className="btn-tactile px-4 py-2 bg-black text-white font-mono text-xs font-bold border-2 border-black hard-shadow-sm cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Grid Footnote / Human detail */}
      <div className="mt-14 pt-6 border-t-2 border-neutral-300 flex flex-wrap items-center justify-between text-xs font-mono text-neutral-500 gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>ROSTER STATUS: ALL CARDS ACTIVELY REGISTERED ON CAMPUS</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-neutral-100 px-2 py-1 border border-neutral-300">
            TIP: Click the ↻ icon to flip card for secret lore
          </span>
        </div>
      </div>
    </section>
  );
};
