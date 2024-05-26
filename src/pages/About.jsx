import React from "react";
import AboutHero from "../components/AboutHero";
import Partners from "../components/Partners";
import Welcome from "../components/Welcome";
import Different from "../components/Different";
import AboutCoreValues from "../components/AboutCoreValues";
import CTA from "../components/CTA";
import ContactComp from "../components/ContactComp";
import Testimonials from "../components/Testimonials";

const About = () => {
  return (
    <div>
      <AboutHero />

      <Partners />
      <Welcome />
      <Different />
      <AboutCoreValues />
      <CTA />
      <ContactComp />
      <Testimonials />
    </div>
  );
};

export default About;
