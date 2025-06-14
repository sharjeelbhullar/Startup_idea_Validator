import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Validator from './components/pages/Validator';
import BusinessPlan from './components/pages/BusinessPlan';
import MVPBuilder from './components/pages/MVPBuilder';
import FundingAdvisor from './components/pages/FundingAdvisor';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Toaster position="top-right" />
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 mt-16">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/validator" element={<Validator />} />
              <Route path="/business-plan" element={<BusinessPlan />} />
              <Route path="/mvp-builder" element={<MVPBuilder />} />
              <Route path="/funding-advisor" element={<FundingAdvisor />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 