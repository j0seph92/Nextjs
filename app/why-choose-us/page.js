import React from "react";
import InnerBanner from "../Components/InnerBanner";
import FaqHome from "../Components/FaqHome";
import BlogHome from "../Components/BlogHome";
import HeadingMain from "../Components/HeadingMain";
import ServiceBoxInner from "../Components/ServiceBoxInner";

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
const page = () => {
  return (
    <>
      <InnerBanner
        welcometxt="Welcome to Future Avo"
        heading="Looking for a Reliable Custom"
        headingcolor="Web Design Company?"
        bancont="Are you on the hunt for the top web design agency? We’re one of the best web design companies and pioneers of designing websites that make waves in the digital ocean."
      />
      <section className="wcu-inner-sec p-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <HeadingMain
                label="The Reasons To Choose Us"
                extclass="text-center"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12">
              <ServiceBoxInner />
            </div>
            <div className="col-12 col-md-12">
              <ServiceBoxInner order2="order-1" order1="order-2" />
            </div>
            <div className="col-12 col-md-12">
              <ServiceBoxInner />
            </div>
          </div>
        </div>
      </section>
      <FaqHome faqData={faqData} />
      <BlogHome />
    </>
  );
};

export default page;
