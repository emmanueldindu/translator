import { NextRequest, NextResponse } from 'next/server';
import * as deepl from 'deepl-node';

export async function POST(request: NextRequest) {
  let sourceLang: string = '';
  let targetLang: string = '';
  let text: string = '';
  
  try {
    const body = await request.json();
    text = body.text;
    sourceLang = body.sourceLang;
    targetLang = body.targetLang;

    if (!text || !targetLang) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    const apiKey = process.env.NEXT_PUBLIC_DEEPL_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'DeepL API key not configured' },
        { status: 500 }
      );
    }

    // Initialize translator with increased timeout (60 seconds for beta languages)
    const translator = new deepl.Translator(apiKey, {
      maxRetries: 5,
      minTimeout: 60000
    });

    // Convert language codes to DeepL format
    let sourceLanguage: string | null = null;
    let targetLanguage: string;
    
    // Handle source language
    if (sourceLang === 'en') {
      sourceLanguage = 'en';
    } else if (sourceLang === 'ig') {
      sourceLanguage = 'ig';
    }
    
    // Handle target language
    if (targetLang === 'en') {
      targetLanguage = 'en-US';
    } else if (targetLang === 'ig') {
      targetLanguage = 'ig';
    } else {
      targetLanguage = targetLang.toUpperCase();
    }

    // For Igbo (IG), enable beta languages
    const options: { extraRequestParameters?: { enable_beta_languages: string } } = {};
    
    if (targetLanguage === 'ig' || sourceLanguage === 'ig') {
      options.extraRequestParameters = { enable_beta_languages: '1' };
    }

    console.log('Translation request:', {
      text: text.substring(0, 50),
      sourceLang: sourceLanguage,
      targetLang: targetLanguage,
      options
    });

    // Note: Igbo as source language may have limited support in beta
    // If timeout persists, it might not be fully supported yet
    const result = await translator.translateText(
      text,
      sourceLanguage as deepl.SourceLanguageCode | null,
      targetLanguage as deepl.TargetLanguageCode,
      options
    );

    console.log('Translation successful');

    // Handle both single and array results
    const translatedText = Array.isArray(result) ? result[0].text : result.text;
    const detectedLang = Array.isArray(result) ? result[0].detectedSourceLang : result.detectedSourceLang;

    return NextResponse.json({
      translatedText,
      detectedSourceLanguage: detectedLang
    });

  } catch (error: unknown) {
    const err = error as { message?: string; code?: string; statusCode?: number; name?: string; stack?: string };
    console.error('Translation API error:', {
      message: err.message,
      code: err.code,
      statusCode: err.statusCode,
      name: err.name,
      stack: err.stack?.substring(0, 200),
      sourceLang,
      targetLang,
      textLength: text?.length
    });
    
    // Check if it's a timeout error
    if (err.code === 'ECONNABORTED' || err.message?.includes('timeout')) {
      return NextResponse.json(
        { 
          error: `Translation timeout. ${sourceLang === 'ig' ? 'Igbo source language' : 'This translation'} may be experiencing issues with DeepL API.`,
          fallbackNeeded: true
        },
        { status: 503 }
      );
    }

    // Check for unsupported language
    if (err.message?.includes('not supported') || err.statusCode === 400) {
      return NextResponse.json(
        { 
          error: 'This language combination is not currently supported by DeepL API.',
          fallbackNeeded: true
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        error: err.message || 'Translation failed',
        fallbackNeeded: true
      },
      { status: 500 }
    );
  }
}
