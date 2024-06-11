import React from "react";
import Commit from "../assets/commit.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Commitment = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-28 place-items-center place-content-center p-[25px] md:px-20 lg:p-28">
      <div data-aos="fade-right" data-aos-duration="2000">
        <h2 className="text-[40px] text-myYellow font-bold mt-1 leading-tight mb-3">
          <span className="text-black block">Our</span> <span>Commitment</span>
        </h2>
        <p className="text-[18px] w-full lg:w-[85%] font-light">
          At Aaronic Energy Limited, we are committed to sustainability and
          corporate responsibility. We strive to minimize environmental impact
          and invest in the communities where we operate, ensuring that we not
          only meet today's needs but also contribute to a sustainable future.
        </p>
        <p className="text-[18px] w-full lg:w-[85%] font-light mt-8">
          This expanded detail will not only inform potential clients about what
          Aaronic Energy Limited offers but also help in establishing a sense of
          trust and expertise in the field.
        </p>
      </div>
      <div
        className="p-0 lg:p-10"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <img src={Commit} alt="Workers " />
      </div>
    </div>
  );
};

export default Commitment;
