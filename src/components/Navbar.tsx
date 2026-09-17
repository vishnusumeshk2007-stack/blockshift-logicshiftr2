import React, { useState } from 'react';
import { DOMAINS } from '../data/domainConfig';
import { TeamDomain } from '../types';
import { Menu, X, Sparkles, Terminal, Layers, Compass, UserPlus } from 'lucide-react';

interface NavbarProps {
  clubName: string;
  onOpenRecruitModal: () => void;
  onFilterDomain: (domain: TeamDomain | 'all') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  clubName,
  onOpenRecruitModal,
  onFilterDomain,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FDFCF8]/95 backdrop-blur-md border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo / Club Header Badge */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2.5 group"
          >
            <span className="w-9 h-9 bg-black text-white font-mono font-black text-base flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:bg-[#FF6B35] transition-colors">
              TC
            </span>
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tight text-[#1A1A1A] leading-none uppercase">
                {clubName}
              </span>
              <span className="font-mono text-[10px] text-neutral-600 tracking-wider font-bold uppercase mt-0.5">
                COLLEGE COMMITTEE & CREW
              </span>
            </div>
          </a>

          {/* Sub-team quick color indicator dots */}
          <div className="hidden md:flex items-center gap-2 ml-4 pl-4 border-l-3 border-black">
            <button
              type="button"
              onClick={() => onFilterDomain('design')}
              title="Design: Orange"
              className="w-3.5 h-3.5 bg-[#FF6B35] border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:scale-125 transition-transform cursor-pointer"
            />
            <button
              type="button"
              onClick={() => onFilterDomain('tech')}
              title="Tech: Blue"
              className="w-3.5 h-3.5 bg-[#4361EE] border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:scale-125 transition-transform cursor-pointer"
            />
            <button
              type="button"
              onClick={() => onFilterDomain('events')}
              title="Events: Green"
              className="w-3.5 h-3.5 bg-[#06D6A0] border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:scale-125 transition-transform cursor-pointer"
            />
            <button
              type="button"
              onClick={() => onFilterDomain('ops')}
              title="Ops: Purple"
              className="w-3.5 h-3.5 bg-[#8B5CF6] border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:scale-125 transition-transform cursor-pointer"
            />
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs font-black uppercase">
          <a
            href="#crew-roster"
            className="text-neutral-900 hover:text-[#FF6B35] transition-colors flex items-center gap-1.5"
          >
            <Layers className="w-4 h-4" />
            <span>TRADING CARDS</span>
          </a>

          <a
            href="#questline"
            className="text-neutral-900 hover:text-[#4361EE] transition-colors flex items-center gap-1.5"
          >
            <Terminal className="w-4 h-4" />
            <span>QUESTLINE</span>
          </a>

          <a
            href="#domains"
            className="text-neutral-900 hover:text-[#06D6A0] transition-colors flex items-center gap-1.5"
          >
            <Compass className="w-4 h-4" />
            <span>SUB-TEAMS</span>
          </a>

          <button
            type="button"
            onClick={onOpenRecruitModal}
            className="btn-tactile px-4 py-2 bg-[#FFD100] hover:bg-yellow-300 text-black border-3 border-black font-mono font-black text-xs uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 cursor-pointer ml-2"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>MINT CARD</span>
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenRecruitModal}
            className="px-3 py-1.5 bg-[#FFD100] text-black border-2 border-black font-mono font-black text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3" /> Mint
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border-3 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b-4 border-black p-4 space-y-3 font-mono text-sm font-black uppercase">
          <a
            href="#crew-roster"
            onClick={() => setMobileMenuOpen(false)}
            className="block p-2.5 border-2 border-black hover:bg-neutral-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            🃏 TRADING CARDS ROSTER
          </a>
          <a
            href="#questline"
            onClick={() => setMobileMenuOpen(false)}
            className="block p-2.5 border-2 border-black hover:bg-neutral-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            ⚔️ CAMPAIGN QUESTLINE
          </a>
          <a
            href="#domains"
            onClick={() => setMobileMenuOpen(false)}
            className="block p-2.5 border-2 border-black hover:bg-neutral-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            🎨 SUB-TEAM DOMAINS
          </a>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRecruitModal();
            }}
            className="w-full py-3 bg-[#FFD100] text-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-mono font-black text-xs uppercase cursor-pointer"
          >
            ✨ JOIN & MINT YOUR TRADING CARD
          </button>
        </div>
      )}
    </header>
  );
};
