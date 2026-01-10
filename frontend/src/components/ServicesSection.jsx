import React from 'react';
import { FlaskConical, HeartPulse, Smile, Syringe, Home, Pill, Stethoscope, Brain, ArrowRight } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  FlaskConical,
  HeartPulse,
  Smile,
  Syringe,
  Home,
  Pill,
  Stethoscope,
  Brain
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From diagnostic tests to dental care, we offer a complete range of healthcare services for your entire family
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-800 text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-4 flex items-center text-teal-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
