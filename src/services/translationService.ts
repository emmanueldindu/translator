import axios from 'axios';

interface TranslationResponse {
  translatedText: string;
  detectedSourceLanguage?: string;
}

interface TranslationError {
  message: string;
  code?: string;
}

class TranslationService {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    // Using LibreTranslate API as it's free and supports Igbo
    this.baseUrl = 'https://libretranslate.de/translate';
    this.apiKey = process.env.NEXT_PUBLIC_TRANSLATION_API_KEY || '';
  }

  /**
   * Translate text from source language to target language
   */
  async translateText(
    text: string, 
    sourceLang: string, 
    targetLang: string
  ): Promise<string> {
    try {
      if (!text.trim()) {
        throw new Error('Please enter text to translate');
      }

      // Try LibreTranslate API first
      try {
        const response = await this.callLibreTranslateAPI(text, sourceLang, targetLang);
        return response;
      } catch (apiError) {
        console.warn('API translation failed, falling back to mock:', apiError);
        // Fallback to mock translation if API fails
        const response = await this.mockTranslate(text, sourceLang, targetLang);
        return response;
      }
    } catch (error) {
      console.error('Translation error:', error);
      throw new Error('Translation failed. Please try again.');
    }
  }

  /**
   * Call LibreTranslate API
   */
  private async callLibreTranslateAPI(
    text: string, 
    sourceLang: string, 
    targetLang: string
  ): Promise<string> {
    const response = await axios.post(this.baseUrl, {
      q: text,
      source: sourceLang,
      target: targetLang,
      format: 'text'
    }, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 10000 // 10 second timeout
    });

    if (response.data && response.data.translatedText) {
      return response.data.translatedText;
    } else {
      throw new Error('Invalid response from translation API');
    }
  }

  /**
   * Mock translation function - replace with actual API call
   */
  private async mockTranslate(
    text: string, 
    sourceLang: string, 
    targetLang: string
  ): Promise<string> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock translations for demonstration
    const mockTranslations: Record<string, Record<string, string>> = {
      'en-ig': {
        'hello': 'Ndewo',
        'good morning': 'Utụtụ ọma',
        'how are you': 'Kedu ka ị mere?',
        'thank you': 'Daalụ',
        'goodbye': 'Ka ọ dị',
        'welcome': 'Nnọọ',
        'yes': 'Ee',
        'no': 'Mba',
        'please': 'Biko',
        'excuse me': 'Biko',
        'i love you': 'A hụrụ m gị n\'anya',
        'family': 'Ezinụlọ',
        'food': 'Nri',
        'water': 'Mmiri',
        'house': 'Ụlọ',
        'school': 'Ụlọ akwụkwọ',
        'work': 'Ọrụ',
        'money': 'Ego',
        'time': 'Oge',
        'today': 'Taa',
        'tomorrow': 'Echi',
        'yesterday': 'Ụnyaahụ'
      },
      'ig-en': {
        'Ndewo': 'Hello',
        'Utụtụ ọma': 'Good morning',
        'Kedu ka ị mere?': 'How are you?',
        'Daalụ': 'Thank you',
        'Ka ọ dị': 'Goodbye',
        'Nnọọ': 'Welcome',
        'Ee': 'Yes',
        'Mba': 'No',
        'Biko': 'Please',
        'A hụrụ m gị n\'anya': 'I love you',
        'Ezinụlọ': 'Family',
        'Nri': 'Food',
        'Mmiri': 'Water',
        'Ụlọ': 'House',
        'Ụlọ akwụkwọ': 'School',
        'Ọrụ': 'Work',
        'Ego': 'Money',
        'Oge': 'Time',
        'Taa': 'Today',
        'Echi': 'Tomorrow',
        'Ụnyaahụ': 'Yesterday'
      }
    };

    const translationKey = `${sourceLang}-${targetLang}`;
    const translations = mockTranslations[translationKey];

    if (translations) {
      // Check for exact matches first
      const lowerText = text.toLowerCase().trim();
      if (translations[lowerText]) {
        return translations[lowerText];
      }

      // Check for partial matches
      for (const [key, value] of Object.entries(translations)) {
        if (lowerText.includes(key.toLowerCase())) {
          return text.replace(new RegExp(key, 'gi'), value);
        }
      }
    }

    // If no translation found, return a placeholder
    return `[Translation: ${text}]`;
  }

  /**
   * Get supported languages
   */
  getSupportedLanguages(): Array<{code: string, name: string}> {
    return [
      { code: 'en', name: 'English' },
      { code: 'ig', name: 'Igbo' }
    ];
  }

  /**
   * Detect language of input text
   */
  async detectLanguage(text: string): Promise<string> {
    try {
      // Simple language detection based on character patterns
      const igboPattern = /[àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]/i;
      const englishPattern = /^[a-zA-Z\s.,!?;:'"()-]+$/;

      if (igboPattern.test(text) || !englishPattern.test(text)) {
        return 'ig';
      }
      return 'en';
    } catch (error) {
      console.error('Language detection error:', error);
      return 'en'; // Default to English
    }
  }
}

// Export singleton instance
export const translationService = new TranslationService();
export default translationService;
