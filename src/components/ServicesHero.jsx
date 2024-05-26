import React from "react";
import HeroImg2 from "../assets/servicebg.png";
import SettingsIcon from "../assets/settings_black.svg";
import pyramid from "../assets/pyramid.png";

const ServicesHero = () => {
  return (
    <div className="relative mt-20">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-28 w-[55%]">
        <div className="flex items-center bg-myYellow/70 text-black py-3 px-6 w-max">
          <img src={SettingsIcon} alt="Settings" className="mr-2" />
          <p className="drop-shadow-sm font-light text-[18px]">Our Services</p>
        </div>
        <h1 className="text-[52px] font-bold leading-tight mt-5">
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
  );
};

export default ServicesHero;
