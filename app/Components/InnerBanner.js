"use client";
import React from "react";
import ButtonMain from "./ButtonMain";
import ButtonWhite from "./ButtonWhite";

const divStyle = {
  backgroundImage: 'url("../images/home-banner.png")',
};
const handleButtonClick = () => {
  alert("Button clicked!");
};
const InnerBanner = ({ welcometxt, bancont, heading, headingcolor }) => {
  return (
    <>
      <section className="home-banner" style={divStyle}>
        <div className="container container-sm container-md container-lg container-xl container-xxxl">
          <div className="row gy-5 gy-md-0 gx-0 gx-md-5">
            <div className="col-12 col-sm-6 offset-sm-6">
              <div className="ban-cont">
                <h3>{welcometxt}</h3>
                <h1>
                  {heading}
                  <span> {headingcolor}</span>
                </h1>
                <p className="mt-3">{bancont}</p>
                <div className="d-flex justify-content-center justify-content-md-start mt-5">
                  <ButtonMain
                    label="Contact Us"
                    onClick={handleButtonClick}
                    extclass="me-3"
                  />
                  <ButtonWhite
                    label="Learn More"
                    onClick={handleButtonClick}
                    extclass=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnerBanner;
