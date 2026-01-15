import React, { useState } from 'react';
import { Phone, Menu, X, Clock, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { clinicInfo } from '../data/mock';

const Header = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Health Packages', href: '#packages' },
    { name: 'Tests', href: '#tests' },
    { name: 'Dental', href: '#dental' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-teal-700 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {clinicInfo.workingHours}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {clinicInfo.address}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${clinicInfo.phone}`} className="flex items-center gap-2 hover:text-teal-200 transition-colors">
              <Phone className="w-4 h-4" />
              {clinicInfo.phone}
            </a>
            <span className="text-teal-300">|</span>
            <a href={`tel:${clinicInfo.phone2}`} className="flex items-center gap-2 hover:text-teal-200 transition-colors">
              <Phone className="w-4 h-4" />
              {clinicInfo.phone2}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800 leading-tight">{clinicInfo.name}</h1>
                <p className="text-xs text-blue-800 font-bold">({clinicInfo.previousName})</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-700 hover:text-teal-600 font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button 
                onClick={onBookClick}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-3 pb-6 border-b">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">K</span>
                    </div>
                    <div>
                      <h2 className="font-bold text-gray-800">{clinicInfo.name}</h2>
                      <p className="text-xs text-blue-800 font-bold">({clinicInfo.previousName})</p>
                    </div>
                  </div>
                  
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-700 hover:text-teal-600 font-medium text-left py-2 px-3 rounded-lg hover:bg-teal-50 transition-all"
                      >
                        {link.name}
                      </button>
                    ))}
                  </nav>

                  <div className="pt-6 border-t space-y-4">
                    <div className="text-sm text-gray-600">
                      <p className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-teal-600" />
                        {clinicInfo.workingHours}
                      </p>
                      <p className="flex items-center gap-2 mb-1">
                        <Phone className="w-4 h-4 text-teal-600" />
                        {clinicInfo.phone}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-teal-600" />
                        {clinicInfo.phone2}
                      </p>
                    </div>
                    <Button 
                      onClick={() => { onBookClick(); setIsOpen(false); }}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full"
                    >
                      Book Appointment
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
