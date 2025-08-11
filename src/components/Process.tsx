import React, { useState } from 'react';
import { Phone, Search, FileText, Headphones, ArrowRight } from 'lucide-react';
import RiskAssessmentForm from './RiskAssessmentForm';

const Process = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const steps = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Free Risk Consultation",
      description: "Initial assessment of your compliance needs and risk exposure",
      color: "from-blue-500 to-cyan-500",
      step: "01"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Remote/On-site Audit",
      description: "Evidence-based, comprehensive audit with minimal disruption to your operations",
      color: "from-purple-500 to-pink-500",
      step: "02"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Priority Report",
      description: "Clear, actionable recommendations with implementation timelines",
      color: "from-green-500 to-emerald-500",
      step: "03"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Comprehensive Support",
      description: "Ongoing guidance to help you close compliance gaps effectively",
      color: "from-orange-500 to-red-500",
      step: "04"
    }
  ];

  return (
    <section id="process" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            How Our Audit <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A streamlined, professional process designed for busy executives
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center border-4 border-black">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>

                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-600" />
                  </div>
                )}

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <div className="w-px h-8 bg-gray-600"></div>
                  </div>
                )}

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Timeline for larger screens */}
          <div className="hidden lg:block mt-16">
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2"></div>
              <div className="flex justify-between items-center">
                {steps.map((_, index) => (
                  <div key={index} className="w-4 h-4 bg-gray-700 rounded-full border-2 border-gray-600"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Don't wait for a crisis. Book your free consultation today and take the first step toward bulletproof compliance.
            </p>
            <button 
              onClick={openForm}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2 mx-auto"
            >
              <span>Start Your Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Risk Assessment Form Modal */}
      <RiskAssessmentForm isOpen={isFormOpen} onClose={closeForm} />
    </section>
  );
};

export default Process;