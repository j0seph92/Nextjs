"use client";
import React from "react";
import ButtonMain from "./ButtonMain";
import ButtonTransparentLink from "./ButtonTransparentLink";
import { FaRocketchat } from "react-icons/fa";
import HeadingMain from "./HeadingMain";
import Image from "next/image";

const Section3 = () => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };
  return (
    <>
      <section className="thirdsec bg-grad py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="">
                <HeadingMain
                  label="Let us develop a responsive website to help you attract more
                  visitors"
                  extclass=""
                />
                <p>
                  Our professional web development team is at your service,
                  dedicated to design and develop dynamic websites that urges
                  visitors to take your desired action on the website.
                </p>
                <div className="d-flex align-items-center">
                  <div className="link-box">
                    <ButtonMain
                      label="Start Live Chat"
                      onClick={handleButtonClick}
                      extclass="me-2"
                      icon={FaRocketchat}
                    />
                  </div>

                  <div className="link-box">
                    <ButtonTransparentLink
                      label="(123) 123-1234"
                      onClick="tel:123456789"
                      extclass=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="thirdsec-img">
                <img
                  src="/images/img1.png"
                  alt="futrueAVO"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
