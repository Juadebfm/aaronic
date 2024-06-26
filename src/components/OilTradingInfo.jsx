import React from "react";

const OilTradingInfo = () => {
  return (
    <div className="p-[30px] lg:p-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center place-content-center gap-20">
        <div className="space-y-10">
          <div>
            <h2 className="text-[40px] text-myYellow font-bold mt-1 mb-8 leading-tight">
              <span className="block text-black">Oil Trading</span>
              <span>Overview</span>
            </h2>
            <p className="text-[18px] w-full lg:w-[85%] font-light">
              We are at the forefront of the oil trading industry, offering
              robust trading solutions that drive growth and profitability. With
              a focus on both crude and refined oil products, Aaronic Energy
              Limited leverages market insights and strategic partnerships to
              optimize supply chains and maximize returns.
            </p>
          </div>
          <div>
            <h2 className="text-[32px] text-myYellow font-bold mt-1 mb-4 leading-tight">
              Key Features
            </h2>
            <ul className="pl-7 space-y-6 text-[18px]">
              <li className="list-disc font-light">
                <span className="font-bold">Market Analysis</span>: Detailed
                market analysis and forecasting to inform purchasing and selling
                strategies.
              </li>
              <li className="list-disc font-light">
                <span className="font-bold">Supply Chain Optimization</span>:
                Streamlined logistics and storage solutions to reduce costs and
                improve efficiency.
              </li>
              <li className="list-disc font-light">
                <span className="font-bold">Hedging Strategies:</span>:
                Sophisticated risk management tools to protect against market
                unpredictability.
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-10">
          <div>
            <h2 className="text-[32px] text-myYellow font-bold mt-1 mb-4 leading-tight">
              Oil Trading Benefits
            </h2>
            <ul className="pl-7 space-y-6 text-[18px]">
              <li className="list-disc font-light">
                <span className="font-bold">Market Intelligence</span>: Gain a
                competitive edge with our real-time market insights and
                forecasting, helping you make informed trading decisions.
              </li>
              <li className="list-disc font-light">
                <span className="font-bold">Financial Stability</span>: Enhance
                your financial performance through strategic buying and selling,
                capitalizing on market fluctuations.
              </li>
              <li className="list-disc font-light">
                <span className="font-bold">
                  Diversification of Supply Sources
                </span>
                : Secure your operations against market disruptions with
                multiple sourcing options and supply chains.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[32px] text-myYellow font-bold mt-1 mb-4 leading-tight">
              Highest Expectations
            </h2>
            <ul className="pl-7 space-y-6 text-[18px]">
              <li className="list-disc font-light">
                <span className="font-bold">Maximized Profit Margins</span>:
                Achieving the best possible buying and selling prices
                consistently, enhancing profit margins through expert market
                timing and negotiation.
              </li>
              <li className="list-disc font-light">
                <span className="font-bold">Robust Market Intelligence</span>:
                Providing predictive analytics and deep market insights that
                outperform standard market reports, giving clients a strategic
                edge.
              </li>
              <li className="list-disc font-light">
                <span className="font-bold">
                  Seamless Integration with Client Operations
                </span>
                : Oil trading operations that are so well integrated with client
                needs that they function as an in-house extension of the
                client’s business.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OilTradingInfo;
