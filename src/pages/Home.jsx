import React from "react";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import ServicesComp from "../components/ServicesComp";
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <ServicesComp />
      <Welcome />
      <div className="h-[200vh]"></div>
    </div>
  );
};

export default Home;
