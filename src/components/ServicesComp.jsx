import React from "react";
import OilTrading from "../assets/oil_trading.png";
import Shipping from "../assets/shipping.png";
import MarineLogistics from "../assets/marinelogistics.png";
import Slanted from "../assets/slanted_orange.png";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const ServicesComp = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center gap-24 p-[35px] py-10 mt-10 lg:mt-0 lg:p-40"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="w-[311px] h-[373px] relative">
        <img src={Slanted} alt="" />
        <div className="absolute -top-7 w-full h-full">
          <img
            src={OilTrading}
            alt="Oil Trading"
            className="w-[215px] h-[173px] mb-7"
          />
          <div className="flex items-center justify-center flex-col">
            <h3 className="font-bold text-[18px] mb-4">Oil Trading</h3>
            <p className="text-[18px] font-light text-center">
              We facilitate the efficient buying, selling, and transportation of
              crude oil and refined petroleum products by leveraging its
              extensive network.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[311px] h-[373px] relative">
        <img src={Slanted} alt="" />
        <div className="absolute -top-7 w-full h-full">
          <img
            src={Shipping}
            alt="Oil Trading"
            className="w-[215px] h-[173px] mb-7"
          />
          <div className="flex items-center justify-center flex-col">
            <h3 className="font-bold text-[18px] mb-4">Shipping</h3>
            <p className="text-[18px] font-light text-center">
              Here, we offer a range of shipping services designed to support
              its operations in the energy sector, specializing in the
              transportation of oil & gas.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[311px] h-[373px] relative">
        <img src={Slanted} alt="" />
        <div className="absolute -top-7 w-full h-full">
          <img
            src={MarineLogistics}
            alt="Oil Trading"
            className="w-[215px] h-[173px] mb-7"
          />
          <div className="flex items-center justify-center flex-col">
            <h3 className="font-bold text-[18px] mb-4">Marine Logistics</h3>
            <p className="text-[18px] font-light text-center">
              Aaronic Energy Limited offers comprehensive marine logistics
              services which is tailored to the unique needs of the offshore
              energy sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComp;
