import React from "react";
import AEnergy from "../assets/aaronic_energy.png";
import YellowElement from "../assets/yellowelement.svg";
import Three from "../assets/3+years.png";
import Four from "../assets/4+.png";
import Ninety from "../assets/90+.png";

const Welcome = () => {
  return (
    <div className="px-28 py-10 grid grid-cols-2 place-content-center place-items-center">
      <div>
        <img src={AEnergy} alt="Welcome to our company" />
      </div>

      <div className="pl-7 relative">
        <div className="mt-44 -ml-24">
          <div className="flex items-center bg-transparent text-black py-3 w-max">
            <img src={YellowElement} alt="Settings" className="mr-2" />
            <p className="drop-shadow-sm font-light text-[18px]">
              Welcome to Our Company
            </p>
          </div>
          <h2 className="text-[40px] font-bold leading-tight w-[70%]">
            Aaronic Energy Provides a Full Range of Services
          </h2>
        </div>
        <p className="w-[65%] mt-8 text-[18px] font-light">
          We successfully cope with tasks of varying complexity, provide
          long-term guarantees and regularly master new technologies. Our
          portfolio includes dozens of successfully completed projects of houses
          of different storeys, with high–quality finishes and good repairs.
          Building houses is our vocation!
        </p>
        <div className="flex items-center justify-center -ml-24 -mt-14 gap-4">
          <img
            src={Three}
            alt="3+ Years Of Service"
            className="w-[200px] h-[107px] mt-32"
          />
          <img
            src={Four}
            alt="4+ Years Of Site Development"
            className="w-[200px] h-[107px]"
          />
          <img
            src={Ninety}
            alt="90 People in the team"
            className="w-[200px] h-[107px] mt-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
