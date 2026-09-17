import React, { useState } from 'react';
import { MemberCard } from '../types';
import { DOMAINS } from '../data/domainConfig';
import { MemberAvatar } from './MemberAvatar';
import { WashiTapeStrip, HandDrawnStar, StampBadge } from './Doodles';
import { X, Sparkles, Shield, Zap, Award, BookOpen, Share2, Check } from 'lucide-react';

interface CardDetailModalProps {
  member: MemberCard | null;
  onClose: () => void;
}

export const CardDetailModal: React.FC<CardDetailModalProps> = ({ member, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!member) return null;

  const domain = DOMAINS[member.domain];

  const handleShare = () => {
    navigator.clipboard.writeText(
      `Check out ${member.name} ("${member.callsign}") — ${member.role} from The Collective: ${member.quirkyStat.label}: ${member.quirkyStat.value}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with Domain Color */}
        <div
          className={`px-5 py-3 border-b-4 border-black flex items-center justify-between ${
            member.domain === 'tech' || member.domain === 'ops' ? 'text-white' : 'text-black'
          }`}
          style={{ backgroundColor: domain.hex }}
        >
          <div className="flex items-center gap-2.5">
            <span className="bg-black text-white px-2.5 py-0.5 font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {domain.shortCode}
            </span>
            <span className="font-black text-sm uppercase tracking-wider">
              {domain.name} // OPERATOR DOSSIER
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 bg-black text-white hover:bg-neutral-800 border-2 border-black cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left Card Visual (Cols 1-5) */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[240px]">
                <WashiTapeStrip width="w-24" rotation={-2} className="absolute -top-3 left-1/2 -translate-x-1/2 z-10" />
                <div className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-white">
                  <div className="aspect-[4/3] w-full border-b-2 border-black">
                    <MemberAvatar member={member} className="w-full h-full" />
                  </div>
                  <div className="p-3">
                    <div className="flex justify-between items-center text-xs font-mono mb-1 font-bold">
                      <span className="text-neutral-600 font-bold">ID: #{member.id}</span>
                      <span className="font-black bg-[#FFD100] px-1.5 py-0.5 border-2 border-black text-[10px] uppercase shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                        {member.rarity}
                      </span>
                    </div>
                    <h4 className="font-black text-lg text-black uppercase tracking-tight">{member.name}</h4>
                    <p className="font-mono text-xs font-black uppercase" style={{ color: domain.hex }}>
                      &ldquo;{member.callsign}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleShare}
                className="btn-tactile mt-4 w-full max-w-[240px] py-2.5 bg-neutral-100 hover:bg-neutral-200 text-black border-3 border-black font-mono text-xs font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>COPIED STATS!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>COPY CREW CARD</span>
                  </>
                )}
              </button>
            </div>

            {/* Right Details (Cols 6-12) */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-xs font-bold bg-neutral-200 text-neutral-900 px-2.5 py-0.5 border border-black uppercase">
                    {member.academicYear}
                  </span>
                  <span
                    className={`font-mono text-xs font-black px-2.5 py-0.5 border-2 border-black uppercase ${
                      member.domain === 'tech' || member.domain === 'ops' ? 'text-white' : 'text-black'
                    }`}
                    style={{ backgroundColor: domain.hex }}
                  >
                    {member.role}
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                  {member.name}
                </h3>
              </div>

              {/* Quirky Stat Breakdown */}
              <div className="p-3 bg-neutral-50 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between text-xs font-mono font-black mb-1">
                  <span className="text-neutral-700 uppercase">{member.quirkyStat.label}:</span>
                  <span className="text-black bg-[#FFD100] px-2 py-0.5 border-2 border-black font-black uppercase shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    {member.quirkyStat.value}
                  </span>
                </div>
                {member.quirkyStat.meter && (
                  <div className="w-full h-3 bg-neutral-200 border-2 border-black overflow-hidden mt-2">
                    <div
                      className="h-full border-r-2 border-black"
                      style={{
                        width: `${member.quirkyStat.meter}%`,
                        backgroundColor: domain.hex,
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Field Quote */}
              <div className="p-3 bg-amber-50 border-2 border-black text-xs font-bold italic text-amber-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                &ldquo;{member.quote}&rdquo;
              </div>

              {/* Perks & Signature Moves */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-emerald-50 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-mono font-black text-emerald-900 flex items-center gap-1 mb-0.5 uppercase">
                    <Zap className="w-3.5 h-3.5 text-emerald-700" />
                    PASSIVE ABILITY
                  </span>
                  <p className="text-neutral-900 font-medium">{member.passiveSkill}</p>
                </div>

                <div className="p-2.5 bg-rose-50 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-mono font-black text-rose-900 flex items-center gap-1 mb-0.5 uppercase">
                    <Shield className="w-3.5 h-3.5 text-rose-700" />
                    KNOWN EXPLOIT / WEAKNESS
                  </span>
                  <p className="text-neutral-900 font-medium">{member.weakness}</p>
                </div>

                <div className="p-2.5 bg-indigo-50 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-mono font-black text-indigo-900 flex items-center gap-1 mb-0.5 uppercase">
                    <Award className="w-3.5 h-3.5 text-indigo-700" />
                    SIGNATURE MOVE
                  </span>
                  <p className="text-neutral-900 font-medium">{member.signatureMove}</p>
                </div>
              </div>

              {/* Declassified Archive Lore */}
              <div className="p-3 bg-black text-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-mono text-xs">
                <span className="text-[#FFD100] font-black uppercase block mb-1 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> DECLASSIFIED CAMPUS ARCHIVE LORE:
                </span>
                <p className="text-neutral-200 leading-relaxed font-sans text-xs">
                  {member.lore}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-neutral-100 border-t-4 border-black flex justify-between items-center text-xs font-mono">
          <span className="text-neutral-600 font-bold uppercase">OPERATOR STATUS: ACTIVE ON ROSTER</span>
          <button
            type="button"
            onClick={onClose}
            className="btn-tactile px-5 py-2 bg-black text-white font-black uppercase border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
