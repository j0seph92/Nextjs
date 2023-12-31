import React from "react";
import SubtitleTop from "./SubtitleTop";
import HeadingMain from "./HeadingMain";
import ServiceBox from "./ServiceBox";

const WhyChooseUsSec = () => {
  return (
    <>
      <section className="wcu-sec py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <SubtitleTop label="Meet the A-Team" extclass="text-center" />
              <HeadingMain
                label="Why Choose Future Avo?"
                extclass="text-center"
              />
            </div>
          </div>
          <div className="row gy-3 mt-3">
            <div className="col-12 col-md-3">
              <ServiceBox
                boxlink="/"
                icon="/images/logo.webp"
                title="Graphic Designing"
                text="Professionals at our logo design company transform ideas into iconic logos that speak volumes about your brand."
              />
            </div>
            <div className="col-12 col-md-3">
              <ServiceBox
                boxlink="/"
                icon="/images/coding.webp"
                title="Website Designing & Development"
                text="We create functional and user-friendly web projects for businesses and individuals from diverse industries."
              />
            </div>
            <div className="col-12 col-md-3">
              <ServiceBox
                boxlink="/"
                icon="/images/mobile-development.webp"
                title="Mobile Application development"
                text="At our mobile app development company, we provide custom mobile app development services."
              />
            </div>
            <div className="col-12 col-md-3">
              <ServiceBox
                boxlink="/"
                icon="/images/social-media.webp"
                title="Digital Marketing"
                text="Browse wide-ranging services, like search engine optimization services, pay per click marketing services, etc."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUsSec;
