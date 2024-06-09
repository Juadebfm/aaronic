import React from "react";
import Aaronic from "../assets/fulllogo.png";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-[25px] lg:px-28">
      <div className="pt-10 lg:pt-20 pb-14 h-max flex flex-col lg:flex-row items-start gap-10 lg:gap-40 justify-center border-b border-myYellow">
        <div className="w-[204px] h-auto">
          <img src={Aaronic} alt="Aaronic" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-28 w-full">
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
              <Link to="/oil_gas">Oil & Gas</Link>
              <Link to="/oil_gas">Crude Oil</Link>
              <Link to="/oil_gas">Fuel Oil</Link>
              <Link to="/oil_gas">Gasoline</Link>
            </ul>
          </div>
          <div className="space-y-5">
            <span className="text-[18px] font-bold">Resources</span>
            <ul className="flex flex-col items-start justify-start space-y-4">
              <Link to="/contact">Contact Us</Link>
              <Link to="/FAQ">FAQs</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-[25px] lg:px-28 py-7 flex flex-col lg:flex-row gap-7 lg:gap-0 items-center justify-between">
        <span>@2024. All rights reserved</span>
        <div className="flex items-center justify-center gap-5">
          {/* <Link>
            <FaTwitter
              size={24}
              className="hover:text-myYellow transition-colors duration-150 ease-linear"
            />
          </Link> */}
          <Link
            to="https://www.instagram.com/aaronicenergylimited?igsh=aGthbmNneGI1bWtw"
            target="_blank"
          >
            <FaInstagram
              size={24}
              className="hover:text-myYellow transition-colors duration-150 ease-linear"
            />
          </Link>
          <Link
            to="https://www.linkedin.com/company/aaronic-energy-ltd/"
            target="_blank"
          >
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
