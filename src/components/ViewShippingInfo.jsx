import React from "react";

const ViewShippingInfo = () => {
  return (
    <div className="p-28">
      <div className="grid grid-cols-2 place-items-center place-content-center gap-20">
        <div className="space-y-10">
          <div>
            <h2 className="text-[40px] text-myYellow font-bold mt-1 mb-8 leading-none">
              <span className="block text-black">Shipping</span>
              <span>Overview</span>
            </h2>
            <p className="text-[18px] w-[85%] font-light">
              We excel in providing comprehensive shipping solutions in the
              energy sector. With a focus on reliability, efficiency, and
              safety, Aaronic Energy manages the transportation of various oil
              products, including crude oil and refined petroleum, leveraging a
              diverse fleet of vessels and our expertise in marine logistics
              ensures seamless operations, from vessel chartering to cargo
              handling and freight forwarding.
            </p>
          </div>
          <div>
            <h2 className="text-[32px] text-myYellow font-bold mt-1 mb-4 leading-none">
              Key Features
            </h2>
            <ul className="pl-7 space-y-6 text-[18px]">
              <li className="list-disc font-light">
                <span className="font-bold">Quality Assurance</span>: We adhere
                to stringent quality standards and work with reputable suppliers
                and partners to ensure the quality and reliability of oil
                products throughout the shipping process.
              </li>
              <li className="list-disc font-light">
                <span className="font-bold">Diverse Fleet</span>: Aaronic Energy
                Limited utilizes a diverse fleet of vessels, including tankers,
                barges, and specialized vessels, to transport oil products
                safely and efficiently.
              </li>
              <li className="list-disc font-light">
                <span className="font-bold">Safety Measures</span>: Prioritize
                safety in all aspects of shipping operations, implementing
                rigorous safety protocols and compliance with international
                maritime regulations.
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-10">
          <div>
            <h2 className="text-[32px] text-myYellow font-bold mt-1 mb-4 leading-none">
              Shipping Benefits
            </h2>
            <ul className="pl-7 space-y-6 text-[18px]">
              <li className="list-disc font-light">
                <span className="font-bold">Reliable Delivery</span>: Clients
                can rely on Aaronic Energy Limited for timely and dependable
                delivery of oil products, ensuring consistent supply chains and
                meeting market demands.
              </li>
              <li className="list-disc font-light">
                <span className="font-bold">Quality Assurance</span>: Clients
                benefit from our commitment to quality assurance, ensuring that
                oil products are transported and delivered with integrity and
                adherence to industry standards.
              </li>
              <li className="list-disc font-light">
                <span className="font-bold">Risk Mitigation</span>: With their
                emphasis on safety and compliance, we help mitigate risks
                associated with shipping, protecting clients' assets and
                reputations.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[32px] text-myYellow font-bold mt-1 mb-4 leading-none">
              Highest Expectations
            </h2>
            <ul className="pl-7 space-y-6 text-[18px]">
              <li className="list-disc font-light">
                <span className="font-bold">Industry-Leading Expertise</span>:
                We demonstrate unparalleled expertise in maritime logistics,
                utilizing advanced technologies and best practices to optimize
                shipping operations.
              </li>
              <li className="list-disc font-light">
                <span className="font-bold">Transparent Communication</span>:
                Clear and transparent communication from Aaronic Energy Limited,
                with regular updates on shipment status, potential delays, and
                any pertinent information related to cargo.
              </li>
              <li className="list-disc font-light">
                <span className="font-bold">Seamless Innovative Solutions</span>
                : We continually improve shipping services, staying ahead of
                industry trends and delivering cutting-edge solutions that
                enhance efficiency, reduce costs, and mitigate risks.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewShippingInfo;
