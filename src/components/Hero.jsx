import React from "react";

import HeroImg1 from "../assets/Image2.jpg";
import HeroImg2 from "../assets/Image.jpg";
import HeroImg3 from "../assets/hero_img_man_folding_hands.png";
import HeroImg1Mobile from "../assets/menu1.png";
import HeroImg2Mobile from "../assets/menu2.png";
import HeroImg3Mobile from "../assets/menu3.png";
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
import useModal from "../utils/useModal";
import Modal from "./Modal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from "./Button";

const Hero = () => {
  const { isOpen, openModal, closeModal } = useModal();

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
        className="mySwiper h-max md:h-screen"
      >
        <SwiperSlide className="relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-[15px] md:px-28 w-full md:w-[45%] z-10">
            <div className="hidden md:flex items-center bg-myYellow/70 text-white py-3 px-6 w-full md:w-max mb-5">
              <img src={SettingsIcon} alt="Settings" className="mr-2" />
              <p className="drop-shadow-sm font-light text-sm md:text-[18px] w-full md:w-auto">
                We Provide Electric Services For Industrial Project
              </p>
            </div>
            <h1 className="text-4xl md:text-[56px] capitalize font-bold mb-5 text-white md:text-black text-center md:text-start">
              Safety is our priority
            </h1>
            <p className="text-[18px] md:text-[18px] w-full md:w-[85%] font-light text-white md:text-black text-center md:text-start px-[10px] md:px-0">
              At Aaronic Energy Limited, safety isn't just a priority. It is a
              core value as we adhere to stringent safety standards and comply
              with regulations, and continuously strive for improvement. <br />{" "}
              With documented policies and a robust Safety Management System, we
              are committed to ensuring the well-being of our employees,
              customers, and the public.
            </p>

            <Button
              onClick={openModal}
              btnText="Get Started"
              className="text-black md:hidden rounded-md w-full mx-auto px-8 py-4 bg-myYellow mt-10"
            />
          </div>
          <picture className="relative">
            <source media="(max-width: 767px)" srcSet={HeroImg3Mobile} />
            <img
              src={HeroImg3}
              alt="Engineers"
              className="h-full md:h-auto w-full"
            />
            <div className="md:hidden absolute inset-0 bg-black opacity-45"></div>
          </picture>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-[15px] md:pr-28 pl-[15px] md:pl-0 w-full md:w-[45%] z-10">
            <div className="hidden md:flex items-center bg-myYellow/70 text-white py-3 px-6 w-full md:w-max mb-5">
              <img src={SettingsIcon} alt="Settings" className="mr-2" />
              <p className="drop-shadow-sm font-light text-sm md:text-[18px] w-full md:w-auto">
                We Provide Electric Services For Industrial Project
              </p>
            </div>
            <h1 className="text-4xl md:text-[56px] capitalize font-bold mb-5 text-white md:text-black text-center md:text-start">
              Safety is our priority
            </h1>
            <p className="text-[18px] md:text-[18px] w-full md:w-[85%] font-light text-white md:text-black text-center md:text-start px-[10px] md:px-0">
              At Aaronic Energy Limited, safety isn't just a priority. It is a
              core value as we adhere to stringent safety standards and comply
              with regulations, and continuously strive for improvement. <br />{" "}
              With documented policies and a robust Safety Management System, we
              are committed to ensuring the well-being of our employees,
              customers, and the public.
            </p>
            <Button
              onClick={openModal}
              btnText="Get Started"
              className="text-black md:hidden rounded-md w-full mx-auto px-8 py-4 bg-myYellow mt-10"
            />
          </div>
          <picture className="relative">
            <source media="(max-width: 767px)" srcSet={HeroImg1Mobile} />
            <img
              src={HeroImg1}
              alt="Engineers"
              className="h-full md:h-auto w-full"
            />
            <div className="md:hidden absolute inset-0 bg-black opacity-45"></div>
          </picture>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-[15px] md:px-28 w-full md:w-[45%] z-10">
            <div className="hidden md:flex items-center bg-myYellow/70 text-white py-3 px-6 w-full md:w-max mb-5">
              <img src={SettingsIcon} alt="Settings" className="mr-2" />
              <p className="drop-shadow-sm font-light text-sm md:text-[18px] w-full md:w-auto">
                We Provide Electric Services For Industrial Project
              </p>
            </div>
            <h1 className="text-4xl md:text-[56px] capitalize font-bold mb-5 text-white md:text-black text-center md:text-start">
              Safety is our priority
            </h1>
            <p className="text-[18px] md:text-[18px] w-full md:w-[85%] font-light text-white md:text-black text-center md:text-start px-[10px] md:px-0">
              At Aaronic Energy Limited, safety isn't just a priority. It is a
              core value as we adhere to stringent safety standards and comply
              with regulations, and continuously strive for improvement. <br />{" "}
              With documented policies and a robust Safety Management System, we
              are committed to ensuring the well-being of our employees,
              customers, and the public.
            </p>
            <Button
              onClick={openModal}
              btnText="Get Started"
              className="text-black md:hidden rounded-md w-full mx-auto px-8 py-4 bg-myYellow mt-10"
            />
          </div>
          <picture className="relative">
            <source media="(max-width: 767px)" srcSet={HeroImg2Mobile} />
            <img
              src={HeroImg2}
              alt="Engineers"
              className="h-full md:h-auto w-full"
            />
            <div className="md:hidden absolute inset-0 bg-black opacity-45"></div>
          </picture>
        </SwiperSlide>
        <Modal isOpen={isOpen} onClose={closeModal}>
          <h2 className="text-2xl font-bold">Modal Content</h2>
          <p>This is the content of the modal.</p>
        </Modal>
      </Swiper>
    </div>
  );
};

export default Hero;
