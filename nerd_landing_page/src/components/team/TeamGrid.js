import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const TeamGrid = ({ members }) => {
  return (
    <section className="bg-gradient-to-b from-black to-[#0a1a0a] text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Conoce al equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Reducido el gap */}
          {members.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;