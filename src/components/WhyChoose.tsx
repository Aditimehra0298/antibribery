import React from 'react';
import { Award, Globe, Shield, Users, CheckCircle, Star } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Globally Accredited",
      description: "25+ years of excellence, recognized in 40+ countries worldwide",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "ISO 37001 Aligned",
      description: "Fully aligned to the global Anti-Bribery & Anti-Corruption standard",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Independent & Confidential",
      description: "No conflicts of interest. Complete confidentiality guaranteed",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Fortune 500 Trusted",
      description: "Trusted by Fortune 500 companies and leading Indian enterprises",
      color: "from-orange-500 to-red-500"
    }
  ];

  const industries = [
    "Healthcare & Pharmaceuticals",
    "Real Estate & Construction", 
    "Banking & Financial Services",
    "Freight & Logistics",
    "Manufacturing & IT",
    "Retail & FMCG",
    "Education & Research"
  ];

  return (
    <section id="why-choose" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Why Choose <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">Eurocert?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            We're not just auditors – we're your partners in building an unshakeable reputation
          </p>
        </div>

        {/* New Content Section */}
        <div className="mb-16 space-y-8">
          {/* Tailored Services */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 animate-fade-in-up animation-delay-400">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <CheckCircle className="w-8 h-8 text-blue-400 mr-3" />
              Tailored for High-Revenue Private Companies
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              We specialize in audits for businesses with revenues over <span className="text-blue-400 font-semibold">₹50 Crore</span>. 
              Our expertise is designed to meet the unique compliance challenges faced by large-scale enterprises.
            </p>
          </div>

          {/* High-Risk Sectors */}
          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 animate-fade-in-up animation-delay-500">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-8 h-8 text-red-400 mr-3" />
              High-Risk Sectors
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              We focus on industries with elevated corruption risks:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {["Real Estate", "Banking", "Healthcare", "Freight & Logistics", "Manufacturing"].map((sector, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-200">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>{sector}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Focus */}
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 animate-fade-in-up animation-delay-600">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Star className="w-8 h-8 text-green-400 mr-3" />
              Ensure Compliance
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              Protect your brand and avoid costly legal consequences. Our comprehensive audits identify vulnerabilities 
              and provide actionable solutions to strengthen your anti-bribery framework.
            </p>
          </div>

          {/* Industries We Serve */}
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 animate-fade-in-up animation-delay-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Industries We Serve
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="group bg-gray-800/50 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full group-hover:bg-purple-300 transition-colors duration-300"></div>
                    <span className="text-gray-200 group-hover:text-white transition-colors duration-300 font-medium">
                      {industry}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/80 backdrop-blur-sm border-2 border-gray-700 rounded-2xl p-6 hover:border-blue-400 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Enhanced Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"></div>
              
              {/* Icon with Enhanced Animation */}
              <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-pulse-slow shadow-lg`}>
                <div className="text-white">
                  {feature.icon}
                </div>
                {/* Icon Glow Effect */}
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Enhanced Content with Better Visibility */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-105">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-relaxed group-hover:text-white transition-all duration-300 text-base">
                  {feature.description}
                </p>
              </div>

              {/* Enhanced Hover Border Animation */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
                <div className="absolute inset-[2px] rounded-2xl bg-gray-800/95"></div>
              </div>

              {/* Touch-friendly Hover Indicator */}
              <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 animate-fade-in-up animation-delay-1000 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 animate-fade-in-up">
              <span className="text-yellow-400 animate-pulse">TRUSTED.</span>{' '}
              <span className="text-blue-400 animate-pulse animation-delay-300">ACCREDITED.</span>{' '}
              <span className="text-green-400 animate-pulse animation-delay-600">ENDORSED.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center group hover:transform hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500 animate-bounce-slow">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">Certified by International Bodies</h4>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Globally recognized certifications and accreditations</p>
            </div>

            <div className="flex flex-col items-center group hover:transform hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500 animate-bounce-slow animation-delay-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">25+ Years of Excellence</h4>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Decades of proven expertise and reliability</p>
            </div>

            <div className="flex flex-col items-center group hover:transform hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500 animate-bounce-slow animation-delay-600">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">Fortune 500 Leaders</h4>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Chosen by the world's most successful companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;