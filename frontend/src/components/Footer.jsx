import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';
import { clinicInfo } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Health Packages', href: '#packages' },
    { name: 'Lab Tests', href: '#tests' },
    { name: 'Dental Care', href: '#dental' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const services = [
    'Blood Tests',
    'ECG',
    'Dental Care',
    'Vaccinations',
    'Home Collection',
    'Health Checkups',
    'Teeth Whitening',
    'Dental Implants'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">{clinicInfo.name}</h3>
                <p className="text-xs text-gray-400">Est. {clinicInfo.established}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {clinicInfo.tagline}. Providing comprehensive healthcare services to families in Delhi for over 45 years.
            </p>
            <p className="text-teal-400 text-sm italic">
              {clinicInfo.previousName}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">{clinicInfo.address}</span>
              </li>
              <li>
                <a href={`tel:${clinicInfo.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors">
                  <Phone className="w-5 h-5 text-teal-400" />
                  <span className="text-sm">{clinicInfo.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-teal-400" />
                <span className="text-gray-400 text-sm">{clinicInfo.workingHours}</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {clinicInfo.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-teal-600 hover:bg-teal-700 rounded-full flex items-center justify-center transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
