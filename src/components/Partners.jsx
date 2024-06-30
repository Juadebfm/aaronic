import React from "react";
import Partner1 from "../assets/restoration.webp";
import Partner2 from "../assets/empisto_partner.png";
import Partner3 from "../assets/crystalline_partners.png";
import Partner5 from "../assets/blue.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Partners = () => {
  return (
    <div className="flex items-center justify-center flex-col px-[25px] lg:px-28 py-10 lg:py-20 gap-10">
      <h2 className="text-[24px] font-bold">Our Partners</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 place-items-center gap-10">
        <img
          src={Partner1}
          alt="Restoration"
          className="h-[84px] w-[238px] gray-image"
          data-aos="fade-up"
          data-aos-duration="500"
        />

        <img
          src={Partner2}
          alt="Empisto"
          className="h-[84px] w-[238px]"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <img
          src={Partner3}
          alt="Crystalline"
          className="h-[84px] w-[238px]"
          data-aos="fade-up"
          data-aos-duration="1500"
          width={238}
          height={84}
        />
        <div
          className="flex flex-col items-center justify-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img
            src={Partner5}
            alt="Milan"
            className="h-[84px] w-auto gray-image"
          />
          <span className="text-[9px] font-inter mt-2">
            Blue Springs Energy
          </span>
        </div>
      </div>
    </div>
  );
};

export default Partners;
