import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ServicesGrid from "./ServicesGrid";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <div id="home">
          <HeroSection />
        </div>

        <div id="services">
          <ServicesGrid />
        </div>

        <div id="contact">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
