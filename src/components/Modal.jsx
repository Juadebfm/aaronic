// Modal.js
import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-md shadow-lg z-10  w-[30%] relative px-14">
        <button
          onClick={onClose}
          className="mt-4 p-2 bg-myYellow rounded-full text-black absolute right-10 top-5"
        >
          <RiCloseLargeLine />
        </button>
        <h2 className="text-[40px] font-bold text-start text-myYellow my-16">
          Get Started
        </h2>

        <form className="space-y-7">
          <div className="flex flex-col items-start justify-start w-full">
            <label htmlFor="business_name" className="text-[15px] mb-2">
              Business Name
            </label>
            <input
              type="text"
              placeholder="Enter your business name"
              className="placeholder:text-gray-500 placeholder:capitalize font-extralight border border-black px-8 py-4 rounded-lg w-full"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <label htmlFor="industry" className="text-[15px] mb-2">
              Industry
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className="placeholder:text-gray-500 placeholder:capitalize font-extralight border border-black px-8 py-4 rounded-lg w-full"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <label htmlFor="email" className="text-[15px] mb-2">
              Email *
            </label>
            <input
              type="email"
              required={true}
              placeholder="Enter your business name"
              className="placeholder:text-gray-500 placeholder:capitalize font-extralight border border-black px-8 py-4 rounded-lg w-full"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <label htmlFor="industry" className="text-[15px] mb-2">
              Phone Number
            </label>
            <input
              type="number"
              placeholder="Enter Phone Number"
              className="placeholder:text-gray-500 placeholder:capitalize font-extralight border border-black px-8 py-4 rounded-lg w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
