import React from "react";
import InnerBanner from "../Components/InnerBanner";
import FaqHome from "../Components/FaqHome";
import BlogHome from "../Components/BlogHome";
import Testimonial from "../Components/Testimonial";
import SubtitleTop from "../Components/SubtitleTop";
import HeadingMain from "../Components/HeadingMain";
import Image from "next/image";

const page = () => {
  const faqData = [
    {
      question: "Log In To Futureavo",
      answer:
        "Ullamcorper A Lacus Vestibulum Sed Arcu. Pellentesque Dignissim Enim Sit Congue Nisivitae Suscipit Tellus Mauris.",
    },
    {
      question: "Log In To Futureavo",
      answer:
        "Ullamcorper A Lacus Vestibulum Sed Arcu. Pellentesque Dignissim Enim Sit Congue Nisivitae Suscipit Tellus Mauris.",
    },
    {
      question: "Log In To Futureavo",
      answer:
        "Ullamcorper A Lacus Vestibulum Sed Arcu. Pellentesque Dignissim Enim Sit Congue Nisivitae Suscipit Tellus Mauris.",
    },
  ];
  return (
    <>
      <InnerBanner
        welcometxt="Welcome to Future Avo"
        heading="Looking for a Reliable Custom"
        headingcolor="Web Design Company?"
        bancont="Are you on the hunt for the top web design agency? We're one of the best web design companies and pioneers of designing websites that make waves in the digital ocean."
      />
      <section className="stroies-sec p-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-8">
              <SubtitleTop label="Success Stories" extclass="text-center" />
              <HeadingMain
                label="Generate In Seconds Using AI In The Most Easy Way"
                extclass="text-center"
              />
            </div>
          </div>
          <div className="row mt-5 align-items-stretch">
            <div className="col-12 col-md-6">
              <div className="stories-box stories-cont-inner">
                <div className="stories-img">
                  <img
                    src="/images/process-ai-1.png"
                    alt="FututreAVO"
                    className="img-fluid lazy"
                    width={500}
                    height={500}
                  />
                  <span className="img-cricle"></span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="stories-box stories-cont-inner">
                <div className="stories-cont ">
                  <h4>Log In To Futureavo</h4>
                  <p>
                    We Have Years Of Experience And A Team Of Experts In IT
                    Services Who Are Dedicated To Providing You With Top-Notch
                    Service
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-5 align-items-stretch">
            <div className="col-12 col-md-6">
              <div className="stories-box stories-cont-inner">
                <div className="stories-cont ">
                  <h4>Log In To Futureavo</h4>
                  <p>
                    We Have Years Of Experience And A Team Of Experts In IT
                    Services Who Are Dedicated To Providing You With Top-Notch
                    Service
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="stories-box stories-cont-inner">
                <div className="stories-img">
                  <img
                    src="/images/process-ai-2.png"
                    alt="FututreAVO"
                    className="img-fluid lazy"
                    width={500}
                    height={500}
                  />
                  <span className="img-cricle"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-stretch">
            <div className="col-12 col-md-6">
              <div className="stories-box stories-cont-inner">
                <div className="stories-img">
                  <img
                    src="/images/process-ai-3.png"
                    alt="FututreAVO"
                    className="img-fluid lazy"
                    width={500}
                    height={500}
                  />
                  <span className="img-cricle"></span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="stories-box stories-cont-inner">
                <div className="stories-cont ">
                  <h4>Log In To Futureavo</h4>
                  <p>
                    We Have Years Of Experience And A Team Of Experts In IT
                    Services Who Are Dedicated To Providing You With Top-Notch
                    Service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />
      <FaqHome faqData={faqData} />
      <BlogHome />
    </>
  );
};

export default page;
