import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import RiskAssessmentForm from './RiskAssessmentForm';

const RiskAssessmentPage = () => {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const goBack = () => {
    navigate(-1);
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={goBack}
            className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-lg font-medium">Back to Risk Assessment</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Anti-Bribery <span className="text-blue-400">Risk Assessment Guide</span>
            </h1>
          </div>
          
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>

        {/* Introduction */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-900/30 border border-blue-500/50 rounded-full px-6 py-3 mb-8">
            <span className="text-blue-300 font-semibold text-lg">Professional Guide</span>
          </div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Performing a comprehensive anti-bribery risk assessment is essential for protecting your business from regulatory, financial, and reputational risks. Here's a step-by-step guide tailored for organizations seeking to enhance their anti-bribery compliance.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Step 1 */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Define Scope and Objectives</h3>
                <ul className="text-gray-300 space-y-3 text-lg">
                  <li>• Determine which areas (business units, geographies, operations) the assessment will cover.</li>
                  <li>• Set clear goals—such as identifying bribery risks in third-party relationships, procurement, or sales processes.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Gather Information</h3>
                <ul className="text-gray-300 space-y-3 text-lg">
                  <li>• Review company policies and procedures: Examine the current Code of Conduct, anti-bribery policy, and internal controls.</li>
                  <li>• Collect business data: Contracts, financial records, interaction logs with public officials, and third-party engagements.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Identify Risk Factors</h3>
                <p className="text-gray-300 mb-4 text-lg">Map out areas vulnerable to bribery, including:</p>
                <ul className="text-gray-300 space-y-3 text-lg">
                  <li>• High-risk transactions (e.g., government contracts)</li>
                  <li>• Countries/sectors with elevated corruption risk</li>
                  <li>• Use of intermediaries, agents, or joint ventures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Assess Current Controls</h3>
                <p className="text-gray-300 mb-4 text-lg">Evaluate existing controls for effectiveness:</p>
                <ul className="text-gray-300 space-y-3 text-lg">
                  <li>• Due diligence procedures for partners</li>
                  <li>• Financial controls and segregation of duties</li>
                  <li>• Reporting channels for concerns</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Interview Key Personnel</h3>
                <p className="text-gray-300 text-lg">
                  Speak with staff in high-risk departments (sales, procurement, finance) and those interacting with public officials or third parties.
                </p>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                6
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Evaluate and Prioritize Risks</h3>
                <ul className="text-gray-300 space-y-3 text-lg">
                  <li>• Use risk assessment tools (checklists, scoring matrices) to rate likelihood and impact of potential bribery scenarios.</li>
                  <li>• Prioritize high-impact, high-likelihood risks for immediate action.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                7
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Document Findings</h3>
                <ul className="text-gray-300 space-y-3 text-lg">
                  <li>• Prepare a report summarizing identified risks, vulnerabilities, and weaknesses in current controls.</li>
                  <li>• Include recommendations for remediation.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 8 */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                8
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Develop and Implement Action Plans</h3>
                <ul className="text-gray-300 space-y-3 text-lg">
                  <li>• Assign responsibility for mitigating risks.</li>
                  <li>• Update policies, procedures, training, and monitoring systems as necessary.</li>
                  <li>• Schedule regular reassessment.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 9 */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                9
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Monitor and Review</h3>
                <ul className="text-gray-300 space-y-3 text-lg">
                  <li>• Continuously monitor relevant activities and control effectiveness.</li>
                  <li>• Conduct periodic risk assessments to ensure ongoing compliance as business and legal environments change.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tip Section */}
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-3xl p-10 mb-16">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-3xl">💡</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Pro Tip</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                Many organizations use third-party experts or compliance platforms for an objective, structured risk assessment and benefit from benchmarking against industry best practices.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-gray-800/40 to-gray-700/40 border border-gray-600 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Why This Matters
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Conducting a thorough risk assessment not only ensures compliance with laws like the FCPA and UK Bribery Act, but also demonstrates your organization's commitment to integrity and transparency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-xl">
                <h4 className="text-green-400 font-semibold mb-2">Legal Compliance</h4>
                <p className="text-gray-300 text-sm">Meet regulatory requirements</p>
              </div>
              <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl">
                <h4 className="text-blue-400 font-semibold mb-2">Risk Mitigation</h4>
                <p className="text-gray-300 text-sm">Protect your business</p>
              </div>
              <div className="p-4 bg-purple-900/20 border border-purple-500/30 rounded-xl">
                <h4 className="text-purple-400 font-semibold mb-2">Reputation</h4>
                <p className="text-gray-300 text-sm">Build trust & credibility</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-500/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
                              Let <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">Eurocert</span> help you conduct a comprehensive anti-bribery risk assessment for your organization.
            </p>
            
            <button 
              onClick={openForm}
              className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 flex items-center space-x-3 mx-auto"
            >
              <span>Book Your Risk Assessment</span>
              <ArrowLeft className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300 rotate-180" />
            </button>
          </div>
        </div>
      </div>

      {/* Risk Assessment Form Modal */}
      <RiskAssessmentForm isOpen={isFormOpen} onClose={closeForm} />
    </div>
  );
};

export default RiskAssessmentPage; 