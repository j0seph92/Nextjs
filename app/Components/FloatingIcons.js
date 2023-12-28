"use client";
import Link from "next/link";
import React from "react";
import { FaComment } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";

const FloatingIcons = () => {
  return (
    <div>
      <div className="floatbutton">
        <div className="btns_wrap">
          <Link href="#" className="chat_wrap liveChat">
            <span className="icoo">
              <FaComment />
            </span>
            <span>Start Live Chat</span>
          </Link>
          <Link href="tel:+19168669868" className="call_wrap">
            <span className="icoo">
              <BsTelephoneFill />
            </span>
            <span>+1 (123) 456-7891</span>
          </Link>
        </div>
        <div className="clickbutton">
          <div className="crossplus">
            <Link href="/" className="text-white">
              60% off on all services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingIcons;
