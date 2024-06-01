import React from "react";
import Partner1 from "../assets/augustine_partner.png";
import Partner2 from "../assets/empisto_partner.png";
import Partner3 from "../assets/crystalline_partners.png";
import Partner4 from "../assets/milan_partners.png";

const Partners = () => {
  return (
    <div className="flex items-center justify-center flex-col px-[25px] lg:px-28 py-10 lg:py-20 gap-10">
      <h2 className="text-[24px] font-bold">Our Partners</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 place-items-center gap-10">
        <img
          src={Partner1}
          alt="Augustine Jackson"
          className="h-[84px] w-[238px]"
        />
        <img src={Partner2} alt="Empisto" className="h-[84px] w-[238px]" />
        <img src={Partner3} alt="Crystalline" className="h-[84px] w-[238px]" />
        <img src={Partner4} alt="Milan" className="h-[84px] w-[238px]" />
      </div>
    </div>
  );
};

export default Partners;
