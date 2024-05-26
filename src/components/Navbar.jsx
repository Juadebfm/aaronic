// Navbar.js
import React from "react";
import FullLogo from "../assets/fulllogo.png";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import Modal from "./Modal";
import useModal from "../utils/useModal";

const Navbar = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const location = useLocation();
  return (
    <nav className="px-28 py-10 flex items-center justify-between fixed top-0 z-50 w-full bg-white">
      {/* Logo */}
      <div className="w-auto h-auto">
        <img src={FullLogo} alt="Aaronic" className="w-[180px] h-auto" />
      </div>
      {/* NavItems */}
      <ul className="flex items-center justify-between gap-8 font-semibold">
        <li>
          <Link
            to="/"
            className={`${
              location.pathname === "/" ? "underline" : "no-underline"
            } underline-offset-4 transition-all duration-150 ease-linear hover:text-gray-500`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`${
              location.pathname === "/about" ? "underline" : "no-underline"
            } underline-offset-4 transition-all duration-150 ease-linear hover:text-gray-500`}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={`${
              location.pathname === "/services" ? "underline" : "no-underline"
            } underline-offset-4 transition-all duration-150 ease-linear hover:text-gray-500`}
          >
            Service
          </Link>
        </li>
        <li>
          <Link
            to="/careers"
            className={`${
              location.pathname === "/careers" ? "underline" : "no-underline"
            } underline-offset-4 transition-all duration-150 ease-linear hover:text-gray-500`}
          >
            Careers
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`${
              location.pathname === "/contact" ? "underline" : "no-underline"
            } underline-offset-4 transition-all duration-150 ease-linear hover:text-gray-500`}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      {/* NavBtns */}
      <div className="flex gap-4">
        <Link to="/contact">
          <Button
            btnText="Contact Us"
            className="border border-myYellow text-myYellow hover:bg-myYellow hover:text-black"
          />
        </Link>
        <Button
          onClick={openModal}
          btnText="Get Started"
          className="bg-myYellow text-black hover:shadow-md shadow-black"
        />
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold">Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </nav>
  );
};

export default Navbar;
