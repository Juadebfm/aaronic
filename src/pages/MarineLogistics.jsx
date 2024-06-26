import React from "react";
import HeroImg2 from "../assets/marine.webp";
import SettingsIcon from "../assets/settingsYello.svg";
import pyramid from "../assets/pyramid.png";
import Partners from "../components/Partners";
import UPS from "../components/UPS";
import Commitment from "../components/Commitment";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import MarineLogisticsInfo from "../components/MarineLogisticsInfo";

const MarineLogistics = () => {
  return (
    <div>
      <div className="relative mt-20 h-[40vh] lg:h-auto">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-[30px] lg:px-28 w-full lg:w-[55%] z-10">
          <div className="hidden md:flex lg:hidden md:mx-auto lg:mx-auto items-center bg-white/50 text-black py-3 px-6 w-max">
            <img src={SettingsIcon} alt="Settings" className="mr-2" />
            <p className="drop-shadow-sm font-light text-[18px]">
              Our Services
            </p>
          </div>
          <h1 className="text-4xl md:text-center lg:text-start lg:text-[52px] font-bold leading-tight mt-5 md:w-[70%] lg:w-auto md:mx-auto lg:mx-0">
            Navigating Complexities with Precision Empower Your Maritime
            Operations
          </h1>
        </div>
        <img
          src={pyramid}
          alt="pyramid"
          className="absolute bottom-1/3 md:bottom-0 lg:bottom-0 left-0 w-[60%]"
        />
        <img src={HeroImg2} alt="Engineers" className="h-auto w-full" />
      </div>
      <Partners />
      <MarineLogisticsInfo />
      <UPS />
      <Commitment />
      <CTA />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default MarineLogistics;
