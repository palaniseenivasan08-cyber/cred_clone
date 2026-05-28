import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import StatsSection from './components/StatsSection';
import NeoPOPSection from './components/NeoPOPSection';
import TestimonialsSection from './components/TestimonialsSection';
import SecuritySection from './components/SecuritySection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <StatsSection />
        <NeoPOPSection />
        <TestimonialsSection />
        <SecuritySection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
