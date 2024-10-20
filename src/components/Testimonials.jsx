import React from "react";
import { IoStar } from "react-icons/io5";
import Pattern from "../assets/pattern.png";
import John from "../assets/johndavis.png";
import Mary from "../assets/kimmary.png";
import Liyas from "../assets/liyas.png";
import Aishat from "../assets/aishat.png";
import Kemi from "../assets/kemi.png";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Testimonials = () => {
  return (
    <div className="px-[15px] md:px-20 lg:px-28 py-16 lg:py-36 relative">
      <img
        src={Pattern}
        alt=""
        className="absolute top-0 left-0 w-auto h-full lg:h-[1000px] -z-10"
        loading="lazy"
      />
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-5">
          <span className="text-base text-[600]">
            Trusted By 20,000+ Clients
          </span>
          <div className="flex items-center justify-center gap-1">
            <IoStar className="text-myYellow" />
            <IoStar className="text-myYellow" />
            <IoStar className="text-myYellow" />
            <IoStar className="text-myYellow" />
            <IoStar className="text-myYellow/50" />
          </div>
        </div>
        <h2 className="capitalize text-3xl lg:text-[42px] leading-tight text-center font-bold">
          these Companies trust us.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center place-content-center gap-7 lg:gap-16 mt-10">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="flex items-center justify-start bg-white gap-3 lg:gap-7 py-5 px-6 shadow-md shadow-gray-500 rounded-lg border-l-[4px] border-l-myYellow w-full lg:w-[500px] h-auto lg:h-[150px]"
          >
            <img src={John} alt="John Davis" className="w-[80px] h-[80px]" />

            <div>
              <div className="flex flex-col lg:flex-row items-baseline justify-start gap-0 lg:gap-2">
                <h3 className="font-bold text-myYellow text-base lg:text-[24px] capitalize">
                  John Davis
                </h3>
                <span className="font-bold text-myYellow text-[24px] hidden lg:block">
                  |
                </span>
                <span className="font-extralight text-[12px] text-myYellow">
                  KEM-KEM C.E.O
                </span>
              </div>
              <p className="font-light text-[13px]">
                Highly reliable and responsive team!
              </p>
              <div className="flex items-center justify-start gap-1 mt-3">
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow/50" />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex items-center justify-start bg-white gap-3 lg:gap-7 py-5 px-6 shadow-md shadow-gray-500 rounded-lg border-l-[4px] border-l-myYellow w-full lg:w-[500px] h-auto lg:h-[150px]"
          >
            <img src={Mary} alt="John Davis" className="w-[80px] h-[80px]" />

            <div>
              <div className="flex flex-col lg:flex-row items-baseline justify-start gap-0 lg:gap-2">
                <h3 className="font-bold text-myYellow text-base lg:text-[24px] capitalize">
                  Kim Mary
                </h3>
                <span className="font-bold text-myYellow text-[24px] hidden lg:block">
                  |
                </span>
                <span className="font-extralight text-[12px] text-myYellow">
                  Uhi-chan LTD. MD
                </span>
              </div>
              <p className="font-light text-[13px]">
                Their dedication to customer satisfaction and adherence to high
                standards set them apart in the industry.
              </p>
              <div className="flex items-center justify-start gap-1 mt-3">
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow/50" />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="flex items-center justify-start bg-white gap-3 lg:gap-7 py-5 px-6 shadow-md shadow-gray-500 rounded-lg border-l-[4px] border-l-myYellow w-full lg:w-[500px] h-auto lg:h-[150px]"
          >
            <img src={Liyas} alt="John Davis" className="w-[80px] h-[80px]" />

            <div>
              <div className="flex flex-col lg:flex-row items-baseline justify-start gap-0 lg:gap-2">
                <h3 className="font-bold text-myYellow text-base lg:text-[24px] capitalize">
                  Dare Onajimi
                </h3>
                <span className="font-bold text-myYellow text-[24px] hidden lg:block">
                  |
                </span>
                <span className="font-extralight text-[12px] text-myYellow">
                  ONAM & CO. Founder.
                </span>
              </div>
              <p className="font-light text-[13px]">
                Their expertise in the industry and commitment to quality
                ensured smooth transactions and reliable delivery.
              </p>
              <div className="flex items-center justify-start gap-1 mt-3">
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow/50" />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1400"
            className="flex items-center justify-start bg-white gap-3 lg:gap-7 py-5 px-6 shadow-md shadow-gray-500 rounded-lg border-l-[4px] border-l-myYellow w-full lg:w-[500px] h-auto lg:h-[150px]"
          >
            <img src={Liyas} alt="John Davis" className="w-[80px] h-[80px]" />

            <div>
              <div className="flex flex-col lg:flex-row items-baseline justify-start gap-0 lg:gap-2">
                <h3 className="font-bold text-myYellow text-base lg:text-[24px] capitalize">
                  Liyas Aleshin
                </h3>
                <span className="font-bold text-myYellow text-[24px] hidden lg:block">
                  |
                </span>
                <span className="font-extralight text-[12px] text-myYellow">
                  Memo B Co-Founder
                </span>
              </div>
              <p className="font-light text-[13px]">
                Excellent experience working with Aaronic Energy Limited for our
                oil trading requirements.
              </p>
              <div className="flex items-center justify-start gap-1 mt-3">
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow/50" />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1600"
            className="flex items-center justify-start bg-white gap-3 lg:gap-7 py-5 px-6 shadow-md shadow-gray-500 rounded-lg border-l-[4px] border-l-myYellow w-full lg:w-[500px] h-auto lg:h-[150px]"
          >
            <img src={Aishat} alt="John Davis" className="w-[80px] h-[80px]" />

            <div>
              <div className="flex flex-col lg:flex-row items-baseline justify-start gap-0 lg:gap-2">
                <h3 className="font-bold text-myYellow text-base lg:text-[24px] capitalize">
                  Aishat Kamar
                </h3>
                <span className="font-bold text-myYellow text-[24px] hidden lg:block">
                  |
                </span>
                <span className="font-extralight text-[12px] text-myYellow">
                  KAMCO Founder & C.E.O
                </span>
              </div>
              <p className="font-light text-[13px]">
                Their team demonstrated deep industry knowledge and integrity in
                every interaction.
              </p>
              <div className="flex items-center justify-start gap-1 mt-3">
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow/50" />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1800"
            className="flex items-center justify-start bg-white gap-3 lg:gap-7 py-5 px-6 shadow-md shadow-gray-500 rounded-lg border-l-[4px] border-l-myYellow w-full lg:w-[500px] h-auto lg:h-[150px]"
          >
            <img src={Kemi} alt="John Davis" className="w-[80px] h-[80px]" />

            <div>
              <div className="flex flex-col lg:flex-row items-baseline justify-start gap-0 lg:gap-2">
                <h3 className="font-bold text-myYellow text-base lg:text-[24px] capitalize">
                  Kemi Bakare
                </h3>
                <span className="font-bold text-myYellow text-[24px] hidden lg:block">
                  |
                </span>
                <span className="font-extralight text-[12px] text-myYellow">
                  MELBOND C.E.O
                </span>
              </div>
              <p className="font-light text-[13px]">
                Their team demonstrated deep industry knowledge and integrity in
                every interaction.
              </p>
              <div className="flex items-center justify-start gap-1 mt-3">
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow" />
                <IoStar className="text-myYellow/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
