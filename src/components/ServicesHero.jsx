import React from "react";
import HeroImg2 from "../assets/servicebg.png";
import SettingsIcon from "../assets/settings-icon.svg";
import pyramid from "../assets/pyramid.png";

import HeroImg1Mobile from "../assets/menu1.webp";
import HeroImg1 from "../assets/img.webp";

const ServicesHero = () => {
  return (
    <>
      <div className="hidden lg:block relative mt-20 h-max">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-[30px] lg:px-28 w-full lg:w-[55%]">
          <div className="flex items-center bg-myYellow/70 text-black py-3 px-6 w-max">
            <img src={SettingsIcon} alt="Settings" className="mr-2" />
            <p className="drop-shadow-sm font-light text-[18px]">
              Our Services
            </p>
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
        <img src={HeroImg2} alt="Engineers" className="h-max w-full" />
      </div>
      <div className=" lg:hidden relative">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-[15px] lg:pr-28 pl-[15px] lg:pl-0 w-full lg:w-[45%] z-10">
          <div className="flex items-center bg-myYellow/70 text-black py-3 px-6 w-max mx-auto">
            <img src={SettingsIcon} alt="Settings" className="mr-2" />
            <p className="drop-shadow-sm font-light text-[18px] text-white">
              Our Services
            </p>
          </div>
          <h1 className="text-3xl lg:text-[52px] font-bold leading-tight mt-5 w-full text-center text-white">
            Comprehensive Energy Solutions Tailored for the Modern World
          </h1>
          <img
            src={pyramid}
            alt="pyramid"
            className="absolute -bottom-[17rem] md:hidden lg:block left-0 w-full lg:w-[60%]"
          />
        </div>
        <picture className="relative">
          <source media="(max-width: 767px)" srcSet={HeroImg1Mobile} />
          <img
            src={HeroImg1}
            alt="Engineers"
            className="h-auto lg:h-auto w-full"
          />

          <div className="lg:hidden absolute inset-0 bg-black opacity-45"></div>
        </picture>
      </div>
    </>
  );
};

export default ServicesHero;
