import React, { useState } from 'react';
import { Check, Star, ArrowRight, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { healthPackages } from '../data/mock';

const PackagesSection = ({ onBookClick }) => {
  const [expandedId, setExpandedId] = useState(null);
  const categories = [...new Set(healthPackages.map(pkg => pkg.category))];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPackages = activeCategory === 'all' 
    ? healthPackages 
    : healthPackages.filter(pkg => pkg.category === activeCategory);

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-slate-50 to-teal-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Health Packages</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Comprehensive Health Checkups
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Choose from our carefully designed health packages for complete wellness assessment
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={activeCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveCategory('all')}
            className={`rounded-full ${activeCategory === 'all' ? 'bg-teal-600 hover:bg-teal-700' : 'hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300'}`}
          >
            All Packages
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full ${activeCategory === category ? 'bg-teal-600 hover:bg-teal-700' : 'hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300'}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.slice(0, 6).map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:shadow-xl ${
                pkg.popular ? 'border-teal-500 shadow-lg' : 'border-gray-100 hover:border-teal-200'
              }`}
            >
              {pkg.popular && (
                <div className="bg-teal-600 text-white text-center py-2 text-sm font-medium flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 fill-current" /> Most Popular
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{pkg.name}</h3>
                    <Badge variant="secondary" className="mt-2 bg-teal-50 text-teal-700 hover:bg-teal-100">
                      {pkg.category}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-teal-600">₹{pkg.discountedPrice}</span>
                  <span className="text-lg text-gray-400 line-through">₹{pkg.originalPrice}</span>
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                    {Math.round(((pkg.originalPrice - pkg.discountedPrice) / pkg.originalPrice) * 100)}% OFF
                  </Badge>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Check className="w-4 h-4 text-teal-500" />
                    {pkg.parameters} Parameters
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-teal-500" />
                    {pkg.reportTime}
                  </span>
                </div>

                {/* Tests Preview */}
                <div className="border-t pt-4">
                  <button
                    onClick={() => setExpandedId(expandedId === pkg.id ? null : pkg.id)}
                    className="flex items-center justify-between w-full text-sm text-gray-600 hover:text-teal-600"
                  >
                    <span>Tests Included</span>
                    {expandedId === pkg.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  
                  {expandedId === pkg.id && (
                    <div className="mt-3 space-y-2">
                      {pkg.tests.map((test, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-3 h-3 text-teal-500" />
                          {test}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Button 
                  onClick={onBookClick}
                  className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white rounded-xl py-6"
                >
                  Book Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {filteredPackages.length > 6 && (
          <div className="text-center mt-10">
            <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 rounded-full px-8">
              View All {filteredPackages.length} Packages
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PackagesSection;
