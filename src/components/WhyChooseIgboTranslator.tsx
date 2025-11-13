'use client';

import React from 'react';
import { 
  CheckCircleIcon,
  SparklesIcon,
  GlobeAltIcon,
  BookOpenIcon,
  CpuChipIcon,
  ArrowPathIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

interface WhyChooseIgboTranslatorProps {
  className?: string;
}

const WhyChooseIgboTranslator: React.FC<WhyChooseIgboTranslatorProps> = ({ className = '' }) => {
  const mainFeatures = [
    {
      id: 'accuracy',
      title: 'High Accuracy',
      description: 'Get accurate translations between English and Igbo with proper word choices and sentence structure.',
      icon: ShieldCheckIcon
    },
    {
      id: 'speed',
      title: 'Fast Translation',
      description: 'Translate text instantly with our optimized translation engine for quick results.',
      icon: SparklesIcon
    },
    {
      id: 'reliability',
      title: 'Reliable Service',
      description: 'Consistent translation quality with a stable and dependable translation platform.',
      icon: CpuChipIcon
    },
    {
      id: 'specialized-focus',
      title: 'Specialized Focus',
      description: 'Dedicated exclusively to English to Igbo translation for the most accurate and culturally appropriate results.',
      icon: GlobeAltIcon
    },
    {
      id: 'user-friendly',
      title: 'User-Friendly Interface',
      description: 'Simple and intuitive design that makes translation easy for users of all skill levels.',
      icon: BookOpenIcon
    },
    {
      id: 'regular-updates',
      title: 'Regular Updates',
      description: 'Access the latest translation features and stay current with improved translation technology.',
      icon: ArrowPathIcon
    }
  ];

  const benefits = [
    'Translate longer texts with ease',
    'Enjoy an ad-free translation experience',
    'Translate from English to Igbo accurately',
    'Edit and improve your translations easily',
    'Enjoy completely free basic translation',
    'Access accurate Igbo translations',
    'Translate online without downloading an app',
    'Experience a mobile-friendly platform'
  ];

  const handleGetStarted = (): void => {
    // Handle get started logic here
    console.log('Get started clicked');
  };

  return (
    <div id="benefits" className={`${className}`}>
      {/* Main Features Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why is our Igbo Translator better than other language translators?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience fast, accurate, and reliable Igbo translation technology.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section - Green Background */}
      <section className="py-16 bg-green-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why use our Igbo Translator?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Discover the advantages of our simple and effective Igbo translation platform.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <p className="text-white text-lg font-medium">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button
              onClick={handleGetStarted}
              className="bg-white hover:bg-gray-50 text-green-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get started for free
            </button>
            <p className="mt-4 text-green-100 text-sm">
              Start translating to and from Igbo instantly - no registration required
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseIgboTranslator;
