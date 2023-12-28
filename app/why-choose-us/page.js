import React from "react";
import InnerBanner from "../Components/InnerBanner";
import FaqHome from "../Components/FaqHome";
import HeadingMain from "../Components/HeadingMain";
import ServiceBoxInner from "../Components/ServiceBoxInner";

const faqData = [
  {
    question: "How long does it take to create a custom website?",
    answer:
      "The timeline of the website actually depends on multiple factors, such as the features, the complexity of the project, the client requirements, etc. At our firm, we work together with our clients and clearly communicate a timeline based on these factors.",
  },
  {
    question: "Can you help with generating content for my website?",
    answer:
      "We are known for providing design, development, and marketing services, but the list doesn't end there. We also provide quality and highly engaging content for your website as our team produces SEO-friendly content. ",
  },
  {
    question: "Will my website be mobile-friendly and responsive?",
    answer:
      "When you work with us, you don't have to experience the stress of receiving services that aren't up to par. Every website we design is responsive, mobile-friendly, and, most importantly, user-friendly. So, your website won't just look nice but will look appealing and function effectively, too.",
  },
  {
    question: "Will you offer support after my website is launched?",
    answer:
      "Unlike other companies, we're here to assist our clients through every step of the process, which is why we continue offering support even after the website is launched. As a result, our team will keep updating your website to keep it up-to-date, secure, and optimized. ",
  },
];
const page = () => {
  return (
    <>
      <InnerBanner
        welcometxt="Welcome to Future Avo"
        heading="Why Choose Future Avo for Your Web Design & Web "
        headingcolor="Development Needs?"
        bancont="Welcome to the future, where innovation meets leading-edge technologies and premium quality services. That’s what partnering up with the leading web design & web development company is like. Here’s more on us."
      />
      <section className="wcu-inner-sec p-0 p-md-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <HeadingMain
                label={[
                  "Why is Future Avo the Right",
                  <br></br>,
                  "Firm for You?",
                ]}
                extclass="text-center mb-5"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12">
              <ServiceBoxInner
                title="User-Centric Approach"
                cont="Our team is driven to create seamless user experiences, ensuring the final products lead to customer satisfaction for your users. "
                icon="guidance.webp"
                img="woman-cloud-computing-concept-min.webp"
                order2="order-2"
                order1="order-1"
              />
            </div>
            <div className="col-12 col-md-12">
              <ServiceBoxInner
                title="Creative Customization"
                cont="We understand that every business is different, which is why we offer highly customized services that resonate with your target audience and goals."
                icon="design-thinking.webp"
                img="ui-ux-representations-with-laptop-min.webp"
                order2="order-1"
                order1="order-2"
              />
            </div>
            <div className="col-12 col-md-12">
              <ServiceBoxInner
                title="Timely Deliveries"
                cont="We value your time and understand the importance of commitment; we will deliver within the agreed-upon timeframe without compromising on quality."
                icon="calendar.webp"
                img="smiling-woman-with-smartphone-min.webp"
                order2="order-2"
                order1="order-1"
              />
            </div>
            <div className="col-12 col-md-12">
              <ServiceBoxInner
                title="Commitment to Perfection"
                cont="Our team has meticulous attention to detail, ensuring that every bit of what we offer is polished and professional."
                icon="deal.webp"
                img="html-css-collage-concept-with-person-min.webp"
                order2="order-1"
                order1="order-2"
              />
            </div>
          </div>
        </div>
      </section>
      <FaqHome faqData={faqData} />
    </>
  );
};

export default page;
