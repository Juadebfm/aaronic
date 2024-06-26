import React from "react";
import contactcomp from "../assets/contactcomp.webp";
import { Link } from "react-router-dom";
import { TbPhoneCall } from "react-icons/tb";
import { TfiInstagram } from "react-icons/tfi";
import { TfiLocationPin } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import { CiMail } from "react-icons/ci";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const ContactComp = () => {
  return (
    <div className="px-[25px] md:px-20 lg:px-28 grid grid-cols-1 lg:grid-cols-2 justify-start py-20 mt-16 lg:mt-24">
      <div>
        <div
          className="flex flex-col items-start justify-center w-full"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="text-3xl lg:text-[40px] text-myYellow font-bold mt-1">
            Reach Out to Us
          </h2>
          <ul className="text-base flex flex-col items-start justify-start space-y-5 mt-8">
            <Link
              to="tel:+2347073373241"
              className="flex items-center justify-center gap-3"
            >
              <TbPhoneCall className="text-2xl" />
              <span className="hover:text-gray-600 duration-150 ease-linear">
                +(234) 707-337-3241.
              </span>
            </Link>

            <Link
              to="https://www.instagram.com/aaronicenergylimited?igsh=aGthbmNneGI1bWtw"
              target="_blank"
              className="flex items-center justify-center gap-3"
            >
              <TfiInstagram className="text-2xl" />
              <span className="hover:text-gray-600 duration-150 ease-linear">
                Aaronicenergylimited
              </span>
            </Link>
            <Link
              to="https://www.linkedin.com/company/aaronic-energy-ltd/"
              target="_blank"
              className="flex items-center justify-center gap-3"
            >
              <TfiLinkedin className="text-2xl" />
              <span className="hover:text-gray-600 duration-150 ease-linear">
                Aaronic Energy Ltd
              </span>
            </Link>
            <Link
              to="mailto:contact@aaronicenergy.com"
              target="_blank"
              className="flex items-center justify-center gap-3"
            >
              <CiMail className="text-2xl" />
              <span className="hover:text-gray-600 duration-150 ease-linear">
                contact@aaronicenergy.com
              </span>
            </Link>
            <li className="flex items-center justify-center gap-3">
              <TfiLocationPin className="text-2xl" />
              <span className="hover:text-gray-600 duration-150 ease-linear">
                107A, Opebi road, Ikeja, Lagos State. Nigeria.
              </span>
            </li>
          </ul>
        </div>
        <div
          className="flex flex-col items-start justify-center w-full mt-16"
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <h2 className="text-3xl lg:text-[40px] text-myYellow font-bold mt-1">
            Our Strategic Partners
          </h2>
          <ul className="text-base flex flex-col items-start justify-start space-y-5 mt-8">
            <h3 className="text-bold uppercase text-[20px] font-bold">
              Restoration Oil & Gas
            </h3>
            <li className="flex flex-col items-start justify-start w-full md:w-[70%]">
              <span className="uppercase font-bold mb-2">Address:</span>
              <div className="flex items-center justify-center gap-3">
                <TfiLocationPin className="text-4xl" />
                <span className="hover:text-gray-600 duration-150 ease-linear">
                  AVENIDA BALBOA CLLE ENRQUE Linares EDI 769, Panama City Panama
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 mt-5">
                <TfiLocationPin className="text-4xl" />
                <span className="hover:text-gray-600 duration-150 ease-linear">
                  Oﬃce #3317, Floor #33 Saeed Tower-1 Sheikh Zayed Road Dubai,
                  UAE.
                </span>
              </div>
            </li>
            <li className="flex flex-col items-start justify-start w-full md:w-[70%]">
              <span className="uppercase font-bold mb-2">Email:</span>
              <Link
                to="mailto:info@restorationoilandgas.com"
                className="flex items-center justify-center gap-3"
              >
                <CiMail className="text-2xl" />
                <span className="hover:text-gray-600 duration-150 ease-linear">
                  info@restorationoilandgas.com
                </span>
              </Link>
            </li>
            <li className="flex flex-col items-start justify-start w-[70%]">
              <span className="uppercase font-bold mb-2">Phone:</span>
              <Link
                to="tel:+971588787569"
                className="flex items-center justify-center gap-3"
              >
                <TbPhoneCall className="text-2xl" />
                <span className="hover:text-gray-600 duration-150 ease-linear">
                  +971-58-878-7569
                </span>
              </Link>
              <Link
                to="tel:+50765820239"
                className="flex items-center justify-center gap-3 mt-4"
              >
                <TbPhoneCall className="text-2xl" />
                <span className="hover:text-gray-600 duration-150 ease-linear">
                  +507-658-20239
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="flex flex-col items-start justify-center w-full mt-16"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h2 className="text-3xl lg:text-[40px] text-myYellow font-bold mt-1">
            Finance Business Partner
          </h2>
          <ul className="text-base flex flex-col items-start justify-start space-y-5 mt-8">
            <h3 className="text-bold uppercase text-[20px] font-bold">
              Blue Springs Energy LTD
            </h3>
            <li className="flex flex-col items-start justify-start w-full md:w-[70%]">
              <span className="uppercase font-bold mb-2">Address:</span>
              <div className="flex items-center justify-center gap-3">
                <TfiLocationPin className="text-4xl" />
                <span className="hover:text-gray-600 duration-150 ease-linear">
                  8 Cheif Waheed Eletu Way Osapa London, Lekki, Lagos. Nigeria.
                </span>
              </div>
            </li>
            <li className="flex flex-col items-start justify-start w-[70%]">
              <span className="uppercase font-bold mb-2">Phone:</span>
              <Link
                to="tel:+2349034750107"
                className="flex items-center justify-center gap-3 mt-4"
              >
                <TbPhoneCall className="text-2xl" />
                <span className="hover:text-gray-600 duration-150 ease-linear">
                  +234-903-475-0107
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-5 lg:mt-0">
        <img src={contactcomp} alt="World Wide 24/7 support" />
      </div>
    </div>
  );
};

export default ContactComp;
