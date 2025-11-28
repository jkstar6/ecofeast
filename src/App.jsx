// src/App.jsx
import React from "react";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import HowItWork from "./components/howitwork.jsx";
import ImpactSection from "./components/impactsection.jsx";
import PackageSection from "./components/package.jsx";
import TestimoniSection from "./components/testimoni.jsx";
import CTASection from "./components/CTASection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Hero />
      <WhyUs />
      <HowItWork />
      <ImpactSection />
      <PackageSection />
      <TestimoniSection />
      <CTASection />
      <Footer />
    </>
  );
}
