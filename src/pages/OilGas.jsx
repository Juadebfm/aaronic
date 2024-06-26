import React from "react";
import HeroImg2 from "../assets/oil_gas.webp";
import SettingsIcon from "../assets/settings_black.svg";
import pyramid from "../assets/pyramid.png";
import Partners from "../components/Partners";
import OilTradingInfo from "../components/OilTradingInfo";
import UPS from "../components/UPS";
import Commitment from "../components/Commitment";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

const OilGas = () => {
  return (
    <div>
      <div className="relative mt-20">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-[30px] lg:px-28 w-full lg:w-[55%] z-10">
          <div className="hidden md:flex lg:hidden md:mx-auto lg:mx-0 items-center bg-myYellow/70 text-black py-3 px-6 w-max">
            <img src={SettingsIcon} alt="Settings" className="mr-2" />
            <p className="drop-shadow-sm font-light text-[18px]">
              Our Services
            </p>
          </div>
          <h1 className="text-4xl lg:text-[52px] font-bold leading-tight mt-5 capitalize md:w-[70%] lg:w-auto md:mx-auto lg:mx-0 text-center lg:text-start">
            Comprehensive Energy Solutions Tailored for the Modern World
          </h1>
        </div>
        <img
          src={pyramid}
          alt="pyramid"
          className="absolute bottom-0 left-0 w-[60%]"
        />
        <img src={HeroImg2} alt="Engineers" className="h-auto w-full" />
      </div>
      <Partners />
      <OilTradingInfo />
      <UPS />
      <Commitment />
      <CTA />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default OilGas;
