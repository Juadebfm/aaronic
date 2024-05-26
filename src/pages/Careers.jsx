import React from "react";
import Careersimg from "../assets/career.png";
import blackHelment from "../assets/blackHelment.svg";
import CTA from "../components/CTA";

const Careers = () => {
  return (
    <div>
      <div className="h-[70vh]">
        <div className="pt-28 px-28 mt-28 flex flex-col justify-center items-center w-full">
          <div className="flex items-center bg-myYellow/70 text-white py-3 px-6 w-max">
            <img src={blackHelment} alt="Settings" className="mr-2" />
            <p className="drop-shadow-sm font-light text-[18px]">Careers </p>
          </div>
          <h1 className="text-[56px] font-bold text-center mt-10 leading-tight w-[60%] mb-5">
            Looking for a rewarding career in the oil and gas industry?
          </h1>
          <p className="text-[18px] font-light text-center w-[50%]">
            Join the Aaronic Energy Limited team and be part of a dynamic,
            innovative company committed to driving growth and sustainability.
            Explore our current job openings and take the next step in your
            career with us.
          </p>
        </div>
        {/* <img src={Careersimg} alt="Engineers" className="h-auto w-full" /> */}
      </div>
      <CTA />
    </div>
  );
};

export default Careers;
