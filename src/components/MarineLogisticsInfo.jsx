import React from "react";

const MarineLogisticsInfo = () => {
  return (
    <div className="p-28">
      <div className="grid grid-cols-2 place-items-center place-content-center gap-20">
        <div className="space-y-10">
          <div>
            <h2 className="text-[40px] text-myYellow font-bold mt-1 mb-8 leading-none">
              <span className="block text-black">Marine Logistics</span>
              <span>Overview</span>
            </h2>
            <p className="text-[18px] w-[85%] font-light">
              Our marine logistics service covers every aspect of maritime
              operations, ensuring that supply chain is robust and resilient. We
              specialize in both chartering and the management of fleet
              operations, providing comprehensive solutions for maritime
              transport
            </p>
          </div>
          <div>
            <h2 className="text-[32px] text-myYellow font-bold mt-1 mb-4 leading-none">
              Key Features
            </h2>
            <ul className="pl-7 space-y-6 text-[18px]">
              <li className="list-disc font-light">
                <span className="font-bold">Global Reach</span>: With a network
                of strategic partnerships we provide marine logistics solutions
                across various regions and international waters.
              </li>
              <li className="list-disc font-light">
                <span className="font-bold">Diverse Fleet</span>: We maintain a
                diverse fleet of vessels, including tankers, bulk carriers,
                offshore support vessels, and specialized equipment, to
                accommodate different cargo types, sizes, and transportation
                requirements.
              </li>
              <li className="list-disc font-light">
                <span className="font-bold">Safety and Compliance</span>: Safety
                is paramount in our marine logistics operations, therefore, we
                adhere to strict safety protocols and regulatory requirements,
                prioritizing the well-being of personnel.
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-10">
          <div>
            <h2 className="text-[32px] text-myYellow font-bold mt-1 mb-4 leading-none">
              Marine Logistics Benefits
            </h2>
            <ul className="pl-7 space-y-6 text-[18px]">
              <li className="list-disc font-light">
                <span className="font-bold">
                  Efficient Supply Chain Management
                </span>
                : Aaronic Energy Limited's marine logistics services streamline
                the supply chain, ensuring timely delivery of energy-related
                cargo, minimizing downtime.
              </li>
              <li className="list-disc font-light">
                <span className="font-bold">Risk Mitigation</span>: We employ
                rigorous safety protocols, compliance measures, and risk
                management strategies to mitigate operational risks and ensure
                the safe and secure transportation of cargo, protecting both
                assets and personnel.
              </li>
              <li className="list-disc font-light">
                <span className="font-bold">Operational Excellence</span>: We
                focus on operational excellence ensures seamless coordination,
                efficient execution, and superior performance in marine
                logistics operations, delivering value and competitive advantage
                to clients.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[32px] text-myYellow font-bold mt-1 mb-4 leading-none">
              Highest Expectations
            </h2>
            <ul className="pl-7 space-y-6 text-[18px]">
              <li className="list-disc font-light">
                <span className="font-bold">Efficient Operations</span>:
                Optimized vessel scheduling, cargo handling, and port
                operations, to minimize turnaround times and maximize
                productivity.
              </li>
              <li className="list-disc font-light">
                <span className="font-bold">Customized Solutions</span>: Tailor
                to specific needs and requirements of clients, including
                flexible scheduling, specialized handling procedures, and
                personalized service.
              </li>
              <li className="list-disc font-light">
                <span className="font-bold">Cost-Effectiveness</span>: Deliver
                cost-effective marine logistics solutions and optimizing routes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarineLogisticsInfo;
