"use client";
import React from "react";
import HeadingMain from "./HeadingMain";
import ButtonTransparentLink from "./ButtonTransparentLink";
import { FaArrowRight } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <>
      <section className="abt-sec py-5">
        <div className="container container-sm container-md container-lg container-xl container-xxxl">
          <div className="row mb-5">
            <div className="col-12 col-sm-12">
              <HeadingMain label="About Us" extclass="text-center" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 abtrow">
              <div className="abt-heading">
                <HeadingMain
                  label="Intelligent Solutions for a Brighter Digital Future"
                  extclass=""
                />
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="abt-cont mt-5">
                <p>
                  Future Avo came into being a few years ago, and since then,
                  we’ve been growing steadily, earning the trust of companies
                  from different industries by providing them with outstanding
                  solutions. Our team of highly qualified designers, developers,
                  and marketing specialists has been delivering cutting-edge
                  solutions, allowing businesses to stay ahead of the
                  competition.
                </p>
                <p>
                  We’re dedicated to helping you leverage digitalization to
                  elevate your brand. From a logo to represent your brand to a
                  website to secure sales to effective marketing, reach out to
                  us for help.
                </p>
                <ButtonTransparentLink
                  label="Learn More"
                  onClick="/about-us"
                  extclass=""
                  icon={FaArrowRight}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 offset-md-1 position-relative">
              <div className="abt-img-box">
                <img
                  src="/images/63118-min.webp"
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

export default AboutUs;
