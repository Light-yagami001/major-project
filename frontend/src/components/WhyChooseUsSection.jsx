import React from 'react';
import { Shield, Clock, IndianRupee, Award, Home, Users } from 'lucide-react';
import { whyChooseUs } from '../data/mock';

const iconMap = {
  '45+ Years of Trust': Award,
  'Accurate Results': Shield,
  'Affordable Pricing': IndianRupee,
  'Same Day Reports': Clock,
  'Home Collection': Home,
  'Expert Team': Users
};

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-teal-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-600/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-800/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-teal-200 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Your Health, Our Priority
          </h2>
          <p className="text-teal-100 mt-4 max-w-2xl mx-auto">
            Experience healthcare the way it should be - trusted, accurate, and affordable
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item) => {
            const IconComponent = iconMap[item.title] || Shield;
            return (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-teal-100 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
