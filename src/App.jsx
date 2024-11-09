import React from "react";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import FeaturesSection from "./component/FeaturesSection";
import Workflow from "./component/Workflow";
import Pricing from "./component/Pricing";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeaturesSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
