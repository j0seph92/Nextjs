"use client";
import React from "react";
import ButtonMain from "./ButtonMain";
import ButtonTransparentLink from "./ButtonTransparentLink";
import { FaRocketchat } from "react-icons/fa";

const divStyle = {
  backgroundImage: 'url("../images/1040-min.jpg")',
};
const handleButtonClick = () => {
  alert("Button clicked!");
};
const HomeBanner = () => {
  return (
    <>
      <section className="home-banner" style={divStyle}>
        <div className="container container-sm container-md container-lg container-xl container-xxxl">
          <div className="row gy-5 gy-md-0 gx-0 gx-md-5">
            <div className="col-12 col-sm-6 offset-sm-6">
              <div className="ban-cont">
                <h3>Welcome to Future Avo</h3>
                <h1>
                  The Leading Web Design & Web
                  <span> Development Company</span>
                </h1>
                <p className="mt-3">
                  Code, Create, Connect—that's the motto at our web design & web
                  development company as we empower businesses and people with
                  user-friendly and unified website design and website
                  development services.
                </p>
                <div className="d-flex mt-5 align-items-center">
                  <ButtonMain
                    label="Start Live Chat"
                    onClick={handleButtonClick}
                    extclass="me-2"
                    icon={FaRocketchat}
                  />
                  <ButtonTransparentLink
                    label="(123) 123-1234"
                    onClick="tel:123456789"
                    extclass=""
                  />
                  {/* <!-- Button trigger modal --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
