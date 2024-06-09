import React from "react";
import AEnergy from "../assets/aaronic_energy.png";
import YellowElement from "../assets/yellowelement.svg";
import Three from "../assets/3+years.png";
import Four from "../assets/4+.png";
import Ninety from "../assets/90+.png";

const Welcome = () => {
  return (
    <div className="px-[25px] md:px-20 lg:px-28 py-10 grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center">
      <div className="md:px-14 lg:px-0">
        <img src={AEnergy} alt="Welcome to our company" />
      </div>

      <div className="pl-0 lg:pl-7 relative">
        <div className=" mt-16 lg:mt-44 -ml-0 lg:-ml-24">
          <div className="flex items-center bg-transparent text-black py-3 w-max">
            <img src={YellowElement} alt="Settings" className="mr-2" />
            <p className="drop-shadow-sm font-light text-[18px]">
              Welcome to Our Company
            </p>
          </div>
          <h2 className="text-3xl lg:text-[40px] font-bold leading-tight w-full lg:w-[70%]">
            Aaronic Energy Provides a Full Range of Services
          </h2>
        </div>
        <p className="w-full lg:w-[75%] mt-8 text-[18px] font-light">
          We successfully cope with tasks of varying complexity, provide
          long-term guarantees and regularly master new technologies. Our
          portfolio includes dozens of successfully completed projects of houses
          of different storeys, with high–quality finishes and good repairs.
          Building houses is our vocation!
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center -ml-0 lg:-ml-24 -mt-0 lg:-mt-14 mt-14 lg:mt-0 gap-10 lg:gap-4">
          <img
            src={Three}
            alt="3+ Years Of Service"
            className="w-[200px] h-[107px] mt-0 lg:mt-32"
          />
          <img
            src={Four}
            alt="4+ Years Of Site Development"
            className="w-[200px] h-[107px]"
          />
          <img
            src={Ninety}
            alt="90 People in the team"
            className="w-[200px] h-[107px] mt-0 lg:mt-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
