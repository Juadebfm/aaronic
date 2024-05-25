import React from "react";
import Aaronic from "../assets/fulllogo.png";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" px-20 ">
      <div className="pt-20 pb-14 h-max flex items-start gap-20 justify-center border-b border-myYellow">
        <div className="w-[204px] h-auto">
          <img src={Aaronic} alt="Aaronic" />
        </div>
        <div className="grid grid-cols-3 gap-20 w-full">
          <div className="space-y-5">
            <span className="text-[18px] font-bold">Company</span>
            <ul className="flex flex-col items-start justify-start space-y-4">
              <Link>Ship Management</Link>
              <Link>Oil & Gas Trading</Link>
              <Link>Marine Logistics</Link>
              <Link>Sailors Management</Link>
            </ul>
          </div>
          <div className="space-y-5">
            <span className="text-[18px] font-bold">Solutions</span>
            <ul className="flex flex-col items-start justify-start space-y-4">
              <Link>Oil & Gas</Link>
              <Link>Crude Oil</Link>
              <Link>Fuel Oil</Link>
              <Link>Gasoline</Link>
            </ul>
          </div>
          <div className="space-y-5">
            <span className="text-[18px] font-bold">Resources</span>
            <ul className="flex flex-col items-start justify-start space-y-4">
              <Link>Social Proof</Link>
              <Link>Contact Us</Link>
              <Link>Help Center</Link>
              <Link>FAQs</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-20 py-7 flex items-center justify-between">
        <span>@2024. All rights reserved</span>
        <div className="flex items-center justify-center gap-5">
          <Link>
            <FaTwitter
              size={24}
              className="hover:text-myYellow transition-colors duration-150 ease-linear"
            />
          </Link>
          <Link>
            <FaInstagram
              size={24}
              className="hover:text-myYellow transition-colors duration-150 ease-linear"
            />
          </Link>
          <Link>
            <FaLinkedin
              size={24}
              className="hover:text-myYellow transition-colors duration-150 ease-linear"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
