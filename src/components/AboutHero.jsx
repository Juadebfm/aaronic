import React from "react";
import SettingsIcon from "../assets/blackHelment.svg";
import spiral from "../assets/spiral.png";
import AboutHeroImg from "../assets/aboutUsHero.png";

const AboutHero = () => {
  return (
    <div className="mt-[10rem] h-max relative">
      <img
        src={spiral}
        alt="spiral background"
        className="absolute top-0 right-0 -z-10"
      />
      <div className="px-28 pt-8">
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <div className="flex items-center justify-center bg-myYellow/70 text-black py-3 px-6 w-max">
            <img src={SettingsIcon} alt="Settings" className="mr-2" />
            <p className="drop-shadow-sm font-light text-[18px]">
              Welcome to Our Company
            </p>
          </div>
          <h1 className="text-[56px] font-bold w-[40%] mx-auto leading-tight">
            Build Your Organization With Our Technics
          </h1>
          <p className="text-[18px] w-[45%] font-light">
            With documented policies and a robust Safety Management System, we
            are committed to ensuring the well-being of our employees,
            customers, and the public.
          </p>
        </div>

        <img src={AboutHeroImg} alt="" className="" />
      </div>
    </div>
  );
};

export default AboutHero;
