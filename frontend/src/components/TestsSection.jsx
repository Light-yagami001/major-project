import React, { useState } from 'react';
import { Clock, ArrowRight, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { popularTests } from '../data/mock';

const TestsSection = ({ onBookClick }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedTests = showAll ? popularTests : popularTests.slice(0, 8);

  return (
    <section id="tests" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Lab Tests</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Popular Diagnostic Tests
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Browse our wide range of accurate and affordable lab tests with quick results
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="bg-slate-50 rounded-2xl p-2 flex items-center gap-2 border border-gray-200">
            <div className="flex-1 flex items-center gap-3 px-4">
              <Search className="w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Search for any test..." 
                className="border-0 bg-transparent focus-visible:ring-0 text-gray-700"
              />
            </div>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 rounded-xl">
              Search
            </Button>
          </div>
        </div>

        {/* Tests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayedTests.map((test) => (
            <div
              key={test.id}
              className="bg-gradient-to-br from-slate-50 to-white p-5 rounded-xl border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="font-semibold text-gray-800 mb-3 group-hover:text-teal-700 transition-colors">
                {test.name}
              </h3>
              
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold text-teal-600">₹{test.price}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
                  {test.parameters} {test.parameters > 1 ? 'Parameters' : 'Parameter'}
                </Badge>
                <Badge variant="secondary" className="bg-teal-50 text-teal-700 text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {test.reportTime}
                </Badge>
              </div>

              <Button 
                onClick={onBookClick}
                variant="outline"
                className="w-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white rounded-lg transition-all"
              >
                Book Test
              </Button>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {popularTests.length > 8 && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              onClick={() => setShowAll(!showAll)}
              className="border-teal-600 text-teal-600 hover:bg-teal-50 rounded-full px-8 py-6"
            >
              {showAll ? 'Show Less' : `View All ${popularTests.length} Tests`} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestsSection;
