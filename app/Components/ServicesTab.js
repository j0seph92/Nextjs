"use client";
import React from "react";
import HeadingMain from "./HeadingMain";
import ButtonTransparent from "./ButtonTransparent";

const handleButtonClick = () => {
  alert("Button clicked!");
};

const ServicesTab = () => {
  const divStyle = {
    backgroundImage: 'url("../images/1631-min.webp")',
  };
  return (
    <>
      <section className="ser-sec my-5">
        <div className="container" style={divStyle}>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="sertabbox">
                <div className="serheading">
                  <HeadingMain label="Services" extclass="text-center mb-5" />
                </div>
                <div className="ser-tab-main">
                  <div className="row">
                    {/* Vertical Tabs */}
                    <div className="col-md-4">
                      <div
                        className="nav flex-column nav-pills"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <a
                          className="nav-link active"
                          id="web-design-tab"
                          data-bs-toggle="pill"
                          href="#web-design"
                          role="tab"
                          aria-controls="web-design"
                          aria-selected="true"
                        >
                          Web Design
                        </a>
                        <a
                          className="nav-link"
                          id="web-development-tab"
                          data-bs-toggle="pill"
                          href="#web-development"
                          role="tab"
                          aria-controls="web-development"
                          aria-selected="false"
                        >
                          Web Development
                        </a>
                        <a
                          className="nav-link"
                          id="logo-design-tab"
                          data-bs-toggle="pill"
                          href="#logo-design"
                          role="tab"
                          aria-controls="logo-design"
                          aria-selected="false"
                        >
                          Logo Design
                        </a>
                        <a
                          className="nav-link"
                          id="mobile-apps-tab"
                          data-bs-toggle="pill"
                          href="#mobile-apps"
                          role="tab"
                          aria-controls="mobile-apps"
                          aria-selected="false"
                        >
                          Mobile Apps
                        </a>
                        <a
                          className="nav-link"
                          id="digital-marketing-tab"
                          data-bs-toggle="pill"
                          href="#digital-marketing"
                          role="tab"
                          aria-controls="digital-marketing"
                          aria-selected="false"
                        >
                          Digital Marketing
                        </a>
                      </div>
                    </div>

                    {/* Tab Content */}
                    <div className="col-md-8">
                      <div className="tab-content" id="v-pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="web-design"
                          role="tabpanel"
                          aria-labelledby="web-design-tab"
                        >
                          <h4>Innovative Website Design Services </h4>
                          <p>
                            Are you interested in a website design that
                            captivates visitors, compelling them to engage with
                            your company? Our website design services can help
                            you out.
                          </p>
                          <div className="">
                            <ButtonTransparent
                              label="Get Started Today"
                              onClick={handleButtonClick}
                              extclass=""
                            />
                            <p className="m-0 mt-4">
                              <strong>Have a bunch of questions? </strong> Get
                              on call with us!
                            </p>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="web-development"
                          role="tabpanel"
                          aria-labelledby="web-development-tab"
                        >
                          <h4>Optimal Web Development Services </h4>
                          <p>
                            Make the most of our website development services as
                            our outstanding team of developers designs and
                            creates functional and user-friendly websites for
                            you.
                          </p>
                          <div className="">
                            <ButtonTransparent
                              label="Get Free Consultation"
                              onClick={handleButtonClick}
                              extclass=""
                            />
                            <p className="m-0 mt-4">
                              <strong>Have a bunch of questions? </strong> Get
                              on call with us!
                            </p>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="logo-design"
                          role="tabpanel"
                          aria-labelledby="logo-design-tab"
                        >
                          <h4>Premium Quality Logo Design Services </h4>
                          <p>
                            At our company, we offer logo design services that
                            allow businesses to establish their brand through
                            aesthetically pleasing logos. Call us to get
                            started!
                          </p>
                          <div className="">
                            <ButtonTransparent
                              label="Get a Quote Now"
                              onClick={handleButtonClick}
                              extclass=""
                            />
                            <p className="m-0 mt-4">
                              <strong>Have a bunch of questions? </strong> Get
                              on call with us!
                            </p>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="mobile-apps"
                          role="tabpanel"
                          aria-labelledby="mobile-apps-tab"
                        >
                          <h4>
                            High-End Mobile Application Development Services
                          </h4>
                          <p>
                            Get a mobile application that’s compatible across
                            all platforms with the help of our top-notch mobile
                            application development services. Drop us a message
                            now!
                          </p>
                          <div className="">
                            <ButtonTransparent
                              label="Book a Consultation"
                              onClick={handleButtonClick}
                              extclass=""
                            />
                            <p className="m-0 mt-4">
                              <strong>Have a bunch of questions? </strong> Get
                              on call with us!
                            </p>
                          </div>
                        </div>

                        <div
                          className="tab-pane fade"
                          id="digital-marketing"
                          role="tabpanel"
                          aria-labelledby="digital-marketing-tab"
                        >
                          <h4>Digital Marketing Services That Deliver</h4>
                          <p>
                            Watch your business thrive as you benefit from
                            wide-ranging digital marketing solutions that secure
                            visible results. Your success starts now!
                          </p>
                          <div className="">
                            <ButtonTransparent
                              label="Free Consultation Call"
                              onClick={handleButtonClick}
                              extclass=""
                            />
                            <p className="m-0 mt-4">
                              <strong>Have a bunch of questions? </strong> Get
                              on call with us!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesTab;
