import React from 'react';
import LandingNav from '../components/LandingNav';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Architecture from '../components/Architecture';
import FinalCTA from '../components/FinalCTA';
import LandingFooter from '../components/LandingFooter';

const LandingPage = ({ onOpenApp }) => {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      <LandingNav onOpenApp={onOpenApp} />
      <main>
        <Hero />
        <Features />
        <Architecture />
        <FinalCTA />
      </main>
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
