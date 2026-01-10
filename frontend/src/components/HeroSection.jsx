import React, { useState, useRef, useEffect } from 'react';
import { Search, Home, MapPin, Package, ArrowRight, Phone, Clock, X, FlaskConical, Smile } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { clinicInfo, popularTests, healthPackages, dentalServices } from '../data/mock';

const HeroSection = ({ onBookClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState({ tests: [], packages: [], dental: [] });
  const searchRef = useRef(null);

  const quickLinks = [
    { icon: Search, title: 'Find a Test', subtitle: 'View Tests & Prices', color: 'bg-teal-50 hover:bg-teal-100 border-teal-200', action: 'scroll', target: '#tests' },
    { icon: Home, title: 'Home Collection', subtitle: 'Book at Doorstep', color: 'bg-orange-50 hover:bg-orange-100 border-orange-200', action: 'book' },
    { icon: MapPin, title: 'Visit Clinic', subtitle: 'Safdarjung Enclave', color: 'bg-blue-50 hover:bg-blue-100 border-blue-200', action: 'scroll', target: '#contact' },
    { icon: Package, title: 'Health Packages', subtitle: 'Full Body Checkups', color: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200', action: 'scroll', target: '#packages' }
  ];

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const query = searchQuery.toLowerCase();
      
      const filteredTests = popularTests.filter(test => 
        test.name.toLowerCase().includes(query)
      ).slice(0, 4);
      
      const filteredPackages = healthPackages.filter(pkg => 
        pkg.name.toLowerCase().includes(query) || 
        pkg.category.toLowerCase().includes(query)
      ).slice(0, 4);
      
      const filteredDental = dentalServices.filter(service => 
        service.name.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query)
      ).slice(0, 4);
      
      setSearchResults({ tests: filteredTests, packages: filteredPackages, dental: filteredDental });
      setShowResults(true);
    } else {
      setSearchResults({ tests: [], packages: [], dental: [] });
      setShowResults(false);
    }
  }, [searchQuery]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCardClick = (link) => {
    if (link.action === 'book') {
      onBookClick();
    } else if (link.action === 'scroll' && link.target) {
      const element = document.querySelector(link.target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      // Scroll to tests section when searching
      const element = document.querySelector('#tests');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setShowResults(false);
    }
  };

  const handleResultClick = (type) => {
    let target = '#tests';
    if (type === 'package') target = '#packages';
    if (type === 'dental') target = '#dental';
    
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowResults(false);
    setSearchQuery('');
  };

  const totalResults = searchResults.tests.length + searchResults.packages.length + searchResults.dental.length;

  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-50 via-teal-50/30 to-white min-h-[85vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4" />
                45+ Years of Trusted Healthcare
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Family's
                <span className="text-teal-600 block">Health Partner</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-xl">
                {clinicInfo.tagline}. Comprehensive lab tests, expert consultations, dental care & more - all under one roof.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-xl p-2 flex items-center gap-2 max-w-xl border border-gray-100">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Search className="w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="Search for tests, packages..." 
                  className="border-0 focus-visible:ring-0 text-gray-700 placeholder:text-gray-400"
                />
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-6 rounded-xl">
                Search
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-teal-600">45+</p>
                <p className="text-sm text-gray-600">Years of Service</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-teal-600">50K+</p>
                <p className="text-sm text-gray-600">Happy Patients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-teal-600">100+</p>
                <p className="text-sm text-gray-600">Tests Available</p>
              </div>
            </div>
          </div>

          {/* Right Content - Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleCardClick(link)}
                className={`${link.color} p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-left group cursor-pointer`}
              >
                <link.icon className="w-10 h-10 text-gray-700 mb-4" />
                <h3 className="font-semibold text-gray-800 text-lg">{link.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{link.subtitle}</p>
                <ArrowRight className="w-5 h-5 text-gray-400 mt-4 group-hover:translate-x-2 transition-transform" />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden flex flex-col gap-3">
          <a href={`tel:${clinicInfo.phone}`} className="w-full">
            <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 rounded-xl flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now: {clinicInfo.phone}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
