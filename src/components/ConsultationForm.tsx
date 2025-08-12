import React, { useState } from 'react';
import { X, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

// Google Apps Script Web App URL
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzskEqT64mVFOb2kcj3cWK_DNQbTV2zwcPJURXK9Z5WGarQeYjJAS5q5TUw34yttBB_/exec';

const ConsultationForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    // Basic Contact Information
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    jobTitle: '',
    industry: '',
    
    // Company Details
    companySize: '',
    annualTurnover: '',
    locations: '',
    yearsInOperation: '',
    
    // Compliance Information
    hasComplianceProgram: '',
    currentComplianceStatus: '',
    specificConcerns: '',
    urgencyLevel: '',
    
    // Service Requirements
    servicesNeeded: [],
    timeline: '',
    budget: '',
    
    // Additional Information
    message: '',
    howDidYouHear: '',
    preferredContactMethod: '',
    preferredContactTime: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
    show: boolean;
  } | null>(null);

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const showNotification = (type: 'success' | 'error' | 'info', message: string) => {
    setNotification({ type, message, show: true });
    setTimeout(() => {
      setNotification({ type, message, show: false });
    }, 5000);
  };

  const submitToGoogleSheets = async (data: typeof formData) => {
    try {
      console.log('Submitting data to Google Sheets:', data);
      console.log('Google Sheets URL:', GOOGLE_SHEETS_URL);
      
      // Convert data to FormData (this bypasses CORS issues)
      const formDataToSend = new FormData();
      formDataToSend.append('formType', 'Comprehensive Consultation Request');
      
      // Add all form fields
      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          formDataToSend.append(key, value.join(', '));
        } else {
          formDataToSend.append(key, String(value));
        }
      });

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        body: formDataToSend, // Use FormData instead of JSON
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
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
    setNotification(null);

    try {
      await submitToGoogleSheets(formData);
      showNotification('success', 'Form submitted successfully! You will receive a confirmation email shortly.');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      showNotification('error', `Failed to submit form: ${error instanceof Error ? error.message : 'Unknown error'}`);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setNotification(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      jobTitle: '',
      industry: '',
      companySize: '',
      annualTurnover: '',
      locations: '',
      yearsInOperation: '',
      hasComplianceProgram: '',
      currentComplianceStatus: '',
      specificConcerns: '',
      urgencyLevel: '',
      servicesNeeded: [],
      timeline: '',
      budget: '',
      message: '',
      howDidYouHear: '',
      preferredContactMethod: '',
      preferredContactTime: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  // Show thank you message after submission
  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <div className="bg-gray-900 rounded-3xl max-w-md w-full p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>

          {/* Thank You Message */}
          <h2 className="text-2xl font-bold text-white mb-4">
            Thank You!
          </h2>
          
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Your comprehensive consultation request has been submitted successfully. Our team will contact you within 24 hours to schedule your free consultation.
          </p>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-gray-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 border border-gray-700 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Form Title */}
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Comprehensive Consultation Request
        </h2>

        {/* Notification Popup */}
        {notification && notification.show && (
          <div className={`mb-6 p-4 rounded-lg border ${
            notification.type === 'success' 
              ? 'bg-green-900/50 border-green-500/30 text-green-300' 
              : notification.type === 'error'
              ? 'bg-red-900/50 border-red-500/30 text-red-300'
              : 'bg-blue-900/50 border-blue-500/30 text-blue-300'
          } flex items-center space-x-3`}>
            {notification.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-400" />
            ) : notification.type === 'error' ? (
              <AlertCircle className="w-5 h-5 text-red-400" />
            ) : (
              <AlertCircle className="w-5 h-5 text-blue-400" />
            )}
            <span className="text-sm font-medium">{notification.message}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Information Section */}
          <div className="bg-gray-800/30 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</div>
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Job Title</label>
                <input
                  type="text"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="e.g., CEO, Compliance Officer"
                />
              </div>
            </div>
          </div>

          {/* Company Information Section */}
          <div className="bg-gray-800/30 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</div>
              Company Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Company Name *</label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Industry *</label>
                <select
                  required
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select industry</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                  <option value="Retail">Retail</option>
                  <option value="Construction">Construction</option>
                  <option value="Energy">Energy</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Company Size</label>
                <select
                  value={formData.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select company size</option>
                  <option value="1-50">1-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1001-5000">1001-5000 employees</option>
                  <option value="5000+">5000+ employees</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Annual Turnover *</label>
                <select
                  required
                  value={formData.annualTurnover}
                  onChange={(e) => handleInputChange('annualTurnover', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select turnover range</option>
                  <option value="0-50Cr">₹0 - ₹50 Cr</option>
                  <option value="50-100Cr">₹50 Cr - ₹100 Cr</option>
                  <option value="100-500Cr">₹100 Cr - ₹500 Cr</option>
                  <option value="500-1000Cr">₹500 Cr - ₹1000 Cr</option>
                  <option value="1000Cr+">₹1000 Cr+</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Operating Locations</label>
                <input
                  type="text"
                  value={formData.locations}
                  onChange={(e) => handleInputChange('locations', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="e.g., Mumbai, Delhi, Bangalore"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Years in Operation</label>
                <select
                  value={formData.yearsInOperation}
                  onChange={(e) => handleInputChange('yearsInOperation', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select years</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="11-20">11-20 years</option>
                  <option value="20+">20+ years</option>
                </select>
              </div>
            </div>
          </div>

          {/* Compliance Information Section */}
          <div className="bg-gray-800/30 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</div>
              Compliance Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Do you have a compliance program?</label>
                <select
                  value={formData.hasComplianceProgram}
                  onChange={(e) => handleInputChange('hasComplianceProgram', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select answer</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="In Development">In Development</option>
                  <option value="Unsure">Unsure</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Current compliance status</label>
                <select
                  value={formData.currentComplianceStatus}
                  onChange={(e) => handleInputChange('currentComplianceStatus', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select status</option>
                  <option value="Fully Compliant">Fully Compliant</option>
                  <option value="Mostly Compliant">Mostly Compliant</option>
                  <option value="Partially Compliant">Partially Compliant</option>
                  <option value="Non-Compliant">Non-Compliant</option>
                  <option value="Unknown">Unknown</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Urgency Level</label>
                <select
                  value={formData.urgencyLevel}
                  onChange={(e) => handleInputChange('urgencyLevel', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select urgency</option>
                  <option value="Immediate">Immediate (within 1 month)</option>
                  <option value="High">High (within 3 months)</option>
                  <option value="Medium">Medium (within 6 months)</option>
                  <option value="Low">Low (within 1 year)</option>
                  <option value="Planning">Just planning ahead</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-white font-medium mb-2">Specific compliance concerns or challenges</label>
              <textarea
                value={formData.specificConcerns}
                onChange={(e) => handleInputChange('specificConcerns', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                placeholder="Describe your specific compliance concerns, challenges, or areas where you need assistance..."
                rows={4}
              />
            </div>
          </div>

          {/* Service Requirements Section */}
          <div className="bg-gray-800/30 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</div>
              Service Requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Timeline for implementation</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select timeline</option>
                  <option value="Immediate">Immediate</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6-12 months">6-12 months</option>
                  <option value="1+ years">1+ years</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Budget range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="Under 1L">Under ₹1 Lakh</option>
                  <option value="1-5L">₹1-5 Lakhs</option>
                  <option value="5-10L">₹5-10 Lakhs</option>
                  <option value="10-25L">₹10-25 Lakhs</option>
                  <option value="25L+">₹25+ Lakhs</option>
                  <option value="To be discussed">To be discussed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="bg-gray-800/30 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">5</div>
              Additional Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">How did you hear about us?</label>
                <select
                  value={formData.howDidYouHear}
                  onChange={(e) => handleInputChange('howDidYouHear', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select option</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Referral">Referral</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Conference/Event">Conference/Event</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Preferred contact method</label>
                <select
                  value={formData.preferredContactMethod}
                  onChange={(e) => handleInputChange('preferredContactMethod', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select method</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="Video Call">Video Call</option>
                  <option value="In-Person">In-Person</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Preferred contact time</label>
                <select
                  value={formData.preferredContactTime}
                  onChange={(e) => handleInputChange('preferredContactTime', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select time</option>
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 3 PM)">Afternoon (12 PM - 3 PM)</option>
                  <option value="Evening (3 PM - 6 PM)">Evening (3 PM - 6 PM)</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-white font-medium mb-2">Additional message or specific requirements</label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                placeholder="Any additional information, specific requirements, or questions you'd like us to address..."
                rows={4}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-12 py-4 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-3 mx-auto disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <span>Submitting Request...</span>
                </>
              ) : (
                <>
                  <span>Submit Consultation Request</span>
                  <Send className="w-6 h-6" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm; 