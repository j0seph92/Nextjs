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
      <section className="InnerContentSecMiddle-sec py-5">
        <div className="InnerContentSecMiddle-overlay" style={divStyle}></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="icsm-cont">
                <HeadingMain label={sectitle} extclass="" />
                {seccont.map((item, index) => (
                  <div key={index}>
                    {item.type === "paragraph" && <p>{item.content}</p>}
                    {item.type === "ul" && (
                      <ul>
                        {item.content.map((listItem, listIndex) => (
                          <li key={listIndex}>{listItem}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
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
