import React from "react";
import Aaronic from "../assets/fulllogo.png";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-[35px] md:px-28">
      <div className="pt-10 md:pt-20 pb-14 h-max flex flex-col md:flex-row items-start gap-10 md:gap-40 justify-center border-b border-myYellow">
        <div className="w-[204px] h-auto">
          <img src={Aaronic} alt="Aaronic" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-28 w-full">
          <div className="space-y-5">
            <span className="text-[18px] font-bold">Company</span>
            <ul className="flex flex-col items-start justify-start space-y-4">
              <Link
                to="/view_shipping"
                className={`${
                  location.pathname === "/view_shipping"
                    ? "text-gray-500"
                    : "text-black"
                } underline-offset-4 transition-all duration-150 ease-linear hover:text-gray-500`}
              >
                Ship Management
              </Link>
              <Link
                to="/oil_gas"
                className={`${
                  location.pathname === "/oil_gas"
                    ? "text-gray-500"
                    : "text-black"
                } underline-offset-4 transition-all duration-150 ease-linear hover:text-gray-500`}
              >
                Oil & Gas Trading
              </Link>
              <Link
                to="/marine_logistics"
                className={`${
                  location.pathname === "/marine_logistics"
                    ? "text-gray-500"
                    : "text-black"
                } underline-offset-4 transition-all duration-150 ease-linear hover:text-gray-500`}
              >
                Marine Logistics
              </Link>
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
              <Link to="/FAQ">FAQs</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-[35px] md:px-28 py-7 flex flex-col md:flex-row gap-7 md:gap-0 items-center justify-between">
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
