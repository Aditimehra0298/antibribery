import React, { useState } from 'react';
import { X, Building, Shield, Users, FileText, DollarSign, AlertTriangle, CheckCircle } from 'lucide-react';

const RiskAssessmentForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    // Basic Company Details
    companyName: '',
    businessType: '',
    locations: '',
    yearsInOperation: '',
    employeeCount: '',
    
    // Governance & Compliance
    hasAntiBriberyPolicy: '',
    policyLastUpdated: '',
    staffTrainingFrequency: '',
    trainingCompletionRate: '',
    hasEnforcementMechanisms: '',
    hasWhistleblowingPolicy: '',
    whistleblowingChannels: '',
    
    // Ownership & Management
    governmentOfficialLinks: '',
    pastBriberyCases: '',
    dealingsWithOfficials: '',
    politicalDonations: '',
    
    // Third Party & Intermediaries
    usesAgents: '',
    agentCount: '',
    dueDiligenceProcess: '',
    transparencyLevel: '',
    commissionPayments: '',
    
    // Financial Controls & Audits
    hasFinancialControls: '',
    auditFrequency: '',
    segregationOfDuties: '',
    expenseApprovalProcess: '',
    
    // Risk Management
    highRiskAreas: '',
    giftPolicy: '',
    hospitalityPolicy: '',
    donationPolicy: '',
    riskAssessmentFrequency: '',
    
    // Additional Information
    additionalRisks: '',
    complianceChallenges: '',
    
    // Declaration
    declaration: false,
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    signature: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitToGoogleSheets = async (data: typeof formData) => {
    try {
      console.log('Submitting data to Google Sheets:', data);
      
      // Convert data to FormData (this bypasses CORS issues)
      const formData = new FormData();
      formData.append('formType', 'Risk Assessment Form');
      
      // Add all form fields
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, String(value));
      });

      const response = await fetch('https://script.google.com/macros/s/AKfycbzskEqT64mVFOb2kcj3cWK_DNQbTV2zwcPJURXK9Z5WGarQeYjJAS5q5TUw34yttBB_/exec', {
        method: 'POST',
        body: formData, // Use FormData instead of JSON
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response not OK:', errorText);
        throw new Error(`Failed to submit form: ${response.status} ${errorText}`);
      }

      const result = await response.text();
      console.log('Google Sheets response:', result);
      return result;
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitToGoogleSheets(formData);
      console.log('Form submitted successfully to Google Sheets');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to submit form:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      companyName: '',
      businessType: '',
      locations: '',
      yearsInOperation: '',
      employeeCount: '',
      hasAntiBriberyPolicy: '',
      policyLastUpdated: '',
      staffTrainingFrequency: '',
      trainingCompletionRate: '',
      hasEnforcementMechanisms: '',
      hasWhistleblowingPolicy: '',
      whistleblowingChannels: '',
      governmentOfficialLinks: '',
      pastBriberyCases: '',
      dealingsWithOfficials: '',
      politicalDonations: '',
      usesAgents: '',
      agentCount: '',
      dueDiligenceProcess: '',
      transparencyLevel: '',
      commissionPayments: '',
      hasFinancialControls: '',
      auditFrequency: '',
      segregationOfDuties: '',
      expenseApprovalProcess: '',
      highRiskAreas: '',
      giftPolicy: '',
      hospitalityPolicy: '',
      donationPolicy: '',
      riskAssessmentFrequency: '',
      additionalRisks: '',
      complianceChallenges: '',
      declaration: false,
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      signature: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  // Show thank you page after submission
  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <div className="bg-gray-900 rounded-3xl max-w-2xl w-full p-8 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          {/* Thank You Message */}
          <h2 className="text-3xl font-bold text-white mb-6">
            Thank You for Your Submission!
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Your anti-bribery risk assessment form has been successfully submitted. Our compliance experts will review your information and prepare a comprehensive analysis.
          </p>

          {/* Next Steps */}
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-400 mb-4">What Happens Next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-200">We'll review your submission within 24 hours</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-200">Our team will contact you to schedule a consultation</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-200">You'll receive a detailed risk assessment report</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-200">We'll provide actionable recommendations for improvement</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-800/50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-white mb-4">Need Immediate Assistance?</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 <span className="text-blue-400">audits@eurocert.in</span></p>
                              <p>📞 <span className="text-blue-400">+91-9779665056</span></p>
              <p>⏰ <span className="text-green-400">24/7 Emergency Support Available</span></p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleClose}
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25 flex items-center space-x-3 justify-center"
            >
              <span>Close</span>
              <X className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => {
                setIsSubmitted(false);
                // Reset form to allow another submission
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center space-x-3 justify-center"
            >
              <span>Submit Another Form</span>
              <CheckCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900 rounded-t-3xl p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Anti-Bribery Risk Assessment Form</h2>
                <p className="text-gray-400">Complete this form to receive your comprehensive risk assessment</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          
          {/* Basic Company Details */}
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <Building className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Basic Company Details</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Company Name *</label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter company name"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Business Type *</label>
                <select
                  required
                  value={formData.businessType}
                  onChange={(e) => handleInputChange('businessType', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select business type</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="financial">Financial Services</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="technology">Technology</option>
                  <option value="government">Government Contracts</option>
                  <option value="export">Export/Import</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Years in Operation *</label>
                <select
                  required
                  value={formData.yearsInOperation}
                  onChange={(e) => handleInputChange('yearsInOperation', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select years</option>
                  <option value="0-5">0-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="11-20">11-20 years</option>
                  <option value="21-50">21-50 years</option>
                  <option value="50+">50+ years</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Number of Employees</label>
                <select
                  value={formData.employeeCount}
                  onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select employee count</option>
                  <option value="1-50">1-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-1000">201-1000</option>
                  <option value="1001-5000">1001-5000</option>
                  <option value="5000+">5000+</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-white font-medium mb-2">Operating Locations</label>
                <textarea
                  value={formData.locations}
                  onChange={(e) => handleInputChange('locations', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="List all countries and regions where you operate"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Governance & Compliance */}
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-bold text-white">Governance & Compliance</h3>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Do you have an Anti-Bribery Policy? *</label>
                  <select
                    required
                    value={formData.hasAntiBriberyPolicy}
                    onChange={(e) => handleInputChange('hasAntiBriberyPolicy', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="in-progress">In Progress</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">When was it last updated?</label>
                  <input
                    type="date"
                    value={formData.policyLastUpdated}
                    onChange={(e) => handleInputChange('policyLastUpdated', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Staff Training Frequency</label>
                  <select
                    value={formData.staffTrainingFrequency}
                    onChange={(e) => handleInputChange('staffTrainingFrequency', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select frequency</option>
                    <option value="annually">Annually</option>
                    <option value="bi-annually">Bi-annually</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="never">Never</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Training Completion Rate (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={formData.trainingCompletionRate}
                    onChange={(e) => handleInputChange('trainingCompletionRate', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="0-100"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Do you have enforcement mechanisms? *</label>
                  <select
                    required
                    value={formData.hasEnforcementMechanisms}
                    onChange={(e) => handleInputChange('hasEnforcementMechanisms', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="partial">Partial</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Do you have a whistleblowing policy? *</label>
                  <select
                    required
                    value={formData.hasWhistleblowingPolicy}
                    onChange={(e) => handleInputChange('hasWhistleblowingPolicy', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="in-progress">In Progress</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Describe your whistleblowing channels</label>
                <textarea
                  value={formData.whistleblowingChannels}
                  onChange={(e) => handleInputChange('whistleblowingChannels', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Describe how employees can report concerns"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Ownership & Management */}
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Ownership & Management</h3>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Any links to government officials? *</label>
                  <select
                    required
                    value={formData.governmentOfficialLinks}
                    onChange={(e) => handleInputChange('governmentOfficialLinks', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="unsure">Unsure</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Past bribery cases? *</label>
                  <select
                    required
                    value={formData.pastBriberyCases}
                    onChange={(e) => handleInputChange('pastBriberyCases', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="investigation">Under Investigation</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Describe dealings with government officials</label>
                <textarea
                  value={formData.dealingsWithOfficials}
                  onChange={(e) => handleInputChange('dealingsWithOfficials', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Describe any interactions with government officials, contracts, permits, etc."
                  rows={3}
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Political donations policy</label>
                <textarea
                  value={formData.politicalDonations}
                  onChange={(e) => handleInputChange('politicalDonations', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Describe your policy on political donations and contributions"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Third Party & Intermediaries */}
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-6 h-6 text-orange-400" />
              <h3 className="text-xl font-bold text-white">Third Party & Intermediaries</h3>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Do you use agents/intermediaries? *</label>
                  <select
                    required
                    value={formData.usesAgents}
                    onChange={(e) => handleInputChange('usesAgents', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="occasionally">Occasionally</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Number of agents (if applicable)</label>
                  <input
                    type="number"
                    min="0"
                    value={formData.agentCount}
                    onChange={(e) => handleInputChange('agentCount', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="0"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Describe your due diligence process</label>
                <textarea
                  value={formData.dueDiligenceProcess}
                  onChange={(e) => handleInputChange('dueDiligenceProcess', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Describe how you vet and monitor third parties"
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Transparency level with agents</label>
                  <select
                    value={formData.transparencyLevel}
                    onChange={(e) => handleInputChange('transparencyLevel', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select level</option>
                    <option value="high">High - Full disclosure</option>
                    <option value="medium">Medium - Partial disclosure</option>
                    <option value="low">Low - Minimal disclosure</option>
                    <option value="none">None</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Commission payment policy</label>
                  <textarea
                    value={formData.commissionPayments}
                    onChange={(e) => handleInputChange('commissionPayments', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Describe your policy on commission payments"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Financial Controls & Audits */}
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <DollarSign className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-bold text-white">Financial Controls & Audits</h3>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Do you have financial controls? *</label>
                  <select
                    required
                    value={formData.hasFinancialControls}
                    onChange={(e) => handleInputChange('hasFinancialControls', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select answer</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="partial">Partial</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Audit frequency</label>
                  <select
                    value={formData.auditFrequency}
                    onChange={(e) => handleInputChange('auditFrequency', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select frequency</option>
                    <option value="annually">Annually</option>
                    <option value="bi-annually">Bi-annually</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="never">Never</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Segregation of duties</label>
                  <select
                    value={formData.segregationOfDuties}
                    onChange={(e) => handleInputChange('segregationOfDuties', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select level</option>
                    <option value="full">Full segregation</option>
                    <option value="partial">Partial segregation</option>
                    <option value="minimal">Minimal segregation</option>
                    <option value="none">None</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Expense approval process</label>
                  <textarea
                    value={formData.expenseApprovalProcess}
                    onChange={(e) => handleInputChange('expenseApprovalProcess', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Describe your expense approval process"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Risk Management */}
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-bold text-white">Risk Management</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">High-risk areas in your business</label>
                <textarea
                  value={formData.highRiskAreas}
                  onChange={(e) => handleInputChange('highRiskAreas', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Describe areas of your business that may be vulnerable to bribery"
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Gift policy</label>
                  <textarea
                    value={formData.giftPolicy}
                    onChange={(e) => handleInputChange('giftPolicy', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Describe your gift policy"
                    rows={3}
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Hospitality policy</label>
                  <textarea
                    value={formData.hospitalityPolicy}
                    onChange={(e) => handleInputChange('hospitalityPolicy', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Describe your hospitality policy"
                    rows={3}
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Donation policy</label>
                  <textarea
                    value={formData.donationPolicy}
                    onChange={(e) => handleInputChange('donationPolicy', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Describe your donation policy"
                    rows={3}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Risk assessment frequency</label>
                <select
                  value={formData.riskAssessmentFrequency}
                  onChange={(e) => handleInputChange('riskAssessmentFrequency', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select frequency</option>
                  <option value="annually">Annually</option>
                  <option value="bi-annually">Bi-annually</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="never">Never</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Additional Information</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Additional risks or concerns</label>
                <textarea
                  value={formData.additionalRisks}
                  onChange={(e) => handleInputChange('additionalRisks', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Any other risks or concerns you'd like us to address"
                  rows={3}
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Compliance challenges</label>
                <textarea
                  value={formData.complianceChallenges}
                  onChange={(e) => handleInputChange('complianceChallenges', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Describe any challenges you face in maintaining compliance"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Contact Information & Declaration */}
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Contact Information & Declaration</h3>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Contact Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => handleInputChange('contactName', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Contact Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.contactEmail}
                    onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Contact Phone</label>
                <input
                  type="tel"
                  value={formData.contactPhone}
                  onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-red-900/20 border border-red-500/30 rounded-xl">
                <input
                  type="checkbox"
                  required
                  checked={formData.declaration}
                  onChange={(e) => handleInputChange('declaration', e.target.checked)}
                  className="mt-1 w-5 h-5 text-red-600 bg-gray-700 border-gray-600 rounded focus:ring-red-500 focus:ring-2"
                />
                <div>
                  <label className="block text-white font-medium mb-2">Declaration *</label>
                  <p className="text-gray-300 text-sm">
                    I declare that the information provided in this form is accurate and complete to the best of my knowledge. 
                    I understand that this information will be used for risk assessment purposes and will be treated confidentially.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-12 py-4 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-2xl hover:shadow-blue-500/50 flex items-center space-x-3 mx-auto disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Submit Risk Assessment Form</span>
                  <CheckCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RiskAssessmentForm; 