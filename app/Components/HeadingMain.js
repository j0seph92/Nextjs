import React from "react";

const HeadingMain = ({ label, extclass }) => {
  return (
    <div className={`main-heading ${extclass}`}>
      <h3>{label}</h3>
    </div>
  );
};

export default HeadingMain;
