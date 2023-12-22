"use client";
import React from "react";
import HeadingMain from "./HeadingMain";
import ButtonTransparent from "./ButtonTransparent";

const InnerContentSecMiddle = ({ sectitle, secimg, seccont }) => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };
  const divStyle = {
    backgroundImage: `url(/images/${secimg})`,
  };
  return (
    <>
      <section className="InnerContentSecMiddle-sec">
        <div className="InnerContentSecMiddle-overlay" style={divStyle}></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="icsm-cont">
                <HeadingMain label={sectitle} extclass="" />
                <p>{seccont}</p>
                <ButtonTransparent
                  label="Get Started"
                  onClick={handleButtonClick}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnerContentSecMiddle;
