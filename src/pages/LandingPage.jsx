import React from 'react';
import LandingNavbar from '../components/LandingNavbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import DemoVideo from '../components/DemoVideo';
import WhyChoose from '../components/WhyChoose';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <LandingNavbar />
      <Hero />
      <Features />
      <DemoVideo />
      <WhyChoose />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default LandingPage;
