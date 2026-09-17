import React, { useState } from 'react';
import { DOMAINS } from '../data/domainConfig';
import { TeamDomain } from '../types';
import { ScribbleUnderline, StampBadge } from './Doodles';
import { Palette, Cpu, Radio, Shield, Sparkles, ArrowRight } from 'lucide-react';

interface SubTeamDomainsProps {
  onSelectDomainFilter?: (domain: TeamDomain) => void;
}

export const SubTeamDomains: React.FC<SubTeamDomainsProps> = ({ onSelectDomainFilter }) => {
  const [activeTab, setActiveTab] = useState<TeamDomain>('design');

  const domainList = Object.values(DOMAINS);
  const activeDomain = DOMAINS[activeTab];

  const getIcon = (id: TeamDomain) => {
    switch (id) {
      case 'design':
        return <Palette className="w-5 h-5" />;
      case 'tech':
        return <Cpu className="w-5 h-5" />;
      case 'events':
        return <Radio className="w-5 h-5" />;
      case 'ops':
        return <Shield className="w-5 h-5" />;
    }
  };

  return (
    <section id="domains" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header matching theme */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-3xl sm:text-4xl font-black uppercase bg-black text-white px-4 py-1.5 tracking-tight">
          THE SQUADS
        </h2>
        <div className="flex-1 h-1 bg-black"></div>
      </div>

      {/* Header Info */}
      <div className="mb-10 pb-6 border-b-4 border-black">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-[#FFD100] text-black px-2.5 py-1 text-xs font-mono font-black uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            DIVISION PROTOCOLS
          </span>
          <span className="text-xs font-mono text-neutral-800 font-bold uppercase">
            COLOR-CODED DOMAINS
          </span>
        </div>

        <p className="mt-2 text-base text-[#1A1A1A] max-w-xl font-medium">
          Color-coded for instant triage in the field. When someone screams for an HDMI adapter across a noisy auditorium, you know which color jacket to chase down.
        </p>
      </div>

      {/* Grid of 4 Loud Domain Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {domainList.map((d) => {
          const isSelected = activeTab === d.id;

          return (
            <div
              key={d.id}
              onClick={() => setActiveTab(d.id)}
              className={`p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-white ring-4 ring-black scale-[1.02]'
                  : 'bg-white hover:bg-neutral-50 hover:-translate-y-1'
              }`}
            >
              <div>
                {/* Domain Header Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 text-xs font-mono font-black uppercase border-2 border-black flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                      d.id === 'tech' || d.id === 'ops' ? 'text-white' : 'text-black'
                    }`}
                    style={{ backgroundColor: d.hex }}
                  >
                    {getIcon(d.id)}
                    {d.shortCode}
                  </span>
                  <span className="font-mono text-xs font-black text-black">
                    SQUAD-0{domainList.indexOf(d) + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A] mb-1">
                  {d.name}
                </h3>
                <p className="text-xs font-mono text-neutral-600 mb-4 font-bold italic">
                  &ldquo;{d.tagline}&rdquo;
                </p>

                {/* Loud Color Sample Swatch */}
                <div
                  className="h-3.5 w-full border-2 border-black mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  style={{ backgroundColor: d.hex }}
                />

                <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                  {d.manifesto}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-black flex items-center justify-between">
                <span className="text-[11px] font-mono font-black text-black">
                  MASCOT: {d.mascot}
                </span>
                <span
                  className="text-xs font-mono font-black uppercase hover:underline flex items-center gap-1"
                  style={{ color: d.hex }}
                >
                  Focus &rarr;
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Domain Interactive Deep-Dive Banner */}
      <div
        className="p-6 sm:p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-colors duration-300 bg-white"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`px-3 py-1 text-xs font-mono font-black uppercase border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                  activeDomain.id === 'tech' || activeDomain.id === 'ops' ? 'text-white' : 'text-black'
                }`}
                style={{ backgroundColor: activeDomain.hex }}
              >
                SELECTED SQUAD // {activeDomain.shortCode}
              </span>
              <span className="text-xs font-mono font-bold text-neutral-700">
                HEX: {activeDomain.hex}
              </span>
            </div>

            <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1A1A1A] mb-2">
              {activeDomain.name}: The Rules of Engagement
            </h4>
            <p className="text-sm text-neutral-800 font-medium leading-relaxed">
              {activeDomain.manifesto}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="#crew-roster"
              onClick={() => onSelectDomainFilter && onSelectDomainFilter(activeDomain.id)}
              className={`btn-tactile px-6 py-3.5 text-xs font-mono font-black uppercase border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 cursor-pointer ${
                activeDomain.id === 'tech' || activeDomain.id === 'ops' ? 'text-white' : 'text-black'
              }`}
              style={{ backgroundColor: activeDomain.hex }}
            >
              <span>FILTER ROSTER BY {activeDomain.shortCode}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
