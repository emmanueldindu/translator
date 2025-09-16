'use client';

import React from 'react';
import { 
  LanguageIcon,
  GlobeAltIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <LanguageIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Igbo Translator</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Fast, accurate, and reliable English to Igbo translation. 
              Connect with Nigerian communities and learn the beautiful Igbo language.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  How to Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Supported Languages
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Translation Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Language Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Translation Features</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <GlobeAltIcon className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">English to Igbo</span>
              </div>
              <div className="flex items-center space-x-2">
                <LanguageIcon className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Igbo Specialized</span>
              </div>
              <div className="flex items-center space-x-2">
                <HeartIcon className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Cultural Context</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Igbo Translator. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
