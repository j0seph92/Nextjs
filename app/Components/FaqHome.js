import React from "react";
import Image from "next/image";
import HeadingMain from "./HeadingMain";
import Faq from "./Faq";

const divStyle = {
  backgroundImage: 'url("../images/faq-ai.jpg")',
};

const FaqHome = ({ faqData, faqDatatxt }) => {
  return (
    <>
      <section className="faq-sec" style={divStyle}>
        <div className="container container-sm container-md container-lg container-xl container-xxxl">
          <div className="row">
            <div className="col-12 col-sm-5">
              <div className="faq-img">
                <img
                  src="/images/faq-ai2.jpg"
                  alt="futureAVO"
                  className="img-fluid lazy"
                  width={560}
                  height={600}
                />
              </div>
            </div>
            <div className="col-12 col-sm-7">
              <div className="faq-col">
                <HeadingMain label="Frequently Asked Questions" extclass="" />
                <p>{faqDatatxt}</p>
                <Faq faqData={faqData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqHome;
