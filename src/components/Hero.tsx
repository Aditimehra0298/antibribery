import React from 'react';
import { ArrowRight, Shield, AlertTriangle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="https://cdn.pixabay.com/video/2024/02/02/198896-909564547_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Alert Badge */}
          <div className="inline-flex items-center space-x-2 bg-red-900/30 border border-red-500/50 rounded-full px-4 py-2 mb-8 animate-pulse hover:animate-bounce transition-all duration-300 hover:scale-105">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="text-red-300 text-sm font-medium">One scandal can destroy everything</span>
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
            Eurocert Anti-Bribery & Corruption Audit for Large Indian Enterprises (₹50Cr+ Turnover)
          </p>

          {/* Key Message */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <p className="text-lg text-gray-200 leading-relaxed">
              One bribery scandal can destroy brand value and open you up to lawsuits, penalties, and global scrutiny. 
              <span className="text-blue-400 font-semibold animate-pulse"> Don't leave your reputation to chance.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-1000">
            <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/50 flex items-center space-x-2 animate-bounce-slow hover:animate-none relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span>Book Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            <button className="border-2 border-gray-600 hover:border-blue-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:bg-blue-400/20 hover:shadow-lg hover:shadow-blue-400/25 flex items-center space-x-2 hover:scale-105 group">
              <Shield className="w-5 h-5" />
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
    </section>
  );
};

export default Hero;