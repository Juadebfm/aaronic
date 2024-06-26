import React from "react";
import Settingsyellow from "../assets/settingsYello.svg";
import WomanElec from "../assets/woman_electricity_pathway.webp";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const CoreValues = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center place-content-center p-[25px] md:px-20 lg:p-28">
      <div data-aos="fade-right" data-aos-duration="2000">
        <div className="flex items-center text-black py-3 pr-6 mt-10 w-max">
          <img src={Settingsyellow} alt="Settings" className="mr-2" />
          <p className="drop-shadow-sm normal-case font-light text-[18px]">
            Our Key Responsibility Values
          </p>
        </div>
        <h2 className="text-[40px] text-myYellow font-bold mt-1">
          Core Values
        </h2>
        <p className="text-[18px] w-full lg:w-[85%] font-light">
          Our business transactions are based on excellence as we are committed
          to the highest standards of professionalism. We believe in
          transparency as the foundation of our ambition to create lasting
          value, upholding the interests of our clients, employees, and the
          communities where we operate. We act with a sense of urgency and
          sustainability to demonstrate our ability to respond to client needs
          with real, tangible, and proactive solutions that strengthen customer
          confidence and reinforce our market credibility.
        </p>
      </div>
      <div data-aos="fade-left" data-aos-duration="2000">
        <img
          src={WomanElec}
          alt="Workers "
          className="mt-20 lg:mt-0 md:px-10 lg:px-0"
        />
      </div>
    </div>
  );
};

export default CoreValues;
