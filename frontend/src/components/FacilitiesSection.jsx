import React from 'react';
import { Accessibility, ArrowUpDown } from 'lucide-react';

const facilities = [
  {
    id: 1,
    title: "Wheel Chair Accessible Entrance And Exit",
    description: "Our clinic provides easy wheelchair access at all entry and exit points for your convenience",
    icon: "Accessibility"
  },
  {
    id: 2,
    title: "Wheel Chair Accessible Elevator",
    description: "Spacious elevator with wheelchair accessibility for seamless movement between floors",
    icon: "ArrowUpDown"
  }
];

const FacilitiesSection = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Accessibility':
        return <Accessibility className="w-8 h-8" />;
      case 'ArrowUpDown':
        return <ArrowUpDown className="w-8 h-8" />;
      default:
        return <Accessibility className="w-8 h-8" />;
    }
  };

  return (
    <section id="facilities" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Facilities</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Accessible Healthcare For Everyone
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We are committed to providing barrier-free access to quality healthcare services
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              data-testid={`facility-card-${facility.id}`}
              className="bg-gradient-to-br from-teal-50 to-slate-50 rounded-2xl p-6 border border-teal-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(facility.icon)}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accessibility Badge */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full">
            <Accessibility className="w-5 h-5" />
            <span className="font-medium">Wheelchair Friendly Clinic</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
