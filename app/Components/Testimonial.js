"use client";
import React from "react";
import SubtitleTop from "./SubtitleTop";
import HeadingMain from "./HeadingMain";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const Testimonial = () => {
  var testslider = {
    dots: false,
    arrow: false,
    prevArrow: false,
    nextArrow: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  return (
    <section className="test-sec py-5">
      <div className="container">
        <div className="row gy-3 align-items-stretch">
          <div className="col-12 col-md-1">
            <div className="test-img">
              <ul>
                <li>
                  <img
                    src="/images/test-2.png"
                    alt="FutureAVO"
                    className="img-fluid lazy"
                    width={300}
                    height={300}
                  />
                </li>
                <li>
                  <img
                    src="/images/test-3.png"
                    alt="FutureAVO"
                    className="img-fluid lazy"
                    width={300}
                    height={300}
                  />
                </li>
                <li>
                  <img
                    src="/images/test-4.png"
                    alt="FutureAVO"
                    className="img-fluid lazy"
                    width={300}
                    height={300}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="test-main-img">
              <img
                src="/images/test-1.png"
                alt="FutureAVO"
                className="img-fluid lazy"
                width={300}
                height={300}
              />
              <BiSolidQuoteAltRight />
            </div>
          </div>
          <div className="col-12 col-md-6 ">
            <div className="">
              <SubtitleTop label="Testimonials" extclass="" />
              <HeadingMain label="What Our Clientele Says?" extclass="" />
              <Slider {...testslider}>
                <div className="test-main py-3">
                  <div className="test-cont">
                    <p>
                      "Their creativity absolutely blew me away, especially the
                      attention to detail that this company brought to my web
                      design project. These experts haven’t just created a
                      visually stunning website but also ensured that it was
                      responsive and optimized for a flawless user experience.
                      Loved working with them!"
                    </p>
                    <h4>
                      Katty K.
                      <span>Owner</span>
                    </h4>
                  </div>
                </div>
                <div className="test-main">
                  <div className="test-cont">
                    <p>
                      "From the moment I got in touch with this company for
                      mobile app development, I knew I was in good hands. Their
                      team of skilled developers and designers worked tirelessly
                      to bring my app idea to life. I am thrilled with the final
                      product. Thank you, guys, appreciate your dedication!"
                    </p>
                    <h4>
                      Daniela J.
                      <span>Manager</span>
                    </h4>
                  </div>
                </div>
                <div className="test-main">
                  <div className="test-cont">
                    <p>
                      "The team truly understood the essence of my brand and
                      designed a captivating logo that perfectly represents my
                      business. Their dedication to creating a unique and
                      memorable design was evident in every step of the process.
                      The results have exceeded my expectations and have become
                      a cornerstone of my brand identity."
                    </p>
                    <h4>
                      Mark D.
                      <span>CEO</span>
                    </h4>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
