import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { teamMembers } from '../data/mock';

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-slate-50 to-teal-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Experienced healthcare professionals dedicated to providing you with the best care
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-teal-600 text-white text-xs px-3 py-1 rounded-full">
                    {member.experience}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-teal-600 text-sm font-medium mt-1">{member.role}</p>
                
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-2 mt-4 text-gray-600 hover:text-teal-600 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {member.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
