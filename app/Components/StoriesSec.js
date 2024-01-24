import React from "react";
import SubtitleTop from "./SubtitleTop";
import HeadingMain from "./HeadingMain";
import Image from "next/image";

const StoriesSec = () => {
  return (
    <>
      <section className="stroies-sec py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-8">
              <SubtitleTop label="Success Stories" extclass="text-center" />
              <HeadingMain
                label="Custom Solutions that Create a Legacy"
                extclass="text-center"
              />
            </div>
          </div>
          <div className="row mt-5 stories-row">
            <div className="col-12 col-md-2">
              <div className="stories-box">
                <div className="stories-img">
                  <img
                    src="/images/business-concept-glass-world-laptop-min.webp"
                    alt="FututreAVO"
                    className="img-fluid lazy"
                    width={300}
                    height={300}
                  />
                  <span className="img-cricle"></span>
                </div>
                <div className="stories-cont">
                  <h4>Our History</h4>
                  <p>
                    Our company is the product of masterminds and incredibly
                    skilled and like-minded specialists who deliver what is
                    promised.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="stories-box">
                <div className="stories-img">
                  <img
                    src="/images/4422-min.webp"
                    alt="FututreAVO"
                    className="img-fluid lazy"
                    width={300}
                    height={300}
                  />
                  <span className="img-cricle"></span>
                </div>
                <div className="stories-cont">
                  <h4>Our Mission</h4>
                  <p>
                    We aspire to become a digital marketing company that every
                    business and professional can rely on for guidance and
                    exceptional services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="stories-box">
                <div className="stories-img">
                  <img
                    src="/images/9629-min.webp"
                    alt="FututreAVO"
                    className="img-fluid lazy"
                    width={300}
                    height={300}
                  />
                  <span className="img-cricle"></span>
                </div>
                <div className="stories-cont">
                  <h4>Our Vision</h4>
                  <p>
                    We aim to simplify branding, and that’s why we offer design,
                    development, and marketing services, including search engine
                    marketing services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="stories-box">
                <div className="stories-img">
                  <img
                    src="/images/programming-background-collage-min.webp"
                    alt="FututreAVO"
                    className="img-fluid lazy"
                    width={300}
                    height={300}
                  />
                  <span className="img-cricle"></span>
                </div>
                <div className="stories-cont">
                  <h4>Our History</h4>
                  <p>
                    Our company is the product of masterminds and incredibly
                    skilled and like-minded specialists who deliver what is
                    promised.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="stories-box">
                <div className="stories-img">
                  <img
                    src="/images/17265-min.webp"
                    alt="FututreAVO"
                    className="img-fluid lazy"
                    width={300}
                    height={300}
                  />
                  <span className="img-cricle"></span>
                </div>
                <div className="stories-cont">
                  <h4>Our History</h4>
                  <p>
                    Our company is the product of masterminds and incredibly
                    skilled and like-minded specialists who deliver what is
                    promised.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="stories-box">
                <div className="stories-img">
                  <img
                    src="/images/37070-min.webp"
                    alt="FututreAVO"
                    className="img-fluid lazy"
                    width={300}
                    height={300}
                  />
                  <span className="img-cricle"></span>
                </div>
                <div className="stories-cont">
                  <h4>Our History</h4>
                  <p>
                    Our company is the product of masterminds and incredibly
                    skilled and like-minded specialists who deliver what is
                    promised.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoriesSec;
