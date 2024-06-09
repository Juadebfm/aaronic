import React from "react";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import ServicesComp from "../components/ServicesComp";
import Welcome from "../components/Welcome";
import Different from "../components/Different";
import CoreValues from "../components/CoreValues";
import Facet from "../components/Facet";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <ServicesComp />
      <Welcome />
      <Different />
      <CoreValues />
      <Facet />
      <CTA />
      <Testimonials id="social-proof" />
      <FAQ />
    </div>
  );
};

export default Home;
