import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Newsletter from '@/components/Newsletter';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <div id="home" className="scroll-mt-20">
          <Hero />
        </div>
        <div id="features" className="scroll-mt-20">
          <Features />
        </div>
        <div id="howitworks" className="scroll-mt-20"> {/* Added ID for potential future linking */}
          <HowItWorks />
        </div>
        <div id="testimonials" className="scroll-mt-20">
          <Testimonials />
        </div>
        <div id="pricing" className="scroll-mt-20">
          <Pricing />
        </div>
        <Newsletter />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;