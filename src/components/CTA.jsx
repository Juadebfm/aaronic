import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <div className="h-[40vh] bg-myYellow px-20 flex flex-col items-center justify-center">
      <h3 className="font-bold text-[56px] leading-none">Contact Aaronic Energy Today</h3>
      <p className="font-extralight text-[24px] w-[35%] text-center mb-5">
        Reach out to us with your inquiries or to explore partnership
        opportunities.
      </p>
      <Button btnText={"Get Started"} className={"bg-white text-black"} />
    </div>
  );
};

export default CTA;
