import React from "react";
import WomanHelment from "../assets/woman_helment.png";
import { IoArrowForwardCircle } from "react-icons/io5";

const Facet = () => {
  return (
    <div className="relative hidden lg:block h-[100vh] lg:h-[85vh]">
      <div className="absolute grid grid-cols-1 lg:grid-cols-3 left-0 top-1/2 transform -translate-y-1/2 w-full h-full">
        <div className="h-full w-full px-[25px] py-32 cursor-pointer flex flex-col items-start justify-end border transition-all duration-500 ease-in-out hover:bg-white hover:bg-opacity-30 hover:backdrop-blur-lg hover:border-l-black hover:border-r-black group">
          <span className="hollow font-bold text-[28px]">01</span>
          <h3 className="text-[40px] font-bold font-lato mt-1 transition-all duration-500 ease-in-out group-hover:text-myYellow">
            Oil & Gas Trading
          </h3>
          <p className="hidden group-hover:block transition-all duration-500 ease-in-out">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            laboriosam sed, rerum exercitationem nulla reiciendis?
          </p>
          <IoArrowForwardCircle className="text-[60px] transition-all duration-500 ease-in-out group-hover:text-white" />
        </div>
        <div className="h-full w-full px-[25px] py-32 cursor-pointer flex flex-col items-start justify-end border transition-all duration-500 ease-in-out hover:bg-white hover:bg-opacity-30 hover:backdrop-blur-lg hover:border-l-black hover:border-r-black group">
          <span className="hollow font-bold text-[28px]">02</span>
          <h3 className="text-[40px] font-bold font-lato mt-1 transition-all duration-500 ease-in-out group-hover:text-myYellow">
            Shipping
          </h3>
          <p className="hidden group-hover:block transition-all duration-500 ease-in-out">
            Ensuring a reliable and consistent supply
          </p>
          <IoArrowForwardCircle className="text-[60px] transition-all duration-500 ease-in-out group-hover:text-white" />
        </div>
        <div className="h-full w-full px-[25px] py-32 cursor-pointer flex flex-col items-start justify-end border transition-all duration-500 ease-in-out hover:bg-white hover:bg-opacity-30 hover:backdrop-blur-lg hover:border-l-black hover:border-r-black group">
          <span className="hollow font-bold text-[28px]">03</span>
          <h3 className="text-[40px] font-bold font-lato mt-1 transition-all duration-500 ease-in-out group-hover:text-myYellow">
            Oil & Gas
          </h3>
          <p className="hidden group-hover:block transition-all duration-500 ease-in-out">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            laboriosam sed, rerum exercitationem nulla reiciendis?
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
