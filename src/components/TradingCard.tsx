import React, { useState } from 'react';
import { MemberCard } from '../types';
import { DOMAINS } from '../data/domainConfig';
import { MemberAvatar } from './MemberAvatar';
import { WashiTapeStrip, HandDrawnStar } from './Doodles';
import { Sparkles, RotateCw, Zap, ShieldAlert, Award } from 'lucide-react';

interface TradingCardProps {
  member: MemberCard;
  onInspect?: (member: MemberCard) => void;
  index: number;
}

export const TradingCard: React.FC<TradingCardProps> = ({ member, onInspect, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const domain = DOMAINS[member.domain];

  // Tape rotation variation
  const tapeRotation = index % 2 === 0 ? -2.5 : 2;

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      id={`trading-card-${member.id}`}
      className="relative group transition-all duration-300 ease-out"
      style={{
        transform: `rotate(${member.rotationDeg}deg)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'rotate(0deg) translateY(-6px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${member.rotationDeg}deg) translateY(0px)`;
      }}
    >
      {/* Washi Tape Strip at top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <WashiTapeStrip
          width="w-28"
          rotation={tapeRotation}
          color={
            member.domain === 'design'
              ? 'bg-orange-200/90 border-orange-300'
              : member.domain === 'tech'
              ? 'bg-blue-200/90 border-blue-300'
              : member.domain === 'events'
              ? 'bg-emerald-200/90 border-emerald-300'
              : 'bg-purple-200/90 border-purple-300'
          }
        />
      </div>

      {/* Main Card Shell - Bold Typography Archetype */}
      <div
        className={`relative border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 overflow-hidden flex flex-col justify-between ${
          member.domain === 'design'
            ? 'bg-[#FF6B35] text-black'
            : member.domain === 'tech'
            ? 'bg-[#4361EE] text-white'
            : member.domain === 'events'
            ? 'bg-[#06D6A0] text-black'
            : 'bg-[#8B5CF6] text-white'
        }`}
      >
        {/* Top Header Strip with Domain Code & Flip */}
        <div
          className={`pb-2.5 mb-3 flex items-center justify-between border-b-2 ${
            member.domain === 'tech' || member.domain === 'ops'
              ? 'border-white/80'
              : 'border-black'
          }`}
        >
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-xs font-black tracking-widest bg-black text-white px-2 py-0.5 border border-white">
              {domain.shortCode}
            </span>
            <span className="text-xs font-black uppercase tracking-wider truncate max-w-[120px]">
              {domain.name}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {member.rarity === 'MYTHIC' && (
              <span className="text-[10px] font-mono font-black tracking-wider bg-[#FFD100] text-black px-1.5 py-0.5 border-2 border-black flex items-center gap-0.5">
                <Sparkles className="w-2.5 h-2.5 inline" /> MYTHIC
              </span>
            )}
            {member.rarity === 'HOLO' && (
              <span className="text-[10px] font-mono font-black tracking-wider bg-white text-black px-1.5 py-0.5 border-2 border-black flex items-center gap-0.5">
                <Sparkles className="w-2.5 h-2.5 inline" /> HOLO
              </span>
            )}
            <button
              id={`btn-flip-${member.id}`}
              type="button"
              onClick={handleFlip}
              title="Flip Card for Lore & Stats"
              className={`p-1 border-2 font-mono text-xs font-bold transition-transform hover:scale-110 cursor-pointer ${
                member.domain === 'tech' || member.domain === 'ops'
                  ? 'bg-black text-white border-white'
                  : 'bg-white text-black border-black'
              }`}
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Card Body - Front vs Back */}
        {!isFlipped ? (
          <div className="flex flex-col flex-1">
            {/* Card Avatar / Photo Frame - styled from design */}
            <div
              className={`relative mb-3 aspect-[4/3] w-full border-2 overflow-hidden flex items-center justify-center ${
                member.domain === 'tech'
                  ? 'bg-black border-white'
                  : 'bg-white border-black'
              }`}
            >
              <MemberAvatar member={member} className="w-full h-full" />
              {/* Year Stamp */}
              <div className="absolute -bottom-1 right-1 bg-black text-white px-2 py-0.5 border border-white text-[10px] font-mono font-bold">
                {member.academicYear}
              </div>
            </div>

            {/* Name and Role */}
            <div className="mb-2">
              <div className="flex items-baseline justify-between gap-1">
                <h3 className="font-black text-xl leading-none uppercase tracking-tight">
                  {member.name}
                </h3>
                <span className="font-mono text-xs font-bold opacity-80 whitespace-nowrap">
                  #{member.id.replace('crew-', '')}
                </span>
              </div>
              <p className="text-xs font-bold uppercase mt-1">
                {member.role}
              </p>
            </div>

            {/* Quirky Stat Section - styled as in design HTML */}
            <div
              className={`mt-auto border-t-2 pt-2 mb-2 ${
                member.domain === 'tech' || member.domain === 'ops'
                  ? 'border-white'
                  : 'border-black'
              }`}
            >
              <div className="flex justify-between items-baseline text-xs">
                <span className="text-[10px] font-black uppercase opacity-75">
                  Stat: {member.quirkyStat.label}
                </span>
                <div className="text-base font-black">
                  {member.quirkyStat.value}
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div
              className={`p-2 border-2 text-xs italic font-medium leading-tight mb-3 ${
                member.domain === 'tech' || member.domain === 'ops'
                  ? 'bg-black/30 border-white text-white'
                  : 'bg-white/70 border-black text-black'
              }`}
            >
              &ldquo;{member.quote}&rdquo;
            </div>

            {/* Card Action Footer */}
            <div
              className={`pt-2 border-t-2 border-dashed flex items-center justify-between text-[11px] font-mono ${
                member.domain === 'tech' || member.domain === 'ops'
                  ? 'border-white/50 text-white'
                  : 'border-black/50 text-black'
              }`}
            >
              <span className="font-bold opacity-75">RARITY: {member.rarity}</span>
              <button
                id={`btn-inspect-${member.id}`}
                type="button"
                onClick={() => onInspect && onInspect(member)}
                className="font-black uppercase underline flex items-center gap-1 cursor-pointer hover:opacity-80"
              >
                Inspect Pass &rarr;
              </button>
            </div>
          </div>
        ) : (
          /* CARD BACK - Lore, Passive Skill, Weakness, Signature Move */
          <div className="flex flex-col flex-1 bg-white text-black p-3.5 border-2 border-black -m-1">
            <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-black">
              <div className="flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-black" />
                <span className="font-mono text-xs font-black uppercase">
                  DOSSIER // #{member.id}
                </span>
              </div>
              <button
                type="button"
                onClick={handleFlip}
                className="text-xs font-mono font-black uppercase underline cursor-pointer"
              >
                Front &rarr;
              </button>
            </div>

            {/* Passive Skill */}
            <div className="mb-2">
              <div className="flex items-center gap-1 text-[11px] font-mono font-black text-emerald-800 uppercase mb-0.5">
                <Zap className="w-3 h-3 text-emerald-600" />
                Passive Perk
              </div>
              <p className="text-xs text-black leading-snug bg-emerald-50 p-1.5 border border-black font-medium">
                {member.passiveSkill}
              </p>
            </div>

            {/* Critical Weakness */}
            <div className="mb-2">
              <div className="flex items-center gap-1 text-[11px] font-mono font-black text-rose-800 uppercase mb-0.5">
                <ShieldAlert className="w-3 h-3 text-rose-600" />
                Vulnerability
              </div>
              <p className="text-xs text-black leading-snug bg-rose-50 p-1.5 border border-black font-medium">
                {member.weakness}
              </p>
            </div>

            {/* Signature Move */}
            <div className="mb-2">
              <div className="flex items-center gap-1 text-[11px] font-mono font-black text-blue-800 uppercase mb-0.5">
                <Award className="w-3 h-3 text-blue-600" />
                Signature Move
              </div>
              <p className="text-xs font-medium text-black leading-snug bg-blue-50 p-1.5 border border-black">
                {member.signatureMove}
              </p>
            </div>

            {/* Secret Club Lore */}
            <div className="mt-auto bg-[#FFD100] p-2 border-2 border-black text-black">
              <span className="font-mono text-[10px] font-black uppercase tracking-wider block mb-0.5">
                ★ DECLASSIFIED ARCHIVE LORE:
              </span>
              <p className="text-[11px] font-medium leading-tight">
                {member.lore}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
