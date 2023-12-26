"use client";
import React from "react";
import Image from "next/image";
import HeadingMain from "./HeadingMain";

const InnerContentSecRight = ({ sectitle, secimg, seccont }) => {
  return (
    <>
      <section className="abt-sec py-5">
        <div className="container container-sm container-md container-lg container-xl container-xxxl">
          <div className="row">
            <div className="col-12 col-md-12 abtrow">
              <div className="abt-heading">
                <HeadingMain label={sectitle} extclass="" />
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="abt-cont mt-5">
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
              </div>
            </div>
            <div className="col-12 col-md-6 offset-md-1 position-relative">
              <div className="abt-img-box">
                <img
                  src={`/images/${secimg}`}
                  alt="futureAVO"
                  className="img-fluid lazy"
                  width={580}
                  height={680}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnerContentSecRight;
