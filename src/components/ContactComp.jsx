import React from "react";
import contactcomp from "../assets/contactcomp.png";
import { Link } from "react-router-dom";
import { TbPhoneCall } from "react-icons/tb";
import { TfiTwitter } from "react-icons/tfi";
import { TfiInstagram } from "react-icons/tfi";
import { TfiLocationPin } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import { TfiEnvelope } from "react-icons/tfi";

const ContactComp = () => {
  return (
    <div className="px-[25px] md:px-28 grid grid-cols-1 md:grid-cols-2 justify-start py-20 mt-16 md:mt-0">
      <div className="flex flex-col items-start justify-center w-full">
        <h2 className="text-3xl md:text-[40px] text-myYellow font-bold mt-1">
          Reach Out to Us
        </h2>
        <ul className="text-base flex flex-col items-start justify-start space-y-5 mt-8">
          <Link
            to="tel:+2347073373241"
            className="flex items-center justify-center gap-5"
          >
            <TbPhoneCall className="text-2xl" />
            <span className="hover:text-gray-600 duration-150 ease-linear">
              +(234) 707-337-3241.
            </span>
          </Link>
          <Link
            to="https://www.twitter.com"
            target="_blank"
            className="flex items-center justify-center gap-5"
          >
            <TfiTwitter className="text-2xl" />
            <span className="hover:text-gray-600 duration-150 ease-linear">
              Aaronicenergylimited
            </span>
          </Link>
          <Link
            to="https://www.instagram.com"
            target="_blank"
            className="flex items-center justify-center gap-5"
          >
            <TfiInstagram className="text-2xl" />
            <span className="hover:text-gray-600 duration-150 ease-linear">
              Aaronicenergylimited
            </span>
          </Link>
          <Link
            to="https://www.linkedin.com"
            target="_blank"
            className="flex items-center justify-center gap-5"
          >
            <TfiLinkedin className="text-2xl" />
            <span className="hover:text-gray-600 duration-150 ease-linear">
              Aaronicenergylimited
            </span>
          </Link>
          <Link
            to="mailto:"
            target="_blank"
            className="flex items-center justify-center gap-5"
          >
            <TfiEnvelope className="text-2xl" />
            <span className="hover:text-gray-600 duration-150 ease-linear">
              support@Omni_X.network | support@omni-X.network
            </span>
          </Link>
          <li className="flex items-center justify-center gap-5">
            <TfiLocationPin className="text-2xl" />
            <span className="hover:text-gray-600 duration-150 ease-linear">
              Opebi road, Ikeja, Lagos State
            </span>
          </li>
        </ul>
      </div>
      <div className="mt-5 md:mt-0">
        <img src={contactcomp} alt="World Wide 24/7 support" />
      </div>
    </div>
  );
};

export default ContactComp;
