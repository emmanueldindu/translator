'use client';

import React, { useState } from 'react';
import { 
  DocumentTextIcon, 
  ArrowPathIcon, 
  ClipboardDocumentIcon,
  ArrowRightIcon,
  LanguageIcon
} from '@heroicons/react/24/outline';
import translationService from '../services/translationService';

interface TranslationInterfaceProps {
  className?: string;
}

const TranslationInterface: React.FC<TranslationInterfaceProps> = ({ className = '' }) => {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [fromLanguage, setFromLanguage] = useState<string>('English');
  const [toLanguage, setToLanguage] = useState<string>('Igbo');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [translationError, setTranslationError] = useState<string>('');

  const handleTranslate = async (): Promise<void> => {
    if (!inputText.trim()) return;

    setIsTranslating(true);
    setTranslationError('');
    
    try {
      // Get language codes
      const sourceLang = fromLanguage === 'English' ? 'en' : 'ig';
      const targetLang = toLanguage === 'English' ? 'en' : 'ig';
      
      // Call translation service
      const translatedText = await translationService.translateText(
        inputText, 
        sourceLang, 
        targetLang
      );
      
      setOutputText(translatedText);
    } catch (error) {
      console.error('Translation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Translation failed. Please try again.';
      setTranslationError(errorMessage);
      setOutputText('');
    } finally {
      setIsTranslating(false);
    }
  };

  const handleClear = (): void => {
    setInputText('');
    setOutputText('');
    setIsTyping(false);
    setTranslationError('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setInputText(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  const getWordCount = (): number => {
    return inputText.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const getCharacterCount = (): number => {
    return inputText.length;
  };

  const handleCopy = (): void => {
    navigator.clipboard.writeText(outputText);
  };

  const swapLanguages = (): void => {
    const temp = fromLanguage;
    setFromLanguage(toLanguage);
    setToLanguage(temp);
    setInputText(outputText);
    setOutputText(inputText);
  };

  const handlePaste = async (): Promise<void> => {
    try {
      const text = await navigator.clipboard.readText();
      setInputText(text);
    } catch (error) {
      console.error('Failed to paste text:', error);
    }
  };

  return (
    <div id="translator" className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
      {/* Main Translation Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Language Selection Header */}
        <div className="flex items-center justify-center space-x-4 p-6 border-b border-gray-100">
          <button className="bg-white border-2 border-green-500 text-green-500 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center space-x-2">
            <LanguageIcon className="w-4 h-4" />
            <span>English</span>
          </button>
          
          <button 
            onClick={swapLanguages}
            className="p-2 text-gray-500 hover:text-green-500 transition-colors"
          >
            <ArrowPathIcon className="w-5 h-5" />
          </button>
          
          <button className="bg-white border-2 border-green-500 text-green-500 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center space-x-2">
            <LanguageIcon className="w-4 h-4" />
            <span>Igbo</span>
          </button>
        </div>

        {/* Main Translation Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Input Section - Left Column */}
          <div className="p-6 border-r border-gray-100">
            <div className="h-80 flex flex-col">
              <div className="flex-1">
                <textarea
                  value={inputText}
                  onChange={handleInputChange}
                  placeholder="Enter text"
                  className="w-full h-full resize-none border-none outline-none text-gray-900 placeholder-gray-500 text-lg"
                  maxLength={5000}
                />
              </div>
              <div className="mt-4">
                {!isTyping && (
                  <button
                    onClick={handlePaste}
                    className="bg-white border-2 border-green-500 text-green-500 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center space-x-2"
                  >
                    <ClipboardDocumentIcon className="w-4 h-4" />
                    <span>Paste text</span>
                  </button>
                )}
              </div>
            </div>
            
            {/* Input Footer - Mobile Only */}
            <div className="lg:hidden flex items-center justify-between p-4 border-t border-gray-100 bg-gray-50 mt-4">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>{getCharacterCount()} / 5,000 characters</span>
              </div>
              <button
                onClick={handleTranslate}
                disabled={!inputText.trim() || isTranslating}
                className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                {isTranslating ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Translating...</span>
                  </>
                ) : (
                  <>
                    <ArrowRightIcon className="w-4 h-4" />
                    <span>Translate</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Output Section - Right Column */}
          <div className="p-6">
            <div className="h-80 flex flex-col">
              <div className="flex-1">
                <textarea
                  value={outputText}
                  readOnly
                  placeholder="Translation will appear here..."
                  className="w-full h-full resize-none border-none outline-none text-gray-900 placeholder-gray-500 text-lg"
                />
              </div>
              
              {/* Error Display */}
              {translationError && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{translationError}</p>
                </div>
              )}
            </div>
            
            {/* Output Footer - Mobile Only */}
            <div className="lg:hidden flex items-center justify-end p-4 border-t border-gray-100 bg-gray-50 mt-4">
              <button
                onClick={handleCopy}
                disabled={!outputText.trim()}
                className="bg-white border-2 border-green-500 text-green-500 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ClipboardDocumentIcon className="w-4 h-4" />
                <span>Copy</span>
              </button>
            </div>
          </div>
        </div>

        {/* Divider with Swap Button - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:flex items-center justify-center py-4">
          <button 
            onClick={swapLanguages}
            className="bg-white border-2 border-green-500 text-green-500 p-3 rounded-full hover:bg-green-50 transition-colors"
          >
            <ArrowPathIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Swap Button - Visible only on mobile */}
        <div className="lg:hidden flex justify-center py-4">
          <button 
            onClick={swapLanguages}
            className="bg-white border-2 border-green-500 text-green-500 p-3 rounded-full hover:bg-green-50 transition-colors"
          >
            <ArrowPathIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop Footer - Centered Layout */}
        <div className="hidden lg:flex items-center justify-center p-6 border-t border-gray-100 bg-gray-50 ">
          <div className="flex items-center space-x-8">
            {/* Word Count */}
        <div className="flex items-center space-x-4 text-sm text-gray-600 lg:w-30 ">
              <span>{getCharacterCount()} / 5,000 </span>
            </div>

            {/* Translate Button - Centered */}
            <button
              onClick={handleTranslate}
              disabled={!inputText.trim() || isTranslating}
              className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-2 rounded-2xl font-medium transition-colors flex items-center space-x-2 text-lg"
            >
              {isTranslating ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Translating...</span>
                </>
              ) : (
                <>
                  <ArrowRightIcon className="w-5 h-5" />
                  <span>Translate</span>
                </>
              )}
            </button>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              disabled={!outputText.trim()}
              className="bg-white border-2 border-green-500 text-green-500 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ClipboardDocumentIcon className="w-4 h-4" />
              <span>Copy</span>
            </button>
          </div>
          
          {/* Desktop Error Display */}
          {translationError && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{translationError}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TranslationInterface;
