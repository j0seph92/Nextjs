import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ButtonTransparent = ({ label, onClick, extclass }) => {
  return (
    <button className={`transbtn ${extclass}`} onClick={onClick}>
      {label}
      <FaArrowRight />
    </button>
  );
};

export default ButtonTransparent;
