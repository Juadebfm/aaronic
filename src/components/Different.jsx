import React from "react";
import DifferentBg from "../assets/differentbg.png";
import Pointing from "../assets/lady_pointing.png";
import ManElectricity from "../assets/man_electricity.png";
import ManElectricityPartner from "../assets/man_electricity_partner.png";
import WomanBuilding from "../assets/woman_building.png";
import Skew from "../assets/skew.png";
import SettingsIcon from "../assets/settings-icon.svg";

const Different = () => {
  return (
    <div className="relative my-20">
      <img src={DifferentBg} alt="Background" className="w-full h-auto" />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="flex items-center bg-myYellow/70 text-white py-3 px-6 mt-10 w-max">
          <img src={SettingsIcon} alt="Settings" className="mr-2" />
          <p className="drop-shadow-sm normal-case font-light text-[18px]">
            Core Features & Quality Management
          </p>
        </div>
        <h2 className="text-[40px] text-white font-bold mt-5">
          What Makes Us Different
        </h2>
        <div className="grid grid-cols-4 place-items-center place-content-center gap-10 px-20 mt-10">
          <div className="flex flex-col items-center">
            <img src={Pointing} alt="Lady Pointing" className="mb-4" />
            <div
              className="-mt-12 p-[2px] w-full h-max"
              style={{
                backgroundImage: `url(${Skew})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="inset-0 flex flex-col items-center justify-center text-center text-black">
                <h3 className="text-xl font-semibold leading-none py-2">
                  Early Engagement
                </h3>
                <p className="text-base font-light pt-3 line-clamp-5 py-2 px-8">
                  Early engagement enables us to integrate innovative
                  technologies, environmental considerations, and regulatory
                  compliance, ensuring projects are executed efficiently.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={ManElectricity} alt="Lady Pointing" className="mb-4" />
            <div
              className="-mt-12 p-[2px] w-full h-max"
              style={{
                backgroundImage: `url(${Skew})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="inset-0 flex flex-col items-center justify-center text-center text-black">
                <h3 className="text-xl font-semibold leading-none py-2">
                  Integrity
                </h3>
                <p className="text-base font-light px-8 pt-3 line-clamp-5 py-2">
                  Integrity is the cornerstone at Aaronic Energy Limited. Our
                  commitment permeates every aspect of our operations, from
                  decision-making to client relationships and community
                  engagement.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={ManElectricityPartner}
              alt="Lady Pointing"
              className="mb-4"
            />
            <div
              className="-mt-12 p-[2px] w-full h-max"
              style={{
                backgroundImage: `url(${Skew})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="inset-0 flex flex-col items-center justify-center text-center text-black">
                <h3 className="text-xl font-semibold leading-none py-2">
                  Solution
                </h3>
                <p className="text-base font-light px-8 line-clamp-5 py-2">
                  Our dedication to solution-oriented approaches means we don't
                  just identify problems; we actively seek out opportunities for
                  improvement and innovation.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={WomanBuilding} alt="Lady Pointing" className="mb-4" />
            <div
              className="-mt-12 p-[2px] w-full h-max"
              style={{
                backgroundImage: `url(${Skew})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="inset-0 flex flex-col items-center justify-center text-center text-black">
                <h3 className="text-xl font-semibold leading-none py-2">
                  Innovation
                </h3>
                <p className="text-base font-light px-8 line-clamp-5 py-2">
                  We remain at the forefront of the energy transition, poised to
                  seize opportunities, overcome obstacles, and lead the way
                  towards a more sustainable and prosperous future for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Different;
