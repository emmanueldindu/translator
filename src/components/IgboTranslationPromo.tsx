'use client';

import React from 'react';
import { 
  LanguageIcon,
  BookOpenIcon,
  SparklesIcon,
  GlobeAltIcon,
  UserPlusIcon
} from '@heroicons/react/24/outline';

interface IgboTranslationPromoProps {
  className?: string;
}

const IgboTranslationPromo: React.FC<IgboTranslationPromoProps> = ({ className = '' }) => {
  const features = [
    {
      id: 'fast-translation',
      title: 'Fast Translation',
      description: 'Get instant translations between English and Igbo in seconds.',
      icon: SparklesIcon,
      color: 'green',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconColor: 'text-green-600',
      accentColor: 'bg-green-500'
    },
    {
      id: 'easy-to-use',
      title: 'Easy to Use',
      description: 'Simple interface that makes translation accessible to everyone.',
      icon: GlobeAltIcon,
      color: 'yellow',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      iconColor: 'text-yellow-600',
      accentColor: 'bg-yellow-500'
    },
    {
      id: 'unlimited-words',
      title: 'Unlimited Words',
      description: 'Sign up to translate without any word limit while preserving accuracy and clarity.',
      icon: BookOpenIcon,
      color: 'red',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      iconColor: 'text-red-600',
      accentColor: 'bg-red-500'
    },
    {
      id: 'definitions',
      title: 'Igbo Dictionary',
      description: 'Access comprehensive Igbo word definitions and usage examples.',
      icon: LanguageIcon,
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600',
      accentColor: 'bg-blue-500'
    }
  ];

  const handleSignUp = (): void => {
    // Handle sign up logic here
    console.log('Sign up clicked');
  };

  return (
    <div id="promo" className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${className}`}>
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Make the most of Igbo Translation
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Simple and fast translation between English and Igbo languages.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={feature.id}
              className={`${feature.bgColor} ${feature.borderColor} border-l-4 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                  <IconComponent className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Call to Action Section */}
      <div className="text-center">
        <button
          onClick={handleSignUp}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <div className="flex items-center justify-center space-x-2">
            <UserPlusIcon className="w-5 h-5" />
            <span>Sign Up</span>
          </div>
        </button>
        
        <p className="mt-4 text-gray-600 text-sm">
          With an account, you'll get unlimited words, faster translations, and more features.
        </p>
      </div>
    </div>
  );
};

export default IgboTranslationPromo;
