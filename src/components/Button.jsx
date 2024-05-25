// Button.js
import React from "react";

const Button = ({ btnText, className, onClick, ...props }) => {
  return (
    <button
      className={`px-6 w-[155px] py-2 rounded-md transition-all duration-200 ease-linear ${className}`}
      onClick={onClick}
      {...props}
    >
      {btnText}
    </button>
  );
};

export default Button;
