import React from "react";

import HeroImg1 from "../assets/img.webp";
import HeroImg2 from "../assets/Image.webp";
import HeroImg3 from "../assets/man_folding_hands.webp";
import HeroImg1Mobile from "../assets/menu1.webp";
import HeroImg2Mobile from "../assets/menu2.webp";
import HeroImg3Mobile from "../assets/menu3.webp";

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
        className="mySwiper h-max lg:h-screen"
      >
        <SwiperSlide className="relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-[15px] md:px-20 lg:px-28 w-full lg:w-[50%] drop-shadow-md z-10">
            <h1 className="text-4xl lg:text-[56px] leading-normal capitalize font-bold mb-5 text-white lg:text-black text-center lg:text-start">
              Safety is our priority
            </h1>
            <p className="text-[18px] lg:text-[20px] w-full font-light text-white lg:text-black text-center lg:text-start px-[10px] lg:px-0">
              At Aaronic Energy Limited, safety isn't just a priority, it is a
              core value as we adhere to stringent safety standards and comply
              with regulations, and continuously strive for improvement. <br />
              With documented policies and a robust Safety Management System, we
              are committed to ensuring the well-being of our employees,
              customers, and the public.
            </p>

            <Button
              onClick={openModal}
              btnText="Get Started"
              className="text-black rounded-md w-full md:w-[50%] lg:w-full flex items-center justify-center mx-auto px-8 py-4 bg-myYellow mt-10"
            />
          </div>
          <picture className="relative">
            <source media="(max-width: 767px)" srcSet={HeroImg3Mobile} />
            <img
              src={HeroImg3}
              alt="Engineers"
              className="h-full lg:h-auto w-full"
            />
            <div className="lg:hidden absolute inset-0 bg-black opacity-60"></div>
          </picture>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-[15px] md:pl-20 md:pr-20 lg:pr-28 pl-[15px] lg:pl-0 w-full lg:w-[40%] z-10 drop-shadow-md">
            <h1 className="text-4xl lg:text-[56px] capitalize font-bold mb-5 text-white lg:text-black text-center lg:text-start leading-normal">
              Safety is our priority
            </h1>
            <p className="text-[18px] lg:text-[20px] w-full font-light text-white lg:text-black text-center lg:text-start px-[10px] lg:px-0">
              At Aaronic Energy Limited, safety isn't just a priority, it is a
              core value as we adhere to stringent safety standards and comply
              with regulations, and continuously strive for improvement. <br />{" "}
              With documented policies and a robust Safety Management System, we
              are committed to ensuring the well-being of our employees,
              customers, and the public.
            </p>
            <Button
              onClick={openModal}
              btnText="Get Started"
              className="text-black rounded-md w-full md:w-[50%] lg:w-full flex items-center justify-center mx-auto px-8 py-4 bg-myYellow mt-10"
            />
          </div>
          <picture className="relative">
            <source media="(max-width: 767px)" srcSet={HeroImg1Mobile} />
            <img
              src={HeroImg1}
              alt="Engineers"
              className="h-full lg:h-auto w-full"
            />
            <div className="lg:hidden absolute inset-0 bg-black opacity-60"></div>
          </picture>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-[15px] md:px-20 lg:px-28 w-full lg:w-[55%] z-10 drop-shadow-md">
            <h1 className="text-4xl lg:text-[56px] capitalize font-bold mb-5 text-white lg:text-black text-center lg:text-start leading-normal">
              Safety is our priority
            </h1>
            <p className="text-[18px] lg:text-[20px] w-full lg:w-[90%] font-light text-white lg:text-black text-center lg:text-start px-[10px] lg:px-0">
              At Aaronic Energy Limited, safety isn't just a priority, it is a
              core value as we adhere to stringent safety standards and comply
              with regulations, and continuously strive for improvement. <br />{" "}
              With documented policies and a robust Safety Management System, we
              are committed to ensuring the well-being of our employees,
              customers, and the public.
            </p>
            <Button
              onClick={openModal}
              btnText="Get Started"
              className="text-black rounded-md w-full md:w-[50%] lg:w-full flex items-center justify-center mx-auto px-8 py-4 bg-myYellow mt-10"
            />
          </div>
          <picture className="relative">
            <source media="(max-width: 767px)" srcSet={HeroImg2Mobile} />
            <img
              src={HeroImg2}
              alt="Engineers"
              className="h-full lg:h-auto w-full"
            />
            <div className="lg:hidden absolute inset-0 bg-black opacity-60"></div>
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
