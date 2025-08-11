import React, { useState } from 'react';
import { ArrowRight, AlertTriangle, Play, X, Phone } from 'lucide-react';
import RiskAssessmentForm from './RiskAssessmentForm';

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onLoadStart={() => console.log('Background video loading started')}
          onLoadedData={() => {
            console.log('Background video loaded successfully');
            setIsVideoLoaded(true);
          }}
          onError={(e) => {
            const target = e.target as HTMLVideoElement;
            console.error('Background video failed to load:', target.src);
            // Fallback to gradient background if video fails
            target.style.display = 'none';
            const fallback = target.nextSibling as HTMLElement;
            if (fallback) fallback.style.display = 'block';
          }}
        >
          <source src="/198896-909564547.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Loading indicator */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="text-white text-center">
              <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-lg font-semibold">Loading Video...</p>
            </div>
          </div>
        )}
        
        {/* Fallback gradient background if video fails */}
        <div className="hidden absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
        {/* Gradient Overlay - Reduced opacity to show video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Warning Badge */}
        <div className="inline-flex items-center space-x-2 bg-red-900/30 border border-red-500/50 rounded-full px-4 py-2 mb-8 animate-pulse hover:animate-bounce transition-all duration-300 hover:scale-105">
          <AlertTriangle className="w-5 h-5 text-red-400" />
          <span className="text-red-300 text-sm font-medium">Eurocert's Anti-Bribery Audit: Mitigate risks, ensure compliance, and uphold ethics.</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
          Protect Your Business from
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Bribery & Corruption
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">Eurocert</span> Anti-Bribery & Corruption Audit for Large Indian Enterprises 
        </p>

        {/* Key Message */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
          <p className="text-lg text-gray-200 leading-relaxed">
            One bribery scandal can destroy brand value and open you up to lawsuits, penalties, and global scrutiny. 
            <span className="text-blue-400 font-semibold animate-pulse"> Don't leave your reputation to chance.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-900">
          <button 
            onClick={openForm}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-blue-500/50 flex items-center space-x-2 group"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button 
            onClick={openVideo}
            className="border-2 border-gray-600 hover:border-blue-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:bg-blue-400/20 hover:shadow-lg hover:shadow-blue-400/25 flex items-center space-x-2 hover:scale-105 group"
          >
            <Play className="w-5 h-5" />
            <span>Learn More</span>
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

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Video Player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                controls
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLVideoElement;
                  console.error('Learn More video failed to load:', target.src);
                  // Show error message if video fails
                  target.style.display = 'none';
                  const errorDiv = target.nextSibling as HTMLElement;
                  if (errorDiv) errorDiv.style.display = 'block';
                }}
              >
                <source src="/anti-bribery-compliance-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Error message if video fails */}
              <div className="hidden w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎥</div>
                  <h3 className="text-xl font-bold mb-2">Video Loading Issue</h3>
                  <p className="text-gray-300">Please refresh the page or try again later.</p>
                </div>
              </div>
            </div>
            
            {/* Video Title */}
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Are You Compliant? Anti-Bribery Laws
              </h3>
              <p className="text-gray-300">
                Learn about the critical importance of anti-bribery compliance for your business
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Risk Assessment Form Modal */}
      <RiskAssessmentForm isOpen={isFormOpen} onClose={closeForm} />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919779665056"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group"
        aria-label="Contact us on WhatsApp"
      >
        <div className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[56px] min-h-[56px] flex items-center justify-center">
          <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </div>
        {/* Tooltip - Hidden on mobile */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
          Chat on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </a>

      {/* Floating Phone Button */}
      <a
        href="tel:+919779665056"
        className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 group"
        aria-label="Call us"
      >
        <div className="bg-red-500 hover:bg-red-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[56px] min-h-[56px] flex items-center justify-center">
          <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        {/* Tooltip - Hidden on mobile */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
          Call Now
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;