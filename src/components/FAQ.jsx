import React, { useState } from "react";
import { PiPlus, PiMinus } from "react-icons/pi";
import "../index.css"; // Import the CSS for animations

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const formatAnswer = (text) => {
    return { __html: text.replace(/\n/g, "<br />") };
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={onClick}>
        <h3>{question}</h3>
        {isOpen ? (
          <PiMinus className="text-myYellow text-3xl" />
        ) : (
          <PiPlus className="text-myYellow text-3xl" />
        )}
      </div>
      <div className={`faq-answer ${isOpen ? "open" : "closed"}`}>
        <div className="faq-answer-content">
          <p
            className="text-base md:text-[18px] font-light"
            dangerouslySetInnerHTML={formatAnswer(answer)}
          ></p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What services does your company provide in the oil trading industry?",
      answer: "The oil trading industry.",
    },
    {
      question:
        "What measures do you take to mitigate risks such as oil spills or accidents during shipping?",
      answer:
        "Mitigating risk related to oil spills and accidents during shipping is crucial for the environmental protection and safety. Here at Aaronic Energy limited, below are our measures taken to ensure prevention in compliance with the IMO sets global standard for shipping safety and environmental protection.\nDouble hulls vessels are considered and same approved for all cargo shipment, in the event of a collision or grounding, the inner hull provides an extra layer of protection against any oil leakage.\nRegular inspections and maintenance of our vessels aids identify potential issues that can result in leakages and get fixed if any.\nAt Aaronic Energy, we ensure high standard navigation and communication system on board our fleet, such as GPS, radar and electronic chart, helps prevent collisions and grounding. We further adhere to strict communication protocols with port authorities and traffic control centers.\nWe also put in place emergency response plans (ERPs) and periodic drills and training for our crew members ensures they know how to respond effectively during emergencies and this includes cargo handling at the loading and discharge ports. We also ensure high standard insurance coverage for our fleets and cargos in transit.",
    },
    {
      question:
        "How does your company ensure the quality and reliability of the oil products you trade?",
      answer:
        "At Aaronic Energy, we adhere to industry standards and specifications for oil products. These include parameters such as viscosity, sulfur content, density, and flash point. Meeting these standards ensures consistent quality across different batches of oil products.",
    },
    {
      question:
        "What are your environmental policies and initiatives related to marine logistics operations?",
      answer:
        "Transportation Costs and Compliance: Logistics decisions involve managing transportation costs, routing, scheduling, and compliance with regulatory requirements. These regulations cover documentation, security, safety standards, import/export trade rules, and environmental aspects (such as emissions, ballast water treatment, cleaner fuels, and energy-efficient propulsion technologies for vessels).",
    },
    {
      question:
        "What type of vessels do you use for marine logistics and what is their capacity?",
      answer:
        "At Aaronic Energy limited, we are opportune to have good number of chemical tanker and tug boats (service boats) capacities ranging from 2000 metric ton to 35,000 metric ton capacity ships.",
    },
    {
      question: "How do you track and monitor cargo during transit?",
      answer:
        "Our fleets of vessels are equipped with real-time satellite tracking devices and cargo monitoring device that feed our offices with real-time information of location and cargo conditions.",
    },
    {
      question:
        "What type of shipping services does Aaronic Energy Limited offer?",
      answer: "Loading...",
    },
    {
      question:
        "What type of vessels does Aaronic Energy Limited utilize for shipping services?",
      answer: "Loading...",
    },
    {
      question:
        "What measures does Aaronic Energy Limited take to minimize environmental impact during shipping operations?",
      answer: "Loading...",
    },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq px-[15px] md:px-28 py-14 md:py-20">
      <h2 className="font-bold text-myYellow capitalize text-center text-3xl md:text-[42px]">
        Frequently asked questions
      </h2>
      <p className="font-extralight text-[18px] md:text-[20px] text-center w-full md:w-[80%] mx-auto mt-2 mb-20 md:mb-32">
        Welcome to the FAQs section for Aaronic Energy Limited, a leading player
        in the oil trading, shipping, and marine logistics industry. Below,
        you'll find answers to some common questions regarding our expertise,
        services, and commitment to quality and sustainability.
      </p>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
