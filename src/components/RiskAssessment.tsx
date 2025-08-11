import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Building, FileText, Eye, ArrowRight, Shield, CheckCircle } from 'lucide-react';

const RiskAssessment = () => {
  const navigate = useNavigate();

  const handleGetAssessment = () => {
    // Navigate to the risk assessment page
    navigate('/risk-assessment');
  };

  const riskFactors = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "High Turnover",
      text: "Have turnover above ₹50Cr",
      description: "Large enterprises face increased regulatory scrutiny"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Complex Operations",
      text: "Handle government contracts, exports, or complex supply chains",
      description: "Multiple touchpoints increase corruption risks"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Public Exposure",
      text: "Face regulatory scrutiny or work in the public eye",
      description: "Reputation damage can be catastrophic"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-8" />,
      title: "Risk Mitigation",
      description: "Identify and eliminate corruption vulnerabilities"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Compliance Assurance",
      description: "Meet international anti-bribery standards"
    }
  ];

  return (
    <section id="risk-assessment" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-red-900/30 border border-red-500/50 rounded-full px-6 py-3 mb-8">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            <span className="text-red-300 font-semibold text-lg">Risk Assessment</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Is Your Company <span className="text-red-400">at Risk?</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Don't wait for a crisis to strike. Proactive risk assessment is your first line of defense against corruption and bribery scandals.
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          
          {/* Left Side - Content */}
          <div className="space-y-12">
            
            {/* Risk Factors Section */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-3xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Risk Indicators</h3>
                <p className="text-lg text-gray-300">Your company may be at risk if you:</p>
              </div>

              <div className="space-y-6">
                {riskFactors.map((factor, index) => (
                  <div
                    key={index}
                    className="group bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">
                          {factor.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-red-300 transition-colors duration-300">
                          {factor.title}
                        </h4>
                        <p className="text-white font-medium mb-2">
                          {factor.text}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {factor.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-700/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Eurocert</span>?</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-blue-800/20 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <div className="text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{benefit.title}</h4>
                      <p className="text-blue-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="relative flex items-center justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/30">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
              >
                <source src="https://videos.openai.com/vg-assets/assets%2Ftask_01k2bqk7v2fzyakcxb342cq8aj%2Ftask_01k2bqk7v2fzyakcxb342cq8aj_genid_8d3e4345-16ee-4168-a5dd-bd197b861eb6_25_08_11_04_53_730909%2Fvideos%2F00000_801351285%2Fmd.mp4?st=2025-08-11T03%3A28%3A18Z&se=2025-08-17T04%3A28%3A18Z&sks=b&skt=2025-08-11T03%3A28%3A18Z&ske=2025-08-17T04%3A28%3A18Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=3VJKBaZXgQVeIMQ9DzFtj6lASrZjf7AgqMMZfPC%2F0Ic%3D&az=oaivgprodscus" type="video/mp4" />
              </video>
              
              {/* Enhanced overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-500/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              This audit isn't optional. <span className="text-red-400">It's essential.</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Protect your business, reputation, and future. Get your comprehensive risk assessment today.
            </p>
            
            <button 
              onClick={handleGetAssessment}
              className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 flex items-center space-x-3 mx-auto"
            >
              <span>Get Your Risk Assessment</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskAssessment;