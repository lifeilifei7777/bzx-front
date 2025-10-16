import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductFeatures from '../components/ProductFeatures';
import Solutions from '../components/Solutions';
import CaseStudies from '../components/CaseStudies';
import Resources from '../components/Resources';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProductFeatures />
      <Solutions />
      <CaseStudies />
      <Resources />
      <Footer />
      {showBackToTop && <BackToTop />}
    </div>
  );
}