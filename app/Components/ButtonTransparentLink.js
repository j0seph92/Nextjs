import Link from "next/link";
import React from "react";

const ButtonTransparentLink = ({ label, onClick, extclass, icon: Icon }) => {
  if (Icon) {
    return (
      <div>
        <Link
          href={onClick}
          className={`transbtnlink ${extclass}`}
          rel="noopener noreferrer"
        >
          {label}
          {Icon && <Icon className="ms-2" />}
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Link
        href={onClick}
        className={`transbtnlink ${extclass}`}
        rel="noopener noreferrer"
      >
        {label}
      </Link>
    </div>
  );
};

export default ButtonTransparentLink;
