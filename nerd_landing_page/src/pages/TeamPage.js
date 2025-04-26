import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamHero from '../components/team/TeamHero';
import ValuesSection from '../components/team/ValuesSection';
import TeamGrid from '../components/team/TeamGrid';
import JoinTeamSection from '../components/team/JoinTeamSection';
import TeamMissionVideo from '../components/team/TeamMissionVideo'; // Importar el nuevo componente
import { teamData } from '../mock/data';

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0a1a0a] text-white">
      <Header />
      
      <main id="main-content">
        <TeamHero data={teamData.hero} />
        <ValuesSection values={teamData.values} />
        <TeamGrid members={teamData.members} />
        <TeamMissionVideo /> {/* Añadir el nuevo componente */}
        <JoinTeamSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default TeamPage;