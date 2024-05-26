// Modal.js
import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import Button from "./Button";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-md shadow-lg z-10 w-[30%] max-h-[70vh] overflow-y-auto py-14 relative px-14">
        <button
          onClick={onClose}
          className="mt-4 p-4 bg-myYellow rounded-full text-black absolute right-10 top-5 hover:shadow-lg duration-150 ease-linear shadow-black"
        >
          <RiCloseLargeLine className="text-2xl text-white" />
        </button>
        <h2 className="text-[40px] font-bold text-start text-myYellow my-8">
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
          <div className="flex flex-col items-start justify-start w-full">
            <label htmlFor="services" className="text-[15px] mb-2">
              Services You Want
            </label>
            <select className="placeholder:text-gray-500 placeholder:capitalize font-extralight border border-black px-8 py-4 rounded-lg w-full">
              <option value="select services">Select Services</option>
            </select>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <label htmlFor="more info" className="text-[15px] mb-2">
              Tell us more about your company
            </label>
            <textarea
              placeholder="Leave additional messages"
              className="placeholder:text-gray-500 placeholder:capitalize font-extralight border border-black px-8 py-4 rounded-lg w-full mb-8"
            />
          </div>
          <div className="flex items-center justify-center">
            <Button
              btnText={"Submit"}
              className={"bg-myYellow text-black w-[80%] py-4 mx-auto"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
