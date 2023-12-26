import React from "react";
import InnerBanner from "../Components/InnerBanner";
import VideoSec from "../Components/VideoSec";
import InnerContentSecRight from "../Components/InnerContentSecRight";
import InnerContentSecLeft from "../Components/InnerContentSecLeft";
import InnerContentSecMiddle from "../Components/InnerContentSecMiddle";
import BlogHome from "../Components/BlogHome";
import FaqHome from "../Components/FaqHome";

const page = () => {
  const contentRight = [
    {
      type: "paragraph",
      content: [
        "In this era, branding is the key that opens doors to incredible opportunities for a company, and the company logo plays an integral role. Unleash the power of your brand as you hire a professional logo designer for custom designs logos. Are you looking for professional logo design services? We’ve got your back. As one of the top logo design companies, we take pride in creating professional logo designs that transform ideas into iconic brand symbols.",
        <br></br>,
        <br></br>,
        "Here's all you need to know. ",
      ],
    },
  ];
  const contentMiddle = [
    {
      type: "paragraph",
      content: [
        "Future Avo is a renowned custom logos design company that specializes in creating logos that turn heads, spark conversations, and create legacies. At our esteemed firm, we employ a strategic approach with a blend of creativity to craft exceptional logos. Our artistic designers possess the ability to redefine your brand identity, taking your brand from ordinary to extraordinary with their logo designs. ",
        <br></br>,
        <br></br>,
        "Through extensive research and brainstorming sessions, our talented team of designers conceptualizes unique and impactful logo ideas. Our commitment to excellence and attention to detail lead to impeccable designs.",
        <br></br>,
        <br></br>,
        "So, if you’re looking for custom logo designers for hire? Just schedule a quick call with us!",
      ],
    },
  ];
  const contentLeft = [
    {
      type: "paragraph",
      content: [
        "Our qualified and creative designers design a professional logo by initiating an in-depth analysis of our client’s brand, diving deep into the core values. A keen eye for aesthetics and a clear understanding of branding is what puts us above the rest in the game.",
        <br></br>,
        <br></br>,
        "Here’s what to expect when you hire a professional logo designer at our agency:",
      ],
    },
    {
      type: "ul",
      content: [
        "Creativity that has no bounds",
        "Timeless and aesthetically pleasing logo designs",
        "Attention to detail",
        "Versatility ",
        "100% client satisfaction",
      ],
    },
    {
      type: "paragraph",
      content: [
        "Don’t compromise on your logo design anymore; the future of branding is here with Future Avo.",
      ],
    },
  ];
  const faqData = [
    {
      question: "What are the main components of a logo design?",
      answer: [
        "The process of logo designing includes some core components that designers and companies need to keep in mind. These components are shape, color, text, and typography, with the color scheme being the most important one. ",
      ],
    },
    {
      question: "How do I improve my logo?",
      answer: [
        "Sometimes, companies may experience problems with branding as their logo design may not be as impactful as it's supposed to be. In such circumstances, many of them decide to improve their logo. That can be done by changing certain elements of the design or redoing it entirely.",
      ],
    },
    {
      question: "How do I hire a logo designer?",
      answer:
        "If you're considering hiring a logo designer but aren't sure where to begin, we recommend conducting research. Browse the internet, explore different platforms, and ask for recommendations. Doing so will give you sufficient options to take your pick from.",
    },
    {
      question: "What is the ideal logo design?",
      answer:
        "A strong logo design is relevant to the target audience and resonates with the brand's values and principles. The design should reflect what the brand stands for and should be its identity. An effective tip to create the perfect logo is to use colors wisely, as the colors you use can trigger various emotions and deliver your brand's message.",
    },
  ];
  return (
    <>
      <InnerBanner
        welcometxt="Welcome to Future Avo"
        heading="Can't Find the Best Logo Design Company? "
        headingcolor="We've Got You!"
        bancont="Do you want to get professional logo designs? Say no more! The best logo design company is at your service to create logos that turn heads and spark curiosity."
      />
      <VideoSec videolink="#" videoimg="ser-img.png" />
      <InnerContentSecRight
        sectitle="Redefine Brilliance with Our Professional Logo Design Services"
        secimg="serimg2.png"
        seccont={contentRight}
      />
      <InnerContentSecMiddle
        sectitle="Get One-Of-A-Kind Logo Masterpieces with Our  Custom Logos Design Company "
        secimg="inner-img.png"
        seccont={contentMiddle}
      />
      <InnerContentSecLeft
        sectitle="Why Choose Our Professional Logo Design Company?"
        secimg="abt-img.jpg"
        seccont={contentLeft}
      />
      <div className="p-5"></div>
      <FaqHome
        faqDatatxt="Whether it’s queries about our services or anything else, we’re here to assist our clients at all times. Here are some top FAQs."
        faqData={faqData}
      />
      <BlogHome />
    </>
  );
};

export default page;
