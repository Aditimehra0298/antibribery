import React, { useState } from 'react';
import { ArrowRight, AlertTriangle, Phone } from 'lucide-react';
import RiskAssessmentForm from './RiskAssessmentForm';

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source src="https://cdn.pixabay.com/video/2024/02/02/198896-909564547_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Alert Badge */}
          <div className="inline-flex items-center space-x-2 bg-red-900/30 border border-red-500/50 rounded-full px-4 py-2 mb-8 animate-pulse hover:animate-bounce transition-all duration-300 hover:scale-105">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="text-red-300 text-sm font-medium">Eurocert’s Anti-Bribery Audit: Mitigate risks, Ensure Compliance, and Uphold Ethics.</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            <span className="block animate-slide-in-left">Protect Your</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x animate-slide-in-right">
              Business
            </span>
            <span className="block animate-slide-in-left animation-delay-300">Guard Your Reputation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
            Eurocert Anti-Bribery & Corruption Audit for Large Indian Enterprises
          </p>

          {/* Key Message */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            {/* Warning Badge */}
            <div className="inline-flex items-center space-x-2 bg-red-900/30 border border-red-500/50 rounded-full px-4 py-2 mb-4 animate-pulse hover:animate-bounce transition-all duration-300 hover:scale-105">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span className="text-red-300 text-sm font-medium">One scandal can destroy everything</span>
            </div>
            
            <p className="text-lg text-gray-200 leading-relaxed">
              One bribery scandal can destroy brand value and open you up to lawsuits, penalties, and global scrutiny. 
              <span className="text-blue-400 font-semibold animate-pulse"> Don't leave your reputation to chance.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center items-center animate-fade-in-up animation-delay-1000">
            <button 
              onClick={openForm}
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/50 flex items-center space-x-2 animate-bounce-slow hover:animate-none relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span>Get Your Risk Assessment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-800 animate-fade-in-up animation-delay-1200">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center space-x-2 hover:text-green-400 transition-colors duration-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <span className="text-sm">25+ Years Excellence</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping animation-delay-200"></div>
                <span className="text-sm">40+ Countries</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-purple-400 transition-colors duration-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-400"></div>
                <span className="text-sm">Fortune 500 Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full animate-float delay-1000 blur-sm"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-float-reverse delay-2000 blur-sm"></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full animate-float delay-3000 blur-sm"></div>
      <div className="absolute top-1/3 right-20 w-8 h-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full animate-float-reverse delay-4000 blur-sm"></div>
      <div className="absolute bottom-1/3 left-20 w-14 h-14 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full animate-float delay-5000 blur-sm"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-twinkle"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-twinkle animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-twinkle animation-delay-2000"></div>
        <div className="absolute top-1/3 left-2/3 w-1 h-1 bg-pink-400 rounded-full animate-twinkle animation-delay-3000"></div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+919779665056"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 sm:bottom-28 sm:right-6 z-50 group"
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulsing Ring Effect */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
        
        {/* Main Button */}
        <div className="relative bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white p-4 sm:p-5 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 min-w-[64px] min-h-[64px] flex items-center justify-center border-2 border-green-300/30">
          {/* WhatsApp Icon */}
          <svg className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          
          {/* Sparkle Effect */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
        </div>
        
        {/* Enhanced Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2 whitespace-nowrap hidden sm:block shadow-xl border border-green-400/30">
          <span className="font-semibold">💬 Chat on WhatsApp</span>
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-600"></div>
        </div>
      </a>

      {/* Floating Phone Button */}
      <a
        href="tel:+919056742781"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group"
        aria-label="Call us"
      >
        {/* Pulsing Ring Effect */}
        <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-75 animation-delay-500"></div>
        
        {/* Main Button */}
        <div className="relative bg-gradient-to-br from-red-400 via-red-500 to-red-600 hover:from-red-500 hover:via-red-600 hover:to-red-700 text-white p-4 sm:p-5 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 min-w-[64px] min-h-[64px] flex items-center justify-center border-2 border-red-300/30">
          {/* Phone Icon */}
          <Phone className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-lg" />
          
          {/* Sparkle Effect */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-3000"></div>
        </div>
        
        {/* Enhanced Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2 whitespace-nowrap hidden sm:block shadow-xl border border-red-400/30">
          <span className="font-semibold">📞 Call Now</span>
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-600"></div>
        </div>
      </a>



      {/* Consultation Form Modal */}
      <RiskAssessmentForm isOpen={isFormOpen} onClose={closeForm} />
    </section>
  );
};

export default Hero;