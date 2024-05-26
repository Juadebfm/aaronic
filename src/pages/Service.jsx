import React from "react";
import ServicesHero from "../components/ServicesHero";
import Partners from "../components/Partners";
import ServicesComp from "../components/ServicesComp";
import Commitment from "../components/Commitment";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import UPS from "../components/UPS";

const Service = () => {
  return (
    <div>
      <ServicesHero />
      <Partners />
      <ServicesComp />
      <Commitment />
      <UPS /> <CTA />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Service;
