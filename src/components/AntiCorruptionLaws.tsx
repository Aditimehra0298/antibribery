import React from 'react';
import { Scale, Building2, Shield, FileText } from 'lucide-react';

const AntiCorruptionLaws = () => {
  const laws = [
    {
      id: 1,
      title: "The Prevention of Corruption (Amendment) Act, 2018",
      overview: "Amended to broaden the scope of offenses related to bribery and corruption. It includes provisions that criminalize the act of taking or giving a bribe, including for corporate bodies.",
      relevance: "This law strengthens anti-corruption measures and is critical for businesses looking to implement ABC audits, ensuring that both public and private sector companies comply with anti-bribery standards.",
      icon: <Scale className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-900/20 to-orange-900/20",
      borderColor: "border-red-500/30"
    },
    {
      id: 2,
      title: "The Companies (Amendment) Act, 2017",
      overview: "Includes stricter provisions regarding corporate governance and compliance, including penalties for companies engaging in fraudulent activities.",
      relevance: "This act covers issues related to corruption, including fraud prevention, and aligns corporate compliance practices with anti-bribery policies.",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-900/20 to-cyan-900/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 3,
      title: "The Prevention of Corruption (Amendment) Bill, 2022",
      overview: "Introduces measures for dealing with corruption in the private sector, including penalties for companies that engage in bribery and corruption.",
      relevance: "This amendment strengthens anti-bribery compliance across all sectors, particularly impacting businesses with high revenues, which will require audits to ensure compliance.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-900/20 to-emerald-900/20",
      borderColor: "border-green-500/30"
    }
  ];

  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      {/* Indian National Emblem Background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://indiafirstfoundation.wordpress.com/wp-content/uploads/2010/07/175px-emblem_of_india-svg.png')`,
            backgroundSize: '400px',
            backgroundPosition: 'center',
            filter: 'brightness(0.8) contrast(1.2)'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Anti-Corruption Laws
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Understanding the legal framework that governs anti-bribery compliance in India
          </p>
        </div>

        {/* Moving Grid Container */}
        <div className="relative">
          {/* Moving Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-slide-right-to-left">
            {laws.map((law, index) => (
              <div
                key={law.id}
                className={`group relative bg-gradient-to-br ${law.bgColor} backdrop-blur-sm border-2 ${law.borderColor} rounded-2xl p-8 hover:border-white/50 transition-all duration-700 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Enhanced Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${law.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-700 group-hover:scale-105`}></div>
                
                {/* Icon with Enhanced Animation */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${law.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-pulse-slow shadow-lg`}>
                  <div className="text-white">
                    {law.icon}
                  </div>
                  {/* Icon Glow Effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-105 leading-tight">
                    {law.title}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wide">
                        Overview
                      </h4>
                      <p className="text-gray-200 leading-relaxed text-sm">
                        {law.overview}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2 uppercase tracking-wide">
                        Relevance
                      </h4>
                      <p className="text-gray-200 leading-relaxed text-sm">
                        {law.relevance}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Hover Border Animation */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${law.color} animate-spin-slow`}></div>
                  <div className="absolute inset-[2px] rounded-2xl bg-gray-900/95"></div>
                </div>

                {/* Touch-friendly Hover Indicator */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
              </div>
            ))}
          </div>

          {/* Floating Legal Document Icon */}
          <div className="absolute -top-8 -right-8 opacity-20 animate-float">
            <FileText className="w-32 h-32 text-blue-400" />
          </div>
          
          <div className="absolute -bottom-8 -left-8 opacity-20 animate-float animation-delay-1000">
            <Scale className="w-24 h-24 text-green-400" />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-2xl mx-auto hover:border-blue-500/50 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Compliant with <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Eurocert</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Our expert auditors ensure your business meets all legal requirements and maintains the highest standards of corporate governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Legal Compliance</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-300"></div>
                <span className="text-sm font-medium">Risk Mitigation</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-600"></div>
                <span className="text-sm font-medium">Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AntiCorruptionLaws; 