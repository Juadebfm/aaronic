import React from "react";

import HeroImg1 from "../assets/newHero1.jpg";
import HeroImg2 from "../assets/newHero2.jpg";
import HeroImg3 from "../assets/hero_img_man_folding_hands.png";
import SettingsIcon from "../assets/settings-icon.svg";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <div className="mt-[6rem]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-screen md:h-max"
      >
        <SwiperSlide className="relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-[35px] md:px-28 w-full md:w-[45%]">
            <div className="flex items-center bg-myYellow/70 text-white py-3 px-6 w-full md:w-max mb-5">
              <img src={SettingsIcon} alt="Settings" className="mr-2" />
              <p className="drop-shadow-sm font-light text-sm md:text-[18px] w-full md:w-auto">
                We Provide Electric Services For Industrial Project
              </p>
            </div>
            <h1 className="text-3xl md:text-[56px] font-bold mb-5">
              Safety is our priority
            </h1>
            <p className="text-base md:text-[18px] w-full md:w-[85%] font-light">
              At Aaronic Energy Limited, safety isn't just a priority. It is a
              core value as we adhere to stringent safety standards, comply with
              regulations, and continuously strive for improvement. <br /> With
              documented policies and a robust Safety Management System, we are
              committed to ensuring the well-being of our employees, customers,
              and the public.
            </p>
          </div>
          <img
            src={HeroImg3}
            alt="Engineers"
            className="h-full md:h-auto w-full"
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-[35px] md:pr-28 pl-[35px] md:pl-0 w-full md:w-[45%]">
            <div className="flex items-center bg-myYellow/70 text-white py-3 px-6 w-full md:w-max mb-5">
              <img src={SettingsIcon} alt="Settings" className="mr-2" />
              <p className="drop-shadow-sm font-light text-sm md:text-[18px] w-full md:w-auto">
                We Provide Electric Services For Industrial Project
              </p>
            </div>
            <h1 className="text-3xl md:text-[56px] font-bold mb-5">
              Safety is our priority
            </h1>
            <p className="text-base md:text-[18px] w-full md:w-[85%] font-light">
              At Aaronic Energy Limited, safety isn't just a priority. It is a
              core value as we adhere to stringent safety standards, comply with
              regulations, and continuously strive for improvement. <br /> With
              documented policies and a robust Safety Management System, we are
              committed to ensuring the well-being of our employees, customers,
              and the public.
            </p>
          </div>
          <img
            src={HeroImg1}
            alt="Engineers"
            className="h-full md:h-auto w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-[35px] md:px-28 w-full md:w-[45%]">
            <div className="flex items-center bg-myYellow/70 text-white py-3 px-6 w-full md:w-max mb-5">
              <img src={SettingsIcon} alt="Settings" className="mr-2" />
              <p className="drop-shadow-sm font-light text-sm md:text-[18px] w-full md:w-auto">
                We Provide Electric Services For Industrial Project
              </p>
            </div>
            <h1 className="text-3xl md:text-[56px] font-bold mb-5">
              Safety is our priority
            </h1>
            <p className="text-base md:text-[18px] w-full md:w-[85%] font-light">
              At Aaronic Energy Limited, safety isn't just a priority. It is a
              core value as we adhere to stringent safety standards, comply with
              regulations, and continuously strive for improvement. <br /> With
              documented policies and a robust Safety Management System, we are
              committed to ensuring the well-being of our employees, customers,
              and the public.
            </p>
          </div>
          <img
            src={HeroImg2}
            alt="Engineers"
            className="h-full md:h-auto w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
