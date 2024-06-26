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
    <div className="flex flex-col lg:flex-row items-center justify-center gap-24 p-[25px] py-10 mt-10 lg:mt-0 lg:p-40">
      <div
        className="w-full lg:w-[311px] h-auto lg:h-[373px] relative"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src={Slanted} alt="" />
        <div className="absolute -top-7 w-full h-full">
          <img
            src={OilTrading}
            alt="Oil Trading"
            className="w-[240px] h-[190px] mb-7"
          />
          <div className="flex items-center justify-center flex-col">
            <h3 className="font-bold text-[18px] mb-4">Oil Trading</h3>
            <p className="text-[18px] font-light text-center drop-shadow-md">
              At Aaronic Energy, we source crude and refined petroleum products
              from our strategic counterparties both locally and internationally
              and we deliver these products to our clients within the Nigerian
              and West African Market.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full lg:w-[311px] h-auto lg:h-[373px] relative"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <img src={Slanted} alt="" className="h-auto w-full" />
        <div className="absolute -top-7 w-full h-full">
          <img
            src={Shipping}
            alt="Oil Trading"
            className="w-[240px] h-[190px] mb-7"
          />
          <div className="flex items-center justify-center flex-col">
            <h3 className="font-bold text-[18px] mb-4">Shipping</h3>
            <p className="text-[18px] font-light text-center drop-shadow-md">
              Here, we offer a range of shipping services designed to support
              its operations in the energy sector, specializing in the
              transportation of oil & gas.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full lg:w-[311px] h-auto lg:h-[373px] relative"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <img src={Slanted} alt="" />
        <div className="absolute -top-7 w-full h-full">
          <img
            src={MarineLogistics}
            alt="Oil Trading"
            className="w-[240px] h-[190px] mb-7"
          />
          <div className="flex items-center justify-center flex-col">
            <h3 className="font-bold text-[18px] mb-4">Marine Logistics</h3>
            <p className="text-[18px] font-light text-center drop-shadow-md">
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
