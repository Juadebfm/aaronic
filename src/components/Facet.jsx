import React from "react";
import WomanHelment from "../assets/woman_helment.png";
import { IoArrowForwardCircle } from "react-icons/io5";

const Facet = () => {
  return (
    <div className="relative hidden lg:block h-[100vh] lg:h-[85vh]">
      <div className="absolute grid grid-cols-1 lg:grid-cols-3 left-0 top-1/2 transform -translate-y-1/2 w-full h-full">
        <div className="h-full w-full px-10 py-32 cursor-pointer flex flex-col items-start justify-end border transition-all duration-500 ease-in-out hover:bg-white hover:bg-opacity-30 hover:backdrop-blur-lg hover:border-l-black hover:border-r-black group">
          <span className="hollow font-bold text-[28px]">01</span>
          <h3 className="text-[40px] font-bold font-lato mt-1 transition-all duration-500 ease-in-out group-hover:text-myYellow drop-shadow-lg">
            Oil & Gas Trading
          </h3>
          <p className="hidden group-hover:block transition-all duration-500 ease-in-out mb-6 text-xl">
            At Aaronic Energy, we source crude and refined petroleum products
            from our strategic counterparties both locally and internationally
            and we deliver these products to our clients within the Nigerian and
            West African Market. Given our logistics and operational expertise,
            we ensure that our product delivery meets the specifications of our
            ever-dynamic customers.
          </p>
          <IoArrowForwardCircle className="text-[60px] transition-all duration-500 ease-in-out group-hover:text-white" />
        </div>
        <div className="h-full w-full px-10 py-32 cursor-pointer flex flex-col items-start justify-end border transition-all duration-500 ease-in-out hover:bg-white hover:bg-opacity-30 hover:backdrop-blur-lg hover:border-l-black hover:border-r-black group">
          <span className="hollow font-bold text-[28px]">02</span>
          <h3 className="text-[40px] font-bold font-lato mt-1 transition-all duration-500 ease-in-out group-hover:text-myYellow drop-shadow-lg">
            Shipping
          </h3>
          <p className="hidden group-hover:block transition-all duration-500 ease-in-out mb-6 text-xl">
            Aaronic Energy Limited offers a range of shipping services designed
            to support its operations in the energy sector, specializing in the
            transportation of oil, gas, and related products, the company
            manages a fleet of vessels optimized for efficiency, safety, and
            environmental sustainability.
          </p>
          <IoArrowForwardCircle className="text-[60px] transition-all duration-500 ease-in-out group-hover:text-white" />
        </div>
        <div className="h-full w-full px-10 py-32 cursor-pointer flex flex-col items-start justify-end border transition-all duration-500 ease-in-out hover:bg-white hover:bg-opacity-30 hover:backdrop-blur-lg hover:border-l-black hover:border-r-black group">
          <span className="hollow font-bold text-[28px]">03</span>
          <h3 className="text-[40px] font-bold font-lato mt-1 transition-all duration-500 ease-in-out group-hover:text-myYellow drop-shadow-lg">
            Marine Logistics
          </h3>
          <p className="hidden group-hover:block transition-all duration-500 ease-in-out mb-6 text-xl">
            We implement eco-friendly practices, minimize emissions, and reduce
            their ecological footprint, catering to environmentally conscious
            clients who value corporate social responsibility.
          </p>
          <IoArrowForwardCircle className="text-[60px] transition-all duration-500 ease-in-out group-hover:text-white" />
        </div>
      </div>
      <img
        src={WomanHelment}
        alt="Working with partners"
        className="w-full h-full"
      />
    </div>
  );
};

export default Facet;
