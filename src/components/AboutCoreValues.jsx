import React from "react";
import Settingsyellow from "../assets/settingsYello.svg";
import WomanElec from "../assets/woman_electricity_pathway.webp";

const AboutCoreValues = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center place-content-center p-[25px] md:px-20 lg:p-28">
      <div>
        <div className="flex items-center text-black py-3 pr-6 mt-10 w-max">
          <img src={Settingsyellow} alt="Settings" className="mr-2" />
          <p className="drop-shadow-sm normal-case font-light text-[18px]">
            Our Key Responsibility Values
          </p>
        </div>
        <div>
          <h2 className="text-3xl lg:text-[40px] text-myYellow font-bold mt-2 mb-4">
            Core Values
          </h2>
          <p className="text-[18px] w-full lg:w-[85%] font-light">
            Our business transactions are based on excellence as we are
            committed to the highest standards of professionalism. We believe in
            transparency as the foundation of our ambition to create lasting
            value, upholding the interests of our clients, employees, and the
            communities where we operate. We act with a sense of urgency and
            sustainability to demonstrate our ability to respond to client needs
            with real, tangible, and proactive solutions that strengthen
            customer confidence and reinforce our market credibility.
          </p>
        </div>
        <div>
          <h2 className="text-3xl lg:text-[40px] text-myYellow font-bold mt-8 lg:mt-1 leading-tight lg:leading-normal">
            Our Mission & Vision
          </h2>
          <p className="text-[18px] w-full lg:w-[85%] font-light">
            We are committed to the highest standards of professionalism we
            believe in transparency as the foundation of our ambition to create
            lasting value, upholding the interests of our clients, employees,
            and the communities where we operate. We act with a sense of
            urgency, to demonstrate our ability to respond to client needs with
            real, tangible, and proactive solutions that strengthen customer
            confidence and reinforce our market credibility.
          </p>
        </div>
      </div>
      <div>
        <img src={WomanElec} alt="Workers " className="md:mt-10 lg:mt-0" />
      </div>
    </div>
  );
};

export default AboutCoreValues;
