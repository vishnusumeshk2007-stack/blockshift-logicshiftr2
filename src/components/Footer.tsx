import React from 'react';
import { DOMAINS } from '../data/domainConfig';
import { ArrowUp, Terminal, Coffee, Sparkles } from 'lucide-react';

interface FooterProps {
  clubName: string;
}

export const Footer: React.FC<FooterProps> = ({ clubName }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-white border-t-4 border-black py-16 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b-4 border-black">
          {/* Brand and Mission */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 bg-[#FF6B35] text-black font-mono font-black text-sm flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                TC
              </span>
              <span className="font-black text-2xl uppercase tracking-tight text-white">
                {clubName}
              </span>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed font-medium max-w-md">
              A student committee designed like a crew, not a corporate committee. Built by students who refuse to let another college symposium look like a boring spreadsheet.
            </p>

            {/* Sub-team accent color swatches */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[11px] text-neutral-400 font-black uppercase">SUB-TEAMS:</span>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 text-[10px] font-black bg-[#FF6B35] text-black border border-black uppercase">
                  DESIGN
                </span>
                <span className="px-2.5 py-1 text-[10px] font-black bg-[#4361EE] text-white border border-white uppercase">
                  TECH
                </span>
                <span className="px-2.5 py-1 text-[10px] font-black bg-[#06D6A0] text-black border border-black uppercase">
                  EVENTS
                </span>
                <span className="px-2.5 py-1 text-[10px] font-black bg-[#8B5CF6] text-white border border-white uppercase">
                  OPS+MEDIA
                </span>
              </div>
            </div>
          </div>

          {/* Campus Location and Lore */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="font-mono font-black text-sm text-[#FFD100] uppercase tracking-wider mb-2">
              HQ COORDINATES
            </h4>
            <p className="text-neutral-200">Room 302, Student Activity Centre</p>
            <p className="text-neutral-400">Underneath the Old Science Block</p>
            <p className="text-neutral-400">Office hours: When the lab door is unlatched</p>
            <div className="pt-2">
              <span className="inline-block bg-black text-[#06D6A0] text-[10px] font-black px-2.5 py-1 border border-neutral-700">
                STATUS: DISCORD VOICE ACTIVE (2 AM)
              </span>
            </div>
          </div>

          {/* Crew Metrics / Field Stats */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="font-mono font-black text-sm text-[#FFD100] uppercase tracking-wider mb-2">
              LORE METRICS
            </h4>
            <div className="space-y-2 text-neutral-300 text-[11px]">
              <div className="flex justify-between border-b border-neutral-700 pb-1">
                <span>Mic Feedback Avoided:</span>
                <span className="text-[#06D6A0] font-black">99.4%</span>
              </div>
              <div className="flex justify-between border-b border-neutral-700 pb-1">
                <span>Lost HDMI Adapters:</span>
                <span className="text-rose-400 font-black">11 recovered</span>
              </div>
              <div className="flex justify-between border-b border-neutral-700 pb-1">
                <span>Total Vinyl Stickers Placed:</span>
                <span className="text-[#FF6B35] font-black">2,450+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4 font-bold">
          <div className="flex items-center gap-2">
            <span>© 2026 {clubName}.</span>
            <span>All rights reserved to the midnight shift.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="btn-tactile px-4 py-2.5 bg-[#FFD100] text-black font-mono font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] flex items-center gap-1.5 cursor-pointer hover:bg-yellow-300"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
