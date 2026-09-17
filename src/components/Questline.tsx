import React, { useState } from 'react';
import { QuestItem, TeamDomain } from '../types';
import { DOMAINS } from '../data/domainConfig';
import { ScribbleUnderline, StampBadge } from './Doodles';
import { CheckCircle2, Lock, Flame, Trophy, ShieldCheck, ChevronDown, ChevronUp, Terminal, Gift } from 'lucide-react';

interface QuestlineProps {
  quests: QuestItem[];
}

export const Questline: React.FC<QuestlineProps> = ({ quests }) => {
  const [filter, setFilter] = useState<'all' | 'completed' | 'active_locked'>('all');
  const [expandedQuestId, setExpandedQuestId] = useState<string | null>('quest-04');

  // Calculate XP progression
  const totalCompletedXp = quests
    .filter((q) => q.status === 'COMPLETED')
    .reduce((sum, q) => sum + q.xp, 0);

  const totalQuestXp = quests.reduce((sum, q) => sum + q.xp, 0);
  const xpPercent = Math.round((totalCompletedXp / totalQuestXp) * 100);

  const filteredQuests = quests.filter((q) => {
    if (filter === 'completed') return q.status === 'COMPLETED';
    if (filter === 'active_locked') return q.status === 'IN_PROGRESS' || q.status === 'LOCKED';
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedQuestId(expandedQuestId === id ? null : id);
  };

  return (
    <section id="questline" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Bold Section Header matching theme */}
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-3xl sm:text-4xl font-black uppercase bg-black text-white px-4 py-1.5 tracking-tight">
          THE QUESTLINE
        </h2>
        <div className="flex-1 h-1 bg-black"></div>
      </div>

      {/* Header Info & Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b-4 border-black gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#FFD100] text-black px-2.5 py-1 text-xs font-mono font-black uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              CAMPAIGN MAP // 2025-2026
            </span>
            <span className="text-xs font-mono text-neutral-800 font-bold uppercase">
              EVENT PROGRESSION LOG
            </span>
          </div>

          <p className="mt-2 text-base text-[#1A1A1A] max-w-xl font-medium">
            Events aren’t a plain chronological calendar here — they’re high-stakes college raids. Past victories drop real campus loot; future missions stay locked until prerequisites are met.
          </p>
        </div>

        {/* Quest Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`btn-tactile px-4 py-2 text-xs font-mono font-black uppercase border-3 border-black cursor-pointer ${
              filter === 'all'
                ? 'bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-white text-black hover:bg-neutral-100'
            }`}
          >
            ALL STAGES ({quests.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('completed')}
            className={`btn-tactile px-4 py-2 text-xs font-mono font-black uppercase border-3 border-black cursor-pointer ${
              filter === 'completed'
                ? 'bg-[#06D6A0] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-white text-black hover:bg-emerald-50'
            }`}
          >
            CLEARED ({quests.filter((q) => q.status === 'COMPLETED').length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('active_locked')}
            className={`btn-tactile px-4 py-2 text-xs font-mono font-black uppercase border-3 border-black cursor-pointer ${
              filter === 'active_locked'
                ? 'bg-[#4361EE] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-white text-black hover:bg-blue-50'
            }`}
          >
            ACTIVE & LOCKED
          </button>
        </div>
      </div>

      {/* Guild Progression XP Bar */}
      <div className="mb-12 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span className="font-black text-base text-[#1A1A1A] uppercase tracking-tight">
              COLLECTIVE GUILD RANK: TIER VII (VETERAN CREW)
            </span>
          </div>
          <div className="font-mono text-xs font-black text-black">
            TOTAL GUILD XP:{' '}
            <span className="text-black font-black text-sm bg-[#FFD100] px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {totalCompletedXp.toLocaleString()} / {totalQuestXp.toLocaleString()} XP
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-5 bg-neutral-100 border-3 border-black p-0.5 relative">
          <div
            className="h-full bg-linear-to-r from-[#FF6B35] via-[#4361EE] to-[#06D6A0] transition-all duration-700 relative"
            style={{ width: `${xpPercent}%` }}
          />
        </div>

        <div className="mt-2.5 flex justify-between text-xs font-mono text-neutral-600 font-bold">
          <span>Current Campaign: Season 2025-26</span>
          <span className="font-black text-black">{xpPercent}% of Annual Campaign Quests Unlocked</span>
        </div>
      </div>

      {/* Quest Timeline Grid / Vertical Progression Line */}
      <div className="relative">
        {/* Central visual timeline ruler for desktop */}
        <div className="hidden lg:block absolute left-[80px] top-6 bottom-6 w-1 border-r-3 border-black pointer-events-none" />

        <div className="space-y-6 sm:space-y-8">
          {filteredQuests.map((quest, index) => {
            const isExpanded = expandedQuestId === quest.id;
            const isCompleted = quest.status === 'COMPLETED';
            const isInProgress = quest.status === 'IN_PROGRESS';
            const isLocked = quest.status === 'LOCKED';

            return (
              <div
                key={quest.id}
                id={`quest-${quest.id}`}
                className={`relative flex flex-col lg:flex-row items-start gap-4 lg:gap-8 transition-all duration-200 ${
                  isInProgress ? 'scale-[1.01]' : ''
                }`}
              >
                {/* Left Side: Quest Code & Stage Node Marker */}
                <div className="flex items-center lg:flex-col lg:items-center lg:w-[160px] shrink-0 gap-3">
                  <div
                    className={`w-12 h-12 border-3 border-black flex items-center justify-center font-mono font-black text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] shrink-0 z-10 ${
                      isCompleted
                        ? 'bg-[#06D6A0] text-black'
                        : isInProgress
                        ? 'bg-[#FFD100] text-black animate-bounce'
                        : 'bg-neutral-200 text-neutral-600'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : isInProgress ? (
                      <Flame className="w-6 h-6" />
                    ) : (
                      <Lock className="w-5 h-5" />
                    )}
                  </div>

                  <div className="flex flex-col lg:text-center">
                    <span className="font-mono text-xs font-black text-black">
                      {quest.code}
                    </span>
                    <span className="font-mono text-[11px] text-neutral-600 font-bold">
                      {quest.date}
                    </span>
                  </div>
                </div>

                {/* Right Side: Quest Card Content */}
                <div
                  className={`flex-1 w-full bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 overflow-hidden ${
                    isInProgress
                      ? 'shadow-[8px_8px_0px_0px_rgba(67,97,238,1)]'
                      : isLocked
                      ? 'bg-neutral-50/80 opacity-90'
                      : ''
                  }`}
                >
                  {/* Quest Card Header */}
                  <div
                    className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between border-b-3 border-black gap-3 ${
                      isCompleted
                        ? 'bg-[#06D6A0]/20'
                        : isInProgress
                        ? 'bg-[#FFD100]/30'
                        : 'bg-neutral-100'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      {/* Status Stamp */}
                      {isCompleted && (
                        <span className="font-mono text-xs font-black px-2.5 py-1 bg-[#06D6A0] text-black border-2 border-black flex items-center gap-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <CheckCircle2 className="w-3.5 h-3.5" /> QUEST CLEARED
                        </span>
                      )}
                      {isInProgress && (
                        <span className="font-mono text-xs font-black px-2.5 py-1 bg-[#FF6B35] text-white border-2 border-black animate-pulse flex items-center gap-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <Flame className="w-3.5 h-3.5" /> CURRENT ACTIVE RAID
                        </span>
                      )}
                      {isLocked && (
                        <span className="font-mono text-xs font-black px-2.5 py-1 bg-neutral-300 text-neutral-800 border-2 border-black flex items-center gap-1">
                          <Lock className="w-3.5 h-3.5" /> LOCKED OBJECTIVE
                        </span>
                      )}

                      <span className="text-xs font-mono font-black text-black bg-white px-2 py-0.5 border-2 border-black">
                        {quest.season}
                      </span>
                    </div>

                    {/* XP Bounty */}
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black text-black">XP REWARD:</span>
                      <span
                        className={`font-mono text-xs font-black px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                          isCompleted
                            ? 'bg-[#06D6A0] text-black'
                            : isInProgress
                            ? 'bg-[#FFD100] text-black'
                            : 'bg-neutral-200 text-neutral-800'
                        }`}
                      >
                        +{quest.xp.toLocaleString()} XP
                      </span>
                    </div>
                  </div>

                  {/* Quest Body */}
                  <div className="p-5 sm:p-6">
                    {/* Title with conditional strike-through if completed */}
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3
                        className={`text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1A1A1A] ${
                          isCompleted ? 'line-through decoration-[#06D6A0] decoration-4' : ''
                        }`}
                      >
                        {quest.title}
                      </h3>
                      <button
                        type="button"
                        onClick={() => toggleExpand(quest.id)}
                        className="p-1.5 hover:bg-neutral-100 border-2 border-black shrink-0 cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        title={isExpanded ? 'Collapse intel' : 'Expand intel'}
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-black" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-black" />
                        )}
                      </button>
                    </div>

                    <p className="text-sm text-neutral-700 font-medium leading-relaxed mb-4">
                      {quest.brief}
                    </p>

                    {/* In-progress live progression bar */}
                    {isInProgress && quest.progressPercent && (
                      <div className="mb-4 bg-[#FFD100]/20 p-3.5 border-3 border-black">
                        <div className="flex justify-between text-xs font-mono font-black mb-1.5">
                          <span className="text-black flex items-center gap-1">
                            <span className="w-2 h-2 bg-[#FF6B35] animate-ping inline-block" />
                            DEPLOYMENT READINESS:
                          </span>
                          <span className="text-black font-black">{quest.progressPercent}%</span>
                        </div>
                        <div className="w-full h-3.5 bg-white border-2 border-black overflow-hidden">
                          <div
                            className="h-full bg-[#FF6B35] transition-all duration-500"
                            style={{ width: `${quest.progressPercent}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Locked Unlock Condition */}
                    {isLocked && quest.unlockCondition && (
                      <div className="mb-4 bg-neutral-100 p-3.5 border-2 border-dashed border-black flex items-start gap-2">
                        <Lock className="w-4 h-4 text-neutral-700 mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs font-mono font-black text-black block">
                            PREREQUISITE TO UNLOCK:
                          </span>
                          <p className="text-xs text-neutral-700 font-medium">
                            {quest.unlockCondition}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Assigned Domain Loud Color Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-xs font-mono font-black text-black">
                        ASSIGNED TEAMS:
                      </span>
                      {quest.leadDomains.map((domainKey) => {
                        const d = DOMAINS[domainKey];
                        return (
                          <span
                            key={domainKey}
                            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-black uppercase border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                              domainKey === 'tech' || domainKey === 'ops' ? 'text-white' : 'text-black'
                            }`}
                            style={{ backgroundColor: d.hex }}
                          >
                            <span className="w-1.5 h-1.5 bg-current inline-block" />
                            {d.name.toUpperCase()}
                          </span>
                        );
                      })}
                    </div>

                    {/* Loot Drop Drawer */}
                    <div className="bg-[#FFD100]/20 p-3.5 border-3 border-black flex items-start gap-2.5">
                      <Gift className="w-4 h-4 text-[#FF6B35] mt-0.5 shrink-0" />
                      <div className="flex-1">
                        <span className="text-[11px] font-mono font-black uppercase tracking-wider text-black block">
                          LOOT REWARD / TROPHY DROP:
                        </span>
                        <p className="text-xs font-black text-[#1A1A1A]">
                          {quest.lootDrop}
                        </p>
                      </div>
                    </div>

                    {/* Expandable Crew Intel / Lore notes */}
                    {isExpanded && (
                      <div className="mt-4 pt-3 border-t-2 border-dashed border-black">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-black text-black mb-1">
                          <Terminal className="w-3.5 h-3.5 text-[#4361EE]" />
                          CREW COMMS & FIELD INCIDENT INTEL:
                        </div>
                        <p className="text-xs text-neutral-800 font-mono bg-neutral-50 p-3 border-2 border-black leading-relaxed font-bold">
                          &ldquo;{quest.crewIntel}&rdquo;
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
