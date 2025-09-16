'use client';

import React, { useState } from 'react';
import { 
  GlobeAltIcon,
  LanguageIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface LearnAndTravelSectionProps {
  className?: string;
}

const LearnAndTravelSection: React.FC<LearnAndTravelSectionProps> = ({ className = '' }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('Portuguese');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const languages = [
    { name: 'Portuguese', code: 'pt' },
    { name: 'French', code: 'fr' },
    { name: 'Spanish', code: 'es' },
    { name: 'German', code: 'de' },
    { name: 'Italian', code: 'it' },
    { name: 'Dutch', code: 'nl' }
  ];

  const landmarks = [
    {
      name: 'Nigeria',
      icon: '🇳🇬',
      description: 'Lagos'
    },
    {
      name: 'Brazil',
      icon: '🇧🇷',
      description: 'Rio de Janeiro'
    },
    {
      name: 'Portugal',
      icon: '🇵🇹',
      description: 'Lisbon'
    },
    {
      name: 'France',
      icon: '🇫🇷',
      description: 'Paris'
    }
  ];

  return (
    <div id="learn-travel" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${className}`}>
      {/* Learn New Languages Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Left Side - Learn New Languages */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Learn new languages
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Whether you're learning Igbo as a hobby, connecting with Nigerian communities, 
              enhancing your resume, or pursuing personal development, our translator makes 
              language learning accessible and effective.
            </p>
            <p>
              Our platform automatically translates sentences, words, and paragraphs from 
              English to Igbo, providing side-by-side comparisons to help you understand 
              sentence structure, word choice, and grammar patterns.
            </p>
            <p>
              Master Igbo idioms, cultural expressions, and language quirks with our 
              comprehensive translation tools designed specifically for Igbo language learning.
            </p>
          </div>
        </div>

        {/* Right Side - Translator Interface Mockup */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Translator</h3>
            
            {/* Language Selection */}
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="bg-gray-50 rounded-lg px-4 py-3">
                  <span className="text-sm text-gray-600">English - Detected</span>
                </div>
              </div>
              <ArrowRightIcon className="w-5 h-5 text-gray-400" />
              <div className="flex-1 relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-gray-50 rounded-lg px-4 py-3 text-left flex items-center justify-between"
                >
                  <span className="text-sm text-gray-600">Translate to</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLanguage(lang.name);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between ${
                          selectedLanguage === lang.name ? 'bg-green-50' : ''
                        }`}
                      >
                        <span className="text-sm">{lang.name}</span>
                        {selectedLanguage === lang.name && (
                          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Text Input Area */}
            <div className="space-y-2">
              <textarea
                placeholder="Enter text to translate..."
                className="w-full h-32 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                defaultValue="N'ime ọzara na-ekpo ọkụ, ájá, na-arọ nrọ nke o hallucinated, na-agbagwoju anya"
              />
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>182/5,000 characters</span>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">I</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Communicate While Traveling Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Illustration */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            {/* Robot Character */}
            <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                <DevicePhoneMobileIcon className="w-10 h-10 text-white" />
              </div>
            </div>
            
            {/* Location Stamps */}
            <div className="grid grid-cols-2 gap-4">
              {landmarks.map((landmark, index) => (
                <div key={index} className="relative">
                  <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-lg flex flex-col items-center justify-center p-2 shadow-sm">
                    <span className="text-2xl mb-1">{landmark.icon}</span>
                    <span className="text-xs text-gray-600 text-center">{landmark.description}</span>
                  </div>
                  <MapPinIcon className="w-4 h-4 text-green-500 absolute -top-1 -right-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Communicate with locals while traveling
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Whether you're visiting Nigeria, connecting with Igbo communities worldwide, 
              or exploring Igbo-speaking regions, our translator acts as your personal language 
              assistant right on your phone.
            </p>
            <p>
              From reading menu items and street signs to having meaningful conversations 
              with locals, translate anything from basic greetings to complex business 
              discussions instantly from English to Igbo.
            </p>
            <p>
              Experience authentic cultural exchanges and build genuine connections with 
              Igbo speakers and communities around the world.
            </p>
          </div>
          
          {/* Call to Action */}
          <div className="pt-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              <span>Start Translating</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnAndTravelSection;
