import React from "react";

const SubtitleTop = ({ label, extclass }) => {
  return (
    <div className={`subtitle-heading ${extclass}`}>
      <h4>{label}</h4>
    </div>
  );
};

export default SubtitleTop;
