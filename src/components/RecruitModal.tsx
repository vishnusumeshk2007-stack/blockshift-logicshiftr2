import React, { useState } from 'react';
import { MemberCard, TeamDomain, CardRarity } from '../types';
import { DOMAINS } from '../data/domainConfig';
import { MemberAvatar } from './MemberAvatar';
import { WashiTapeStrip } from './Doodles';
import { X, Sparkles, Check, UserCheck } from 'lucide-react';

interface RecruitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMember: (newMember: MemberCard) => void;
}

export const RecruitModal: React.FC<RecruitModalProps> = ({
  isOpen,
  onClose,
  onAddMember,
}) => {
  const [name, setName] = useState('');
  const [callsign, setCallsign] = useState('');
  const [domain, setDomain] = useState<TeamDomain>('design');
  const [role, setRole] = useState('');
  const [academicYear, setAcademicYear] = useState('Sophomore ’27');
  const [statLabel, setStatLabel] = useState('Cold Brew Intake');
  const [statValue, setStatValue] = useState('3.5 L / day');
  const [quote, setQuote] = useState('If everything seems under control, we are not going fast enough.');
  const [passiveSkill, setPassiveSkill] = useState('Can untangle an 8-cable knot in under 45 seconds');
  const [signatureMove, setSignatureMove] = useState('Summoning hot samosas during emergency budget talks');
  const [hairStyle, setHairStyle] = useState<'beanie' | 'messy' | 'curls' | 'headphones' | 'cap' | 'bob' | 'shades' | 'bandana'>('headphones');
  const [accessory, setAccessory] = useState<'coffee' | 'badge' | 'stickers' | 'mic' | 'dongle' | 'camera'>('stickers');

  if (!isOpen) return null;

  // Mock preview card object
  const previewMember: MemberCard = {
    id: `crew-${Date.now().toString().slice(-4)}`,
    name: name.trim() || 'New Operator',
    callsign: callsign.trim() || 'RookieOne',
    role: role.trim() || 'Crew Apprentice',
    domain,
    academicYear,
    quirkyStat: {
      label: statLabel || 'Campus Clout',
      value: statValue || '100%',
      meter: 85,
    },
    quote: quote || 'Ready to deploy.',
    passiveSkill,
    weakness: '8 AM Monday Lectures',
    signatureMove,
    rarity: 'RARE',
    rotationDeg: -1.5,
    avatarConfig: {
      hairStyle,
      accessory,
      bgPattern: 'stripes',
    },
    lore: 'Newly recruited onto the Collective roster. Has promised never to lose the campus projector dongle.',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddMember(previewMember);
    onClose();
  };

  const selectedDomain = DOMAINS[domain];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-3.5 bg-black text-white border-b-4 border-black flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="bg-[#FFD100] text-black px-2.5 py-0.5 font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
              OPERATOR FORGE
            </span>
            <h3 className="font-black text-lg tracking-tight uppercase">
              MINT YOUR TRADING CARD
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 text-white hover:text-neutral-300 border-2 border-white/40 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form + Live Preview */}
        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Fields (Cols 1-7) */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-black text-neutral-800 uppercase mb-1">
                    OPERATOR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rohan Varma"
                    className="w-full px-3 py-2 border-3 border-black font-mono text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-black text-neutral-800 uppercase mb-1">
                    CALLSIGN / MONIKER
                  </label>
                  <input
                    type="text"
                    value={callsign}
                    onChange={(e) => setCallsign(e.target.value)}
                    placeholder="e.g. LaserFocus"
                    className="w-full px-3 py-2 border-3 border-black font-mono text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Sub-team Domain Selector (Loud colors!) */}
              <div>
                <label className="block text-xs font-mono font-black text-neutral-800 uppercase mb-1.5">
                  SELECT SQUAD DOMAIN (LOUD ACCENT)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['design', 'tech', 'events', 'ops'] as TeamDomain[]).map((dKey) => {
                    const d = DOMAINS[dKey];
                    const isSelected = domain === dKey;
                    return (
                      <button
                        key={dKey}
                        type="button"
                        onClick={() => setDomain(dKey)}
                        className={`p-2 border-3 border-black font-mono text-xs font-black uppercase text-left transition-all cursor-pointer ${
                          isSelected
                            ? `${dKey === 'tech' || dKey === 'ops' ? 'text-white' : 'text-black'} shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] scale-[1.03]`
                            : 'bg-white text-black hover:bg-neutral-50 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'
                        }`}
                        style={{
                          backgroundColor: isSelected ? d.hex : '#FFFFFF',
                        }}
                      >
                        <div className="text-[10px] opacity-80">{d.shortCode}</div>
                        <div className="truncate">{d.name}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-black text-neutral-800 uppercase mb-1">
                    ROLE / DESIGNATION
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Stage Hype Specialist"
                    className="w-full px-3 py-2 border-3 border-black font-mono text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-black text-neutral-800 uppercase mb-1">
                    ACADEMIC MAJOR / YEAR
                  </label>
                  <input
                    type="text"
                    value={academicYear}
                    onChange={(e) => setAcademicYear(e.target.value)}
                    placeholder="e.g. Design ’27"
                    className="w-full px-3 py-2 border-3 border-black font-mono text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Quirky Stat Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-neutral-50 p-3 border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div>
                  <label className="block text-[11px] font-mono font-black text-neutral-700 uppercase mb-1">
                    QUIRKY STAT LABEL
                  </label>
                  <input
                    type="text"
                    value={statLabel}
                    onChange={(e) => setStatLabel(e.target.value)}
                    placeholder="e.g. Samosas Eaten at 2 AM"
                    className="w-full px-2.5 py-1.5 border-2 border-black font-mono text-xs bg-white focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-black text-neutral-700 uppercase mb-1">
                    STAT VALUE
                  </label>
                  <input
                    type="text"
                    value={statValue}
                    onChange={(e) => setStatValue(e.target.value)}
                    placeholder="e.g. 42 samosas"
                    className="w-full px-2.5 py-1.5 border-2 border-black font-mono text-xs bg-white focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Quote */}
              <div>
                <label className="block text-xs font-mono font-black text-neutral-800 uppercase mb-1">
                  INSIDE CREW QUOTE
                </label>
                <input
                  type="text"
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  placeholder="e.g. Who touched the master fader?"
                  className="w-full px-3 py-2 border-3 border-black font-mono text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-hidden"
                />
              </div>

              {/* Avatar Style Pickers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-black text-neutral-800 uppercase mb-1">
                    GEAR / HAIRSTYLE
                  </label>
                  <select
                    value={hairStyle}
                    onChange={(e) => setHairStyle(e.target.value as any)}
                    className="w-full px-3 py-2 border-3 border-black font-mono text-xs bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <option value="headphones">Studio Headphones</option>
                    <option value="beanie">Streetwear Beanie</option>
                    <option value="cap">Backwards Baseball Cap</option>
                    <option value="curls">Textured Afro Curls</option>
                    <option value="shades">Dark Festival Shades</option>
                    <option value="bandana">Crew Bandana</option>
                    <option value="bob">Messy Bob</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-black text-neutral-800 uppercase mb-1">
                    CREW ACCESSORY
                  </label>
                  <select
                    value={accessory}
                    onChange={(e) => setAccessory(e.target.value as any)}
                    className="w-full px-3 py-2 border-3 border-black font-mono text-xs bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <option value="stickers">Vinyl Stickers (Design)</option>
                    <option value="dongle">Type-C Dongle (Tech)</option>
                    <option value="mic">Stage Dynamic Mic (Events)</option>
                    <option value="coffee">Cold Brew Coffee</option>
                    <option value="camera">Fisheye Camera (Media)</option>
                    <option value="badge">All-Access Lanyard Pass</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="btn-tactile w-full py-3.5 bg-[#FFD100] hover:bg-yellow-300 text-black border-3 border-black font-mono font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>MINT TRADING CARD & ADD TO ROSTER</span>
                </button>
              </div>
            </form>

            {/* Live Card Preview (Cols 8-12) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="font-mono text-xs font-black text-black mb-2 uppercase flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#06D6A0] border border-black animate-pulse" />
                LIVE CARD PRINT PREVIEW
              </div>

              <div className="relative w-full max-w-[280px]">
                <WashiTapeStrip width="w-28" rotation={-2} className="absolute -top-3 left-1/2 -translate-x-1/2 z-20" />
                
                <div className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-white">
                  {/* Color Header */}
                  <div
                    className={`px-3 py-2 flex items-center justify-between border-b-2 border-black ${
                      selectedDomain.id === 'tech' || selectedDomain.id === 'ops' ? 'text-white' : 'text-black'
                    }`}
                    style={{ backgroundColor: selectedDomain.hex }}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-xs font-black bg-black text-white px-1.5 py-0.5 border border-black uppercase">
                        {selectedDomain.shortCode}
                      </span>
                      <span className="font-black text-xs uppercase">
                        {selectedDomain.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-black bg-white text-black px-1.5 border border-black uppercase">
                      ★ RARE
                    </span>
                  </div>

                  <div className="p-3 bg-white">
                    <div className="aspect-[4/3] w-full border-2 border-black overflow-hidden mb-2">
                      <MemberAvatar member={previewMember} className="w-full h-full" />
                    </div>

                    <h4 className="font-black text-lg text-black leading-tight uppercase tracking-tight">
                      {previewMember.name}
                    </h4>
                    <p className="font-mono text-xs font-black uppercase" style={{ color: selectedDomain.hex }}>
                      &ldquo;{previewMember.callsign}&rdquo;
                    </p>

                    <div className="my-2 bg-neutral-100 px-2 py-1 text-xs font-mono font-black border-2 border-black uppercase">
                      {previewMember.role}
                    </div>

                    <div className="bg-white p-2 border-2 border-black text-xs font-mono mb-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex justify-between mb-1 font-bold">
                        <span className="text-neutral-700 uppercase">{previewMember.quirkyStat.label}:</span>
                        <span className="font-black text-black uppercase">{previewMember.quirkyStat.value}</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-200 border border-black">
                        <div className="h-full" style={{ width: '85%', backgroundColor: selectedDomain.hex }} />
                      </div>
                    </div>

                    <div className="text-xs italic font-bold text-amber-950 bg-amber-50 p-2 border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                      &ldquo;{previewMember.quote}&rdquo;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
