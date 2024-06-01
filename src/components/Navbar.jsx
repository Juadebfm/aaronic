import React, { useState, useEffect } from "react";
import FullLogo from "../assets/fulllogo.png";
import SmallLogo from "../assets/aaronicSmall.png";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import Modal from "./Modal";
import useModal from "../utils/useModal";
import MenuIcon from "../assets/menu.png";
import CloseIcon from "../assets/close.png";

const Navbar = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`px-[30px] md:px-20 lg:px-28 py-7 lg:py-10 flex items-center justify-between fixed top-0 z-50 w-full bg-white ${
        isScrolled ? "shadow-md shadow-black/30" : ""
      }`}
    >
      {/* Logo */}
      <div className="w-auto h-auto">
        <img
          src={FullLogo}
          alt="Aaronic Full Logo"
          className="hidden lg:flex w-[180px] h-auto"
        />
        <img
          src={FullLogo}
          alt="Aaronic Full Logo"
          className="block lg:hidden w-[130px] h-auto"
        />
      </div>
      {/* NavItems for larger screens */}
      <ul className="hidden lg:flex items-center justify-between gap-8 font-semibold">
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
      {/* NavBtns for larger screens */}
      <div className="hidden lg:flex gap-4">
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
      {/* Menu icon for smaller screens */}
      <img
        src={isMobileMenuOpen ? CloseIcon : MenuIcon}
        className="cursor-pointer block lg:hidden h-[45px] w-[45px]"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      />
      {/* Mobile nav items */}
      {isMobileMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-10 py-16 text-[19px] font-semibold lg:hidden h-[65vh]">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname === "/" ? "underline" : "no-underline"
              } underline-offset-4 transition-all duration-150 ease-linear hover:text-gray-500`}
              onClick={toggleMobileMenu}
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
              onClick={toggleMobileMenu}
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
              onClick={toggleMobileMenu}
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
              onClick={toggleMobileMenu}
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
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}

      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold">Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </nav>
  );
};

export default Navbar;
