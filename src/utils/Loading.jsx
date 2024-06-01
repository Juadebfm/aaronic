// src/components/Loading.js
import React from "react";
import Aaronic from "../assets/fulllogo.png";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col lg:flex-row items-center justify-center bg-white z-50">
      <img
        src={Aaronic}
        alt="LOGO"
        className="w-[200px] h-[50px] animate-bounce"
      />
    </div>
  );
};

export default Loading;
