import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Features2 from "./components/Features2";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col md:gap-2">
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <Features2 />
      <FAQ />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
