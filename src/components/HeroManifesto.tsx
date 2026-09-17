import React, { useState } from 'react';
import { MemberCard } from '../types';
import { DOMAINS } from '../data/domainConfig';
import { ScribbleUnderline, HandDrawnStar, WashiTapeStrip, Pushpin, StampBadge } from './Doodles';
import { MemberAvatar } from './MemberAvatar';
import { ArrowDown, Sparkles, Terminal, Edit3, Check } from 'lucide-react';

interface HeroManifestoProps {
  featuredMember: MemberCard;
  clubName: string;
  onUpdateClubName: (name: string) => void;
  onOpenRecruit: () => void;
  totalCrewCount: number;
  totalCompletedQuests: number;
}

export const HeroManifesto: React.FC<HeroManifestoProps> = ({
  featuredMember,
  clubName,
  onUpdateClubName,
  onOpenRecruit,
  totalCrewCount,
  totalCompletedQuests,
}) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(clubName);

  const handleSaveName = () => {
    if (tempName.trim()) {
      onUpdateClubName(tempName.trim());
    }
    setIsEditingName(false);
  };

  const domain = DOMAINS[featuredMember.domain];

  return (
    <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Top Banner / College Notice Strip */}
      <div className="mb-8 flex flex-wrap items-center justify-between border-4 border-black py-2.5 px-4 bg-white font-mono text-xs text-neutral-900 gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-3">
          <span className="bg-[#FFD100] px-2 py-0.5 border-2 border-black font-black flex items-center gap-1 text-black">
            <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-ping" />
            FIELD DISPATCH
          </span>
          <span className="font-bold tracking-tight">
            ROOM 302 BASEMENT LAB // CAMPUS CHAPTER ARCHIVE
          </span>
        </div>
        <div className="flex items-center gap-4 text-neutral-800 font-bold text-[11px] sm:text-xs">
          <span>CREW SIZE: {totalCrewCount} ACTIVE</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">RAIDS CLEARED: {totalCompletedQuests}</span>
          <span>•</span>
          <span className="bg-[#FFD100] px-2 py-0.5 border-2 border-black text-black">
            0% CORPORATE JARGON
          </span>
        </div>
      </div>

      {/* Bold Typography Monumental Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-8 border-b-4 border-black gap-6">
        <div>
          <div className="mb-3 flex items-center gap-3">
            {!isEditingName ? (
              <div
                className="group inline-flex items-center gap-2 bg-black text-white px-3.5 py-1.5 font-mono text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                onClick={() => setIsEditingName(true)}
                title="Click to customize club name"
              >
                <span>[ {clubName} ]</span>
                <span className="text-[#FFD100] text-[10px] font-normal group-hover:underline flex items-center gap-1">
                  <Edit3 className="w-3 h-3" /> edit
                </span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 bg-white p-1 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                  placeholder="Enter club name..."
                  className="px-2 py-1 font-mono text-xs font-bold border border-neutral-300 focus:outline-hidden"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={handleSaveName}
                  className="px-2 py-1 bg-black text-white font-mono text-xs font-bold cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
            <span className="bg-[#FF6B35] text-white px-2.5 py-1 border-2 border-black font-mono text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              CREW OPERATIONAL
            </span>
          </div>

          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[112px] xl:text-[120px] leading-[0.82] font-black uppercase tracking-tighter text-[#1A1A1A] select-none">
            THE<br />COLLECTIVE
          </h1>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <div className="border-4 border-black p-4 bg-[#FFD100] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-3">
            <span className="font-black text-lg sm:text-xl uppercase tracking-tight text-black block">
              Est. 2024 / No Corporate BS
            </span>
          </div>
          <div className="mt-4 md:mt-6 text-left md:text-right font-medium max-w-[240px] leading-tight text-base sm:text-lg text-[#1A1A1A]">
            A crew of builders, dreamers, and caffeine-addicts.
          </div>
        </div>
      </header>

      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
        {/* Left Column: Manifesto & Tactile Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase bg-black text-white px-3 py-1 tracking-tight">
              THE MANIFESTO
            </h2>
            <div className="flex-1 h-1 bg-black"></div>
          </div>

          <p className="text-base sm:text-lg text-[#1A1A1A] font-medium leading-relaxed max-w-xl">
            We are the sleepless designers, terminal whisperers, audio engineers, and bureaucracy escape artists who actually pull off campus fests. No stock photos. No generic corporate buzzwords. Just the crew, the cards, and the questline.
          </p>

          {/* Tactile Button Actions with Bold Shadows */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#crew-roster"
              className="btn-tactile px-6 py-4 bg-[#FF6B35] hover:bg-[#E0531F] text-white border-4 border-black font-mono font-black text-sm uppercase tracking-wider shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 cursor-pointer"
            >
              <span>EXPLORE CREW CARDS</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#questline"
              className="btn-tactile px-6 py-4 bg-white hover:bg-neutral-100 text-black border-4 border-black font-mono font-black text-sm uppercase tracking-wider shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 cursor-pointer"
            >
              <span>VIEW QUESTLINE</span>
              <Terminal className="w-4 h-4 text-[#4361EE]" />
            </a>

            <button
              type="button"
              onClick={onOpenRecruit}
              className="btn-tactile px-6 py-4 bg-[#FFD100] hover:bg-yellow-300 text-black border-4 border-black font-mono font-black text-sm uppercase tracking-wider shadow-[6px_6px_0px_0px_rgba(67,97,238,1)] flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>ENLIST IN THE CREW</span>
            </button>
          </div>

          {/* Campus Lab Bulletin Note Box */}
          <div className="mt-10 relative bg-[#FEF9C3] p-5 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-lg">
            <Pushpin className="absolute -top-3 left-4" color="#FF6B35" />
            <div className="pl-4">
              <span className="font-mono text-xs font-black uppercase text-amber-950 tracking-wider block mb-1">
                📌 CAMPUS LAB BULLETIN // DISPATCH 302:
              </span>
              <p className="text-xs text-amber-950 font-mono leading-relaxed">
                Notice: The blue HDMI-to-Type-C dongle belongs to the Collective. If found in Lab 304, please return it before the Friday soundcheck or face a 12-slide presentation about cable ethics.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Spotlight Physical Trading Card with Bold Styling */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <div className="relative w-full max-w-sm">
            {/* Washi Tape at Top */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
              <WashiTapeStrip width="w-36" rotation={-3} />
            </div>

            {/* Sticker Badge pinned */}
            <div className="absolute -top-6 -right-4 z-30 pointer-events-none">
              <span className="bg-[#FFD100] text-black font-mono font-black text-xs px-3.5 py-1.5 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-6 inline-block">
                ★ SPOTLIGHT OPERATOR
              </span>
            </div>

            {/* Physical Card Mockup with deliberate tilt and bold 4px border */}
            <div
              className="bg-[#FF6B35] border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-2 flex flex-col transition-all duration-300 hover:rotate-0"
            >
              {/* Card Color Trim Header */}
              <div className="flex items-center justify-between pb-3 border-b-2 border-black text-black">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black bg-black text-white px-2 py-0.5">
                    {domain.shortCode}
                  </span>
                  <span className="font-black text-sm uppercase tracking-tight text-white">
                    {domain.name}
                  </span>
                </div>
                <span className="font-mono text-xs font-black bg-white text-black px-2 py-0.5 border-2 border-black">
                  GEN 26
                </span>
              </div>

              {/* Card Photo Avatar Box */}
              <div className="my-3 bg-white border-2 border-black overflow-hidden aspect-[4/3] flex items-center justify-center">
                <MemberAvatar member={featuredMember} className="w-full h-full" />
              </div>

              {/* Name & Callsign */}
              <div className="mb-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-black text-2xl text-white tracking-tight uppercase leading-none">
                    {featuredMember.name}
                  </h3>
                  <span className="font-mono text-xs font-bold text-white/80">
                    #{featuredMember.id}
                  </span>
                </div>
                <p className="text-xs font-bold uppercase text-white/90 mt-1">
                  {featuredMember.role}
                </p>
              </div>

              {/* Quirky Stat */}
              <div className="mt-auto border-t-2 border-black pt-2 bg-black/10 p-2 border border-black text-white">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] font-black uppercase text-white/80">
                    Stat: {featuredMember.quirkyStat.label}
                  </span>
                  <div className="text-lg font-black text-[#FFD100]">
                    {featuredMember.quirkyStat.value}
                  </div>
                </div>
              </div>

              {/* Card Quote */}
              <div className="mt-2 text-xs italic text-black bg-white p-2 border-2 border-black font-medium">
                &ldquo;{featuredMember.quote}&rdquo;
              </div>

              {/* Footer action */}
              <a
                href="#crew-roster"
                className="btn-tactile mt-3 py-2.5 bg-black text-white font-mono font-black text-xs uppercase flex items-center justify-center gap-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-neutral-900 cursor-pointer"
              >
                <span>BROWSE ALL {totalCrewCount} TRADING CARDS</span>
                <span>&rarr;</span>
              </a>
            </div>

            {/* Asymmetric Tape at bottom */}
            <div className="absolute -bottom-3 -left-4 z-30 pointer-events-none">
              <WashiTapeStrip width="w-24" rotation={4} color="bg-emerald-200/90 border-emerald-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
