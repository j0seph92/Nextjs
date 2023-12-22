"use client";
import React from "react";
import Image from "next/image";
import HeadingMain from "./HeadingMain";

const InnerContentSecLeft = ({ sectitle, secimg, seccont }) => {
  return (
    <>
      <section className="abt-sec abt-sec-left  py-5 mt-5">
        <div className="container container-sm container-md container-lg container-xl container-xxxl">
          <div className="row">
            <div className="col-12 col-md-12 abtrow">
              <div className="abt-heading">
                <HeadingMain label={sectitle} extclass="" />
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
            <div className="col-12 col-md-5">
              <div className="abt-cont mt-5">
                <p>{seccont}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnerContentSecLeft;