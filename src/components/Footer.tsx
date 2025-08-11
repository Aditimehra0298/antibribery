import React from 'react';
import { Phone, Mail, Globe, Award, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="public/image (3).png" 
                alt="Eurocert Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Eurocert</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Protecting businesses worldwide with comprehensive anti-bribery and corruption audit services. 
              25+ years of excellence, trusted by Fortune 500 companies.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Globe className="w-4 h-4" />
                <span>40+ Countries</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="w-4 h-4" />
                <span>ISO 37001</span>
              </div>
            </div>
          </div>



          {/* Corruption Awareness Image */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Anti-Corruption Mission</h3>
            <div className="bg-gray-800 rounded-lg p-4">
              <img 
                src="https://c8.alamy.com/comp/2G2EPPF/corruption-text-on-red-round-grungy-texture-stamp-2G2EPPF.jpg" 
                alt="Anti-Corruption Awareness" 
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className="text-gray-400 text-sm mt-3 text-center">
                Fighting corruption through compliance
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+91-9779665056</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">bdm@eurocert.in</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-semibold text-white">Free Consultation</span>
              </div>
              <p className="text-xs text-gray-400">
                Get your risk assessment within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">Eurocert</span>. All rights reserved. | ISO 37001 Certified | Globally Accredited
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
