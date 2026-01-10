import React, { useState } from 'react';
import { Smile, Stethoscope, Shield, ScanLine, Wrench, Sparkles, Scissors, Star, Baby, ShieldCheck, AlertCircle, ArrowRight, Phone, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { dentalServices, dentalCategories, teamMembers } from '../data/mock';

const iconMap = {
  Stethoscope,
  Shield,
  ScanLine,
  Wrench,
  Sparkles,
  Scissors,
  Star,
  Baby,
  ShieldCheck,
  AlertCircle
};

const DentalSection = ({ onBookClick }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [...new Set(dentalServices.map(s => s.category))];
  
  const filteredServices = activeCategory === 'all' 
    ? dentalServices 
    : dentalServices.filter(s => s.category === activeCategory);

  // Get dental doctor info
  const dentalDoctor = teamMembers.find(m => m.role.includes('Dental'));

  // Direct WhatsApp booking for dental (no home collection)
  const handleDentalBooking = () => {
    const message = `
🦷 *DENTAL APPOINTMENT REQUEST*
━━━━━━━━━━━━━━━━━━

Hi, I would like to book a dental appointment with Dr. Shaveta Verma.

Please call me to confirm the appointment.

Thank you!
    `.trim();
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918527969545?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="dental" className="py-20 bg-gradient-to-br from-rose-50/50 via-white to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Smile className="w-4 h-4" />
            Complete Dental Care
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Dental Solutions by Dr. Shaveta Verma
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Expert dental care with 15+ years of experience. From routine checkups to advanced implants - we've got your smile covered.
          </p>
        </div>

        {/* Doctor Highlight Card */}
        {dentalDoctor && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 mb-12 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={dentalDoctor.image}
                alt={dentalDoctor.name}
                className="w-32 h-32 rounded-2xl object-cover shadow-lg"
              />
              <div className="text-center md:text-left flex-1">
                <h3 className="text-xl font-bold text-gray-900">{dentalDoctor.name}</h3>
                <p className="text-rose-600 font-medium">{dentalDoctor.role}</p>
                <p className="text-gray-600 mt-2 text-sm">
                  Specializing in dental implants, cosmetic dentistry, and comprehensive oral care. 
                  Using the latest techniques including Pola teeth whitening and laser dentistry.
                </p>
                <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                  <Badge className="bg-rose-50 text-rose-700">Implantologist</Badge>
                  <Badge className="bg-orange-50 text-orange-700">Cosmetic Dentistry</Badge>
                  <Badge className="bg-teal-50 text-teal-700">Laser Dentistry</Badge>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <a href={`tel:${dentalDoctor.phone}`}>
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white rounded-xl flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>
                <Button 
                  onClick={onBookClick}
                  variant="outline" 
                  className="border-rose-600 text-rose-600 hover:bg-rose-50 rounded-xl"
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Button
            variant={activeCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveCategory('all')}
            size="sm"
            className={`rounded-full ${activeCategory === 'all' ? 'bg-rose-600 hover:bg-rose-700' : 'hover:bg-rose-50 hover:text-rose-700 hover:border-rose-300'}`}
          >
            All Services
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              size="sm"
              className={`rounded-full ${activeCategory === category ? 'bg-rose-600 hover:bg-rose-700' : 'hover:bg-rose-50 hover:text-rose-700 hover:border-rose-300'}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white p-5 rounded-xl border border-gray-100 hover:border-rose-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center group-hover:bg-rose-600 transition-colors">
                  <Smile className="w-5 h-5 text-rose-600 group-hover:text-white transition-colors" />
                </div>
                <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
                  {service.category}
                </Badge>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-rose-700 transition-colors">
                {service.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { title: "Pola Whitening", desc: "Professional teeth whitening system", icon: Sparkles },
            { title: "Digital X-Ray", desc: "Advanced diagnostic imaging", icon: ScanLine },
            { title: "Laser Dentistry", desc: "Minimally invasive procedures", icon: Star },
            { title: "Same Day Care", desc: "Emergency dental services", icon: AlertCircle }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            onClick={onBookClick}
            className="bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-700 hover:to-orange-600 text-white px-8 py-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Book Dental Appointment <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DentalSection;
