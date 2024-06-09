import React from "react";
import HeroImg2 from "../assets/shipping.jpg";
import SettingsIcon from "../assets/settings_black.svg";
import pyramid from "../assets/pyramid.png";
import Partners from "../components/Partners";
import UPS from "../components/UPS";
import Commitment from "../components/Commitment";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ViewShippingInfo from "../components/ViewShippingInfo";

const ViewShipping = () => {
  return (
    <div>
      <div className="relative mt-20">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-[30px] lg:px-28 w-full lg:w-[65%] z-10 drop-shadow-lg">
          <div className="hidden md:flex md:mx-auto lg:mx-0 items-center bg-myYellow/70 text-black py-3 px-6 w-max">
            <img src={SettingsIcon} alt="Settings" className="mr-2" />
            <p className="drop-shadow-sm font-light text-[18px]">
              Our Services
            </p>
          </div>
          <h1 className="text-4xl lg:text-[52px] font-bold leading-tight mt-5 md:w-[70%] lg:w-auto md:mx-auto lg:mx-0 text-center lg:text-start">
            Efficiency in Every Move Handle With Care and Expertise
          </h1>
        </div>
        <img
          src={pyramid}
          alt="pyramid"
          className="absolute bottom-0 left-0 w-full lg:w-[60%]"
        />
        <img src={HeroImg2} alt="Engineers" className="h-auto w-full" />
      </div>
      <Partners />
      <ViewShippingInfo />
      <UPS />
      <Commitment />
      <CTA />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default ViewShipping;
