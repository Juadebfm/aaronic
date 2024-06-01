import React from "react";
import UPSimg from "../assets/usp.png";
import OrangeSlant from "../assets/orangeslant.png";

const UPS = () => {
  return (
    <div className="pr-[25px] md:pr-28 h-full md:h-[80vh] grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-10 md:gap-28 mt-8 md:mt-0 py-16 md:py-0">
      <div>
        <img src={UPSimg} alt="Awesome Services" />
      </div>
      <div className="flex flex-col items-end justify-end w-full">
        <h2 className="text-[40px] w-[70%] font-bold text-end leading-tight mb-7">
          Unique Selling Propositions (USPs)
        </h2>

        {/* Section 1 */}
        <div className="relative w-max flex items-center justify-end mb-6">
          <div className="capitalize relative z-10 border-b-[1px] p-3 hover:shadow-md shadow-gray-600 border-transparent hover:border-myYellow cursor-pointer hover:text-myYellow duration-150 ease-linear font-bold rounded-sm">
            Expertise across the value chain
          </div>
          <div className="hidden-div absolute top-0 left-0 transform -translate-x-full bg-cover bg-center p-10 text-white rounded-lg">
            <img src={OrangeSlant} alt="" className="w-full h-full" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4 text-center">
              <h3 className="text-[20px] font-bold mb-2">
                Expertise Across the Value Chain
              </h3>
              <p className="w-[80%]">
                Offering more than just logistics, our expertise spans the
                entire value chain from upstream oil exploration to consumer
                delivery, providing a holistic approach to energy management.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="relative w-max flex items-center justify-end mb-6">
          <div className="capitalize relative z-10 border-b-[1px] p-3 hover:shadow-md shadow-gray-600 border-transparent hover:border-myYellow cursor-pointer hover:text-myYellow duration-150 ease-linear font-bold rounded-sm">
            Comprehensive Logistics Solutions
          </div>
          <div className="hidden-div absolute top-0 left-0 transform -translate-x-full bg-cover bg-center p-10 text-white rounded-lg">
            <img src={OrangeSlant} alt="" className="w-full h-full" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4 text-center">
              <h3 className="text-[20px] font-bold mb-2">
                Comprehensive Logistics Solutions
              </h3>
              <p className="w-[80%]">
                We provide end-to-end logistics solutions that are tailored to
                meet the unique needs of your business, ensuring seamless
                operations and delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="relative w-max flex items-center justify-end">
          <div className="capitalize relative z-10 border-b-[1px] p-3 hover:shadow-md shadow-gray-600 border-transparent hover:border-myYellow cursor-pointer hover:text-myYellow duration-150 ease-linear font-bold rounded-sm">
            Innovative Energy Solutions
          </div>
          <div className="hidden-div absolute top-0 left-0 transform -translate-x-full bg-cover bg-center p-10 text-white rounded-lg">
            <img src={OrangeSlant} alt="" className="w-full h-full" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4 text-center">
              <h3 className="text-[20px] font-bold mb-2">
                Innovative Energy Solutions
              </h3>
              <p className="w-[80%]">
                Our innovative energy solutions are designed to optimize
                efficiency and reduce costs, helping you achieve your business
                goals sustainably.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UPS;
