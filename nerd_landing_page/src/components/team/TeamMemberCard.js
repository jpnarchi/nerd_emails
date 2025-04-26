import React from 'react';

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl border border-[#95BF92] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#95BF92] to-[#7FA37C]"></div>
      <div className="w-48 h-48 overflow-hidden mb-6 mx-auto rounded-lg">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-[#95BF92] mb-4">{member.position}</p>
        <p className="text-gray-300 text-sm">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;