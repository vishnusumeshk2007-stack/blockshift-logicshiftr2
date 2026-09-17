/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CREW_MEMBERS } from './data/crewData';
import { QUESTS } from './data/questData';
import { MemberCard, QuestItem, TeamDomain } from './types';
import { Navbar } from './components/Navbar';
import { HeroManifesto } from './components/HeroManifesto';
import { TradingCardGrid } from './components/TradingCardGrid';
import { Questline } from './components/Questline';
import { SubTeamDomains } from './components/SubTeamDomains';
import { CardDetailModal } from './components/CardDetailModal';
import { RecruitModal } from './components/RecruitModal';
import { Footer } from './components/Footer';

export default function App() {
  const [clubName, setClubName] = useState('THE COLLECTIVE');
  const [members, setMembers] = useState<MemberCard[]>(CREW_MEMBERS);
  const [quests] = useState<QuestItem[]>(QUESTS);
  const [inspectedMember, setInspectedMember] = useState<MemberCard | null>(null);
  const [isRecruitOpen, setIsRecruitOpen] = useState(false);

  // Spotlit featured member in the hero
  const featuredMember = members[1] || members[0]; // Maya "VectorQueen" Lin

  const handleAddMember = (newMember: MemberCard) => {
    setMembers((prev) => [newMember, ...prev]);
    // Scroll to the new card
    setTimeout(() => {
      const el = document.getElementById(`trading-card-${newMember.id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 200);
  };

  const handleQuickFilter = (domain: TeamDomain | 'all') => {
    const el = document.getElementById('crew-roster');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    // Trigger filter button in grid
    const btn = document.getElementById(`filter-domain-${domain}`);
    if (btn) {
      btn.click();
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1A1A1A] bg-graph-pattern selection:bg-[#FFD100] selection:text-black flex flex-col font-sans">
      {/* Sticky Tactical Navbar */}
      <Navbar
        clubName={clubName}
        onOpenRecruitModal={() => setIsRecruitOpen(true)}
        onFilterDomain={handleQuickFilter}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Anti-Slop Poster Hero */}
        <HeroManifesto
          featuredMember={featuredMember}
          clubName={clubName}
          onUpdateClubName={setClubName}
          onOpenRecruit={() => setIsRecruitOpen(true)}
          totalCrewCount={members.length}
          totalCompletedQuests={quests.filter((q) => q.status === 'COMPLETED').length}
        />

        {/* Member Trading Card Grid */}
        <TradingCardGrid
          members={members}
          onOpenRecruitModal={() => setIsRecruitOpen(true)}
          onInspectMember={(m) => setInspectedMember(m)}
        />

        {/* Event Timeline / Questline */}
        <Questline quests={quests} />

        {/* Sub-Team Domains Color Breakdown */}
        <SubTeamDomains
          onSelectDomainFilter={(domain) => handleQuickFilter(domain)}
        />
      </main>

      {/* College Club Footer */}
      <Footer clubName={clubName} />

      {/* Inspect Card Modal */}
      <CardDetailModal
        member={inspectedMember}
        onClose={() => setInspectedMember(null)}
      />

      {/* Mint Your Trading Card Recruit Modal */}
      <RecruitModal
        isOpen={isRecruitOpen}
        onClose={() => setIsRecruitOpen(false)}
        onAddMember={handleAddMember}
      />
    </div>
  );
}
