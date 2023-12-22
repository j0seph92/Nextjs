import React from "react";

const ButtonWhite = ({ label, onClick, extclass }) => {
  return (
    <button
      className={`bg-white text-black btnmain ${extclass}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonWhite;
