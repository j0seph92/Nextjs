import React from "react";
import HeadingMain from "./HeadingMain";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio-sec py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-sm-12 col-md-8">
              <HeadingMain
                label="Designing & Developing Digital Delights"
                extclass=""
              />
              <p>
                We specialize in custom logo design, mobile application design
                and website development. Our diverse team at Web Design Hub
                excels in digital marketing, SEO, and delivering persuasive
                copywriting.
              </p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="portfolio-tab-menu">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="logodesgin-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#logodesgin"
                      type="button"
                      role="tab"
                      aria-controls="logodesgin"
                      aria-selected="true"
                    >
                      Logo Design
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="websitedesign-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#websitedesign"
                      type="button"
                      role="tab"
                      aria-controls="websitedesign"
                      aria-selected="false"
                    >
                      Website Design
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="illustration-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#illustration"
                      type="button"
                      role="tab"
                      aria-controls="illustration"
                      aria-selected="false"
                    >
                      Illustration Design
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="application-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#application"
                      type="button"
                      role="tab"
                      aria-controls="application"
                      aria-selected="false"
                    >
                      Application Desgin
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-12">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="logodesgin"
                  role="tabpanel"
                  aria-labelledby="logodesgin-tab"
                >
                  <div className="row g-3">
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/logo1.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/logo1.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/logo2.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/logo1.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/logo2.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/logo1.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="websitedesign"
                  role="tabpanel"
                  aria-labelledby="websitedesign-tab"
                >
                  <div className="row g-3">
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/web1.jpg"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/web1.jpg"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/web1.jpg"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/web1.jpg"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/web2.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/web1.jpg"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="illustration"
                  role="tabpanel"
                  aria-labelledby="illustration-tab"
                >
                  <div className="row g-3">
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/illustraion1.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/illustraion1.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/illustraion2.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/illustraion1.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/illustraion1.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/illustraion1.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="application"
                  role="tabpanel"
                  aria-labelledby="application-tab"
                >
                  <div className="row g-3">
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/mobile2.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/mobile1.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/mobile2.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/mobile1.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/mobile1.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="port-img-box">
                        <img
                          src="/images/portfolio/mobile1.png"
                          alt=""
                          className="img-fluid lazy"
                          loading="lazy"
                        />
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

export default Portfolio;
