import Navbar from '@/components/Navbar';
import TranslationInterface from '@/components/TranslationInterface';
import IgboTranslationPromo from '@/components/IgboTranslationPromo';
import WhyChooseIgboTranslator from '@/components/WhyChooseIgboTranslator';
import LearnAndTravelSection from '@/components/LearnAndTravelSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { 
  BoltIcon, 
  DocumentTextIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-8">
        <TranslationInterface />
        
   
        
        {/* Features Section */}
        <section id="features" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Igbo Translation: Free AI Language Translator
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Communicate flawlessly in Igbo and other languages with our easy-to-use language translator.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Instant Feature */}
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BoltIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant</h3>
                <p className="text-gray-600 mb-2">Get accurate translations in just a few seconds.</p>
                <p className="text-sm text-gray-500 italic">Nweta ntụgharị asụsụ ziri ezi n'ime sekọnd ole na ole.</p>
              </div>

              {/* Versatile Feature */}
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DocumentTextIcon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Versatile</h3>
                <p className="text-gray-600 mb-2">Translate words, sentences, paragraphs, and more.</p>
                <p className="text-sm text-gray-500 italic">Tụgharịa okwu, ahịrịokwu, paragraf, na ihe ndị ọzọ.</p>
              </div>

              {/* Affordable Feature */}
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CurrencyDollarIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable</h3>
                <p className="text-gray-600 mb-2">Translate for free—or get more features with Premium.</p>
                <p className="text-sm text-gray-500 italic">Tụgharịa n'efu—ma ọ bụ nweta atụmatụ ndị ọzọ na Premium.</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors text-lg">
                Get started now
              </button>
            </div>
          </div>
        </section>

              {/* Igbo Translation Promo Section */}
              <IgboTranslationPromo />
              
              {/* Why Choose Our Igbo Translator Section */}
              <WhyChooseIgboTranslator />
              
              {/* Learn and Travel Section */}
              <LearnAndTravelSection />
              
              {/* FAQ Section */}
              <FAQSection />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
  );
}
