import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ServicesGrid from "./ServicesGrid";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import WaveDivider from "./WaveDivider";

const Home = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden scroll-smooth">
      <Navigation />

      <main>
        <div id="home">
          <HeroSection />
        </div>

        <div id="services">
          <ServicesGrid />
        </div>

        <WaveDivider />

        <div id="contact" className="-mt-24">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
