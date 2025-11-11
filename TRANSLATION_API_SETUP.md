# Igbo Translation API Setup Guide

## 🚀 Quick Start (Recommended)

### Option 1: DeepL API (Free Tier - 500,000 characters/month)
**Status**: ✅ Configured and ready to use

Your app is now configured to use DeepL API with Igbo beta language support. It will:
1. Use DeepL API for high-quality translations
2. Support Igbo language (beta feature enabled)
3. Fall back to mock translations if the API is unavailable

**Your API Key**: Already configured in `.env.local`

**Test it now**: Try translating "hello" from English to Igbo!

---

## 🔧 Alternative APIs (If you want to switch)

### Option 2: OpenL Translate (30 free translations/day)
1. **Sign up**: Go to https://openl.io/
2. **Get API key**: Copy your API key from the dashboard
3. **Add to environment**: Create `.env.local` file:
   ```
   NEXT_PUBLIC_TRANSLATION_API_KEY=your_openl_api_key_here
   ```
4. **Update service**: Replace LibreTranslate URL with OpenL endpoint

### Option 3: Igbo API (Specialized for Igbo)
1. **Sign up**: Go to https://igboapi.com/
2. **Get API key**: Follow their documentation
3. **Add to environment**: Create `.env.local` file:
   ```
   NEXT_PUBLIC_TRANSLATION_API_KEY=your_igbo_api_key_here
   ```

---

## 🧪 Testing Your Translation

### Test Phrases to Try:
- **English → Igbo**: "hello", "thank you", "good morning", "how are you"
- **Igbo → English**: "Ndewo", "Daalụ", "Utụtụ ọma", "Kedu ka ị mere?"

### What to Expect:
- ✅ **API Success**: Real translations from LibreTranslate
- ⚠️ **API Fallback**: Mock translations if API is down
- ❌ **Error**: Clear error messages if translation fails

---

## 📊 API Comparison

| API | Free Tier | Igbo Support | Setup Difficulty | Quality |
|-----|-----------|--------------|------------------|---------|
| **LibreTranslate** | ✅ Unlimited | ✅ Yes | ⭐ Very Easy | ⭐⭐⭐ Good |
| **OpenL** | ✅ 30/day | ✅ Yes | ⭐⭐ Easy | ⭐⭐⭐⭐ Very Good |
| **Igbo API** | ✅ Limited | ✅ Excellent | ⭐⭐⭐ Medium | ⭐⭐⭐⭐⭐ Excellent |

---

## 🎯 Recommendation

**Start with LibreTranslate** - it's already integrated and working! You can always upgrade to a paid service later if you need more features or better quality.

Your translation app is ready to use right now! 🎉
