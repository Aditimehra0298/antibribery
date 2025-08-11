import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import RiskAssessment from './components/RiskAssessment';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RiskAssessmentPage from './components/RiskAssessmentPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <WhyChoose />
              <RiskAssessment />
              <Services />
              <Process />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/risk-assessment" element={
            <>
              <Header />
              <RiskAssessmentPage />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;