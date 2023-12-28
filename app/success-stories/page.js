import React from "react";
import InnerBanner from "../Components/InnerBanner";
import FaqHome from "../Components/FaqHome";
import Testimonial from "../Components/Testimonial";
import SubtitleTop from "../Components/SubtitleTop";
import HeadingMain from "../Components/HeadingMain";

const page = () => {
  const faqData = [
    {
      question: "Can I get my logo redesigned by your team?",
      answer:
        "Yes, you absolutely can. At our company, our team doesn't just design logos for companies and individuals but also handles redesigning projects or tasks that require updating or tweaking the design a bit. Therefore, don't worry; we can help you out.",
    },
    {
      question: "What should I do if I already have a website?",
      answer:
        "It depends on what you need, even if you already have a website. If you aren't satisfied with the existing one, our team can redesign it and create a new one for you. If not, we can also update the existing one. You can schedule a call with us to discuss these requirements.",
    },
    {
      question: "What digital marketing services do you offer?",
      answer:
        "At Future Avo, we offer a plethora of digital marketing solutions to establish a reputation in the online world. Our services include search engine optimization services, pay-per-click marketing, search engine optimization marketing services, etc.",
    },
    {
      question: "What sort of clients do you deal with?",
      answer:
        "One of the traits that set us apart from other companies in the industry is our unmatched experience and diverse portfolio. Throughout our career, we've successfully assisted many clients from various industries and backgrounds. Put simply, we're skilled in dealing with all sorts of clients.",
    },
  ];
  return (
    <>
      <InnerBanner
        welcometxt="Welcome to Future Avo"
        heading="Get Inspired by Real Stories of "
        headingcolor="Our Clients"
        bancont="At Future Avo, we take immense pride in being a top choice for clients. Don't believe us? Discover how our digital solutions have transformed the lives of our clients, leading to remarkable success. "
      />
      <section className="stroies-sec p-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-8">
              <SubtitleTop label="Success Stories" extclass="text-center" />
              <HeadingMain
                label="Here's a Glimpse of What Clients Gain When Working with Us"
                extclass="text-center"
              />
            </div>
          </div>
          <div className="row mt-5 align-items-stretch">
            <div className="col-12 col-md-6">
              <div className="stories-box stories-cont-inner">
                <div className="stories-img">
                  <img
                    src="/images/1668-min.webp"
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
                  <h4>Brand Consistency</h4>
                  <p>
                    We ensure our services align seamlessly with our client's
                    brand identities, creating a cohesive and impactful online
                    presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-5 align-items-stretch">
            <div className="col-12 col-md-6">
              <div className="stories-box stories-cont-inner">
                <div className="stories-cont ">
                  <h4>Enhanced User Experience</h4>
                  <p>
                    We are recognized for elevating the overall user experience
                    with our services. We aim for higher engagement and customer
                    satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="stories-box stories-cont-inner">
                <div className="stories-img">
                  <img
                    src="/images/35042-min.webp"
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
                    src="/images/medium-shot-woman-wearing-vr-glasses-min.webp"
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
                  <h4>Improved Online Visibility</h4>
                  <p>
                    Our highly customized services can help put our clients on
                    the map by providing services that catch the eye of the
                    audience enhancing online visibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />
      <FaqHome faqData={faqData} />
    </>
  );
};

export default page;
