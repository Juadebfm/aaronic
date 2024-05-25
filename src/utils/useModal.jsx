// useModal.js
import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Enable scrolling
  };

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
