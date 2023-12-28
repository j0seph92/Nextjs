import React from "react";
import InnerBanner from "../Components/InnerBanner";
import VideoSec from "../Components/VideoSec";
import InnerContentSecRight from "../Components/InnerContentSecRight";
import InnerContentSecLeft from "../Components/InnerContentSecLeft";
import InnerContentSecMiddle from "../Components/InnerContentSecMiddle";
import FaqHome from "../Components/FaqHome";

const page = () => {
  const contentRight = [
    {
      type: "paragraph",
      content: [
        "Are you ready to ignite your brand's digital journey? Then, it's about time you leveraged custom digital marketing services. Quit wasting time looking for digital marketing services online; the best digital marketing agency services are right here. At our digital marketing services provider company, we are well-known for providing our clients with an assorted array of online digital marketing services, transforming brands one click at a time.",
        <br></br>,
        <br></br>,
        "So, if you want to make the most of digital marketing and are looking for digital marketing services companies, get in touch with us.",
      ],
    },
  ];
  const contentMiddle = [
    {
      type: "paragraph",
      content: [
        "Future Avo isn't your typical digital marketing services website; we're the key to unlocking digital aspirations. Unlike other digital marketing services providers, we provide complete transparency.",
        <br></br>,
        <br></br>,
        "When working with the best digital marketing services agency, here's what to expect. ",
        <br></br>,
        "1.	Initial Consultation: As part of our custom digital marketing services, we begin with discussing your business goals, target audience, and marketing needs.",
        <br></br>,
        "2.	Strategy Development: Our experts will then develop a customized digital marketing strategy.",
        <br></br>,
        "3.	Implementation: After finalization, the strategy will be implemented while optimizing various channels and running campaigns.",
        <br></br>,
        "4.	Monitoring and Optimization: The performance of your campaign is closely monitored to optimize results.",
        <br></br>,
        "5.	Reporting and Communication: Throughout the process, we'll offer regular updates to ensure you're always in the loop.",
      ],
    },
  ];
  const contentLeft = [
    {
      type: "paragraph",
      content: [
        "Our digital marketing services company has successfully established a name in the industry, becoming a leading choice for professional digital marketing services. From premium quality to diverse amenities to affordable pricing plans, we're the complete package.",
        <br></br>,
        <br></br>,
        "Are you wondering what sets our digital marketing services provider apart? Read on to find out:",
        <br></br>,
        <br></br>,
        "•	A brilliant strategic approach",
        <br></br>,
        "•	Supreme expertise and creativity ",
        <br></br>,
        "•	A highly proficient team of marketing professionals",
        <br></br>,
        "•	Data-driven marketing campaigns",
        <br></br>,
        "•	Pricing plans that you can't say no to",
        <br></br>,
        <br></br>,
        "Schedule a meeting with our digital marketing services agency to reap all we offer!",
      ],
    },
  ];
  const faqData = [
    {
      question: "What are the types of digital marketing?",
      answer: [
        "There are a plethora of digital marketing types that digital marketing services providers offer. Some common types include search engine optimization, paid-per-click, email marketing, social media marketing, SMS marketing, content marketing, etc.",
      ],
    },
    {
      question: "What is the best platform for digital marketing?",
      answer: [
        "Digital marketing entails various platforms that businesses can leverage to grow. Every platform has a target audience and is better suited for a particular tactic, so it's not easy to pick the best one for digital marketing. For instance, at our digital marketing services company, we choose the platforms based on our client's requirements.",
      ],
    },
    {
      question: "How do you choose a digital marketing services agency?",
      answer:
        "In today's world, digital marketing is thriving, and companies are prospering and growing significantly. In such situations, it becomes necessary to look for digital marketing company services. When choosing one, you should focus on your requirements and the company's expertise. If it aligns with what you're looking for, go ahead with the choice.",
    },
    {
      question: "What are some popular platforms for digital marketing?",
      answer:
        "Some of the most popular digital marketing channels currently are LinkedIn, Instagram, Facebook, TikTok, Snapchat, Pinterest, etc. Apart from these, there are online channels that companies are utilizing for their marketing efforts. ",
    },
  ];
  return (
    <>
      <InnerBanner
        welcometxt="Welcome to Future Avo"
        heading="Innovate, Engage, and Dominate with the Top "
        headingcolor="Digital Marketing Services!"
        bancont="Do you want to team up with the top digital marketing services to revolutionize your online presence? Future Avo is the best digital marketing services company for you."
      />
      <VideoSec
        videolink="#"
        videoimg="people-generating-images-using-artificial-intelligence-laptop-min.webp"
      />
      <InnerContentSecRight
        sectitle="Achieve Your Digital Visions with Custom Digital Marketing Services "
        secimg="27174-min.webp"
        seccont={contentRight}
      />
      <InnerContentSecMiddle
        sectitle="What to Expect with Our Custom Digital Marketing Services?"
        secimg="2151003709-min.webp"
        seccont={contentMiddle}
      />
      <InnerContentSecLeft
        sectitle="Why Are Our Professional Digital Marketing Services Better Than the Rest?"
        secimg="25806-min.webp"
        seccont={contentLeft}
      />
      <FaqHome
        faqDatatxt="Do you need assistance with understanding digital marketing and how our services can assist you? Get your queries sorted in this FAQ section."
        faqData={faqData}
      />
    </>
  );
};

export default page;
