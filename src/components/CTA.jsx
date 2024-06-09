import React from "react";
import Button from "./Button";
import Modal from "./Modal";
import useModal from "../utils/useModal";

const CTA = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="h-max lg:h-[50vh] bg-myYellow px-[1.5rem] md:px-20 lg:px-28 py-[3.5rem] lg:py-0 flex flex-col items-center justify-center">
      <h3 className="font-bold text-3xl lg:text-[56px] leading-none text-center mb-4">
        Contact Aaronic Energy Today
      </h3>
      <p className="font-extralight text-[18px] lg:text-[24px] w-full lg:w-[35%] text-center mb-5">
        Reach out to us with your inquiries or to explore partnership
        opportunities.
      </p>
      <Button
        btnText={"Get Started"}
        className={
          "text-black rounded-md w-full md:w-[50%] lg:w-[30%] mx-auto px-8 py-4 bg-white mt-10"
        }
        onClick={openModal}
      />
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold">Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default CTA;
