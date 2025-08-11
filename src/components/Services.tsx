import React from 'react';
import { Search, Shield, FileText, Users, CheckCircle, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Gap Analysis",
      description: "Comprehensive assessment to spot vulnerabilities in your anti-bribery systems",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Legal Risk Mitigation",
      description: "Reduce exposure to prosecution, fines, and regulatory penalties",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Actionable Report",
      description: "Clear, practical steps with no jargon – just results you can implement",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Stakeholder Confidence",
      description: "Protect investor, partner, and public trust in your organization",
      color: "from-orange-500 to-red-500"
    }
  ];

  const complianceItems = [
    "Develop and enforce strict anti-bribery policies",
    "Deliver tailored anti-bribery training programs",
    "Implement comprehensive Gifts and Hospitality Register",
    "Establish anonymous whistleblowing channels",
    "Collect compliance declarations from third parties",
    "Conduct regular staff surveys to identify deficiencies",
    "Regular attestation to anti-bribery standards",
    "Strong supply chain due diligence processes"
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* What You Get Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              What You <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">Get</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Comprehensive protection that goes beyond compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/80 backdrop-blur-sm border-2 border-gray-700 rounded-2xl p-6 hover:border-blue-400 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Enhanced Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"></div>
                
                {/* Icon with Enhanced Animation */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-pulse-slow shadow-lg`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                  {/* Icon Glow Effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Enhanced Content with Better Visibility */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-105">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed group-hover:text-white transition-all duration-300 text-base">
                    {service.description}
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
        </div>

        {/* UK Bribery Act Compliance Section */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 lg:p-12 animate-fade-in-up animation-delay-800 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-red-900/30 border border-red-500/50 rounded-full px-4 py-2 mb-6 animate-pulse hover:animate-bounce transition-all duration-300">
                <Shield className="w-5 h-5 text-red-400" />
                <span className="text-red-300 text-sm font-medium">UK Bribery Act 2010</span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6 animate-fade-in-up">
                Comprehensive Anti-Bribery Compliance
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3 animate-fade-in-left animation-delay-300">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0 animate-ping"></div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Strict Liability:</span> Companies face prosecution even without management knowledge
                  </p>
                </div>
                <div className="flex items-start space-x-3 animate-fade-in-left animation-delay-500">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0 animate-ping animation-delay-200"></div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Global Reach:</span> Applies regardless of where the offense occurs
                  </p>
                </div>
                <div className="flex items-start space-x-3 animate-fade-in-left animation-delay-700">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0 animate-ping animation-delay-400"></div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Severe Penalties:</span> Unlimited fines and up to 10 years imprisonment
                  </p>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20 animate-fade-in-up animation-delay-900">
                <h4 className="text-lg font-semibold text-blue-400 mb-3 animate-pulse">Your Only Defense</h4>
                <p className="text-gray-300">
                  Prove you have <span className="font-semibold text-white">"adequate procedures"</span> in place to prevent bribery. 
                  We help you build and document these procedures.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white mb-6 animate-fade-in-up">Adequate Procedures Include:</h4>
              <div className="space-y-4">
                {complianceItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-700/30 transition-all duration-300 animate-fade-in-right hover:transform hover:translate-x-2 hover:scale-105" 
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-200 group-hover:text-white transition-colors duration-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl hover:border-green-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-green-500/20 hover:scale-105 animate-fade-in-up animation-delay-1200">
                <div className="flex items-center space-x-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-green-400 animate-bounce-slow" />
                  <h5 className="text-lg font-semibold text-green-400">Best Practice Implementation</h5>
                </div>
                <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
                  We don't just audit – we help you implement industry-leading practices that exceed regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;