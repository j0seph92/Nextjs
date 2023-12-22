import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServiceBox = ({ boxlink, icon, title, text }) => {
  return (
    <div className="serbox">
      <Link href={boxlink}>
        <div className="serboximg">
          <img
            src={icon}
            alt="icon"
            className="img-fluid lazy"
            width={64}
            height={64}
          />
        </div>
        <div className="serboxcont">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </Link>
    </div>
  );
};

export default ServiceBox;
