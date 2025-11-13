'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface FAQSectionProps {
  className?: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ className = '' }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const faqs: FAQItem[] = [
    {
      id: 'free-to-use',
      question: 'Is the Igbo Translator free to use?',
      answer: 'Yes! Our basic Igbo translation service is completely free to use. You can translate text between English and Igbo without any cost. We also offer premium features for users who need unlimited translations and additional tools.'
    },
    {
      id: 'character-limit',
      question: 'How many characters can I translate at once?',
      answer: 'You can translate up to 5,000 characters at once with our free service. For longer texts, you can break them into smaller chunks or upgrade to our premium plan for unlimited character translation.'
    },
    {
      id: 'language-support',
      question: 'What languages does the Igbo Translator support?',
      answer: 'Our translator specializes in English to Igbo translation. We focus exclusively on providing the most accurate and reliable translation between these two languages.'
    },
    {
      id: 'translation-quality',
      question: 'How reliable is the Igbo translation quality?',
      answer: 'Our translations are highly accurate and contextually appropriate. We use advanced translation technology specifically optimized for Igbo language patterns, grammar, and cultural nuances to ensure reliable results.'
    },
    {
      id: 'why-use-our-translator',
      question: 'Why use our Igbo Translator?',
      answer: 'Our translator is specifically designed for Igbo language translation, offering better accuracy than generic translation tools. We understand Igbo cultural context, provide proper word choices, and maintain the meaning and tone of your original text.'
    },
    {
      id: 'translation-time',
      question: 'How long does it take to translate a large text?',
      answer: 'Most translations are completed instantly, even for longer texts. Our optimized translation engine processes text quickly, so you can get your results in seconds regardless of the text length.'
    },
    {
      id: 'best-for-writers',
      question: 'What makes our Igbo Translator the best tool for writers?',
      answer: 'Our translator helps writers maintain authentic Igbo voice and cultural context in their work. It provides accurate translations that preserve the original meaning while ensuring proper Igbo grammar and expression patterns.'
    },
    {
      id: 'vs-human-translation',
      question: 'How is our Translator different compared to human translation?',
      answer: 'While human translators provide excellent results, our AI-powered translator offers instant, cost-effective translations with consistent quality. It\'s perfect for quick translations, learning, and everyday communication needs.'
    },
    {
      id: 'supported-languages',
      question: 'What languages can our Translator handle?',
      answer: 'Our translator specializes exclusively in English to Igbo translation. We focus on providing the most accurate and culturally appropriate translations between these two languages.'
    }
  ];

  const toggleItem = (id: string): void => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div id="faq" className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${className}`}>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Igbo Translator FAQs
        </h2>
        <p className="text-xl text-gray-600">
          Find answers to common questions about our Igbo translation service
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-0">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b border-gray-200 last:border-b-0">
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full py-6 px-0 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg font-medium text-gray-900 pr-4">
                {faq.question}
              </span>
              {openItems.has(faq.id) ? (
                <ChevronUpIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
              )}
            </button>
            
            {openItems.has(faq.id) && (
              <div className="pb-6 px-0">
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
