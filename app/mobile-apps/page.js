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
        "Future Avo is a highly esteemed company offering digital solutions for businesses that want to dominate the digital era. As one of the top app development companies, our custom mobile app development company is known for offering mobile application development services that handle everything from design to deployment. Regardless of what sort of application you require, our mobile app developers for hire seamlessly manage the process from concept to delivery, following a refined plan. ",
        <br></br>,
        <br></br>,
        "Connect with us today to hire mobile app developers.",
      ],
    },
  ];
  const contentMiddle = [
    {
      type: "paragraph",
      content:
        "Our developers follow a 6-step plan when building mobile apps. Here's a detailed outline of our work process: ",
    },
    {
      type: "ul",
      content: [
        "Planning and Discovery: This is where we work closely with our client to understand their goals and app requirements. ",
        "Design: The design phase focuses on creating the user interface (UI) and user experience (UX) of the app. This includes wireframing, prototyping, and creating visual designs that align with the client's brand and preferences.",
        "Development: Our development team then starts coding the app.",
        "Testing: In this stage, the app is tested to identify and fix any bugs or glitches. ",
        "Deployment: After rigorous testing, the app is ready for deployment. ",
        "Launch and Maintenance: Once the app is approved, it is officially launched, but we continue maintaining it to ensure the app remains secure, functional, and compatible.",
      ],
    },
  ];
  const contentLeft = [
    {
      type: "paragraph",
      content: [
        "Let your users get the opportunity to experience smooth app usage with our custom app development company. When you hire an app developer at our firm, you place your projects in the right hands. Our extensive experience allows us to leverage major technologies to build your mobile applications. ",
        <br></br>,
        <br></br>,
        "From startups to established corporations, we've acquired vast experience, making us adept at delivering digital solutions that are a cut above the rest. ",
        <br></br>,
        <br></br>,
        "Thrive in the digital world as you hire a mobile app developer with us. Schedule a call today!",
      ],
    },
  ];
  const faqData = [
    {
      question: "How long does mobile app development take?",
      answer: [
        "The time to develop a mobile app relies on certain factors. For instance, the complexity of the application, the features that are needed, the client's requirements, etc. Generally, it can take a few weeks to a few months. ",
      ],
    },
    {
      question: "What platforms are used for mobile app development?",
      answer: [
        "Mobile apps can be built for various platforms, including iOS (Apple devices) and Android (devices from different manufacturers). Some apps are also developed for cross-platform compatibility. Get more information by getting in touch with our professionals.",
      ],
    },
    {
      question: "Can I update my app after it is launched?",
      answer:
        "Many clients often want to make a few changes or update their app after it's launched, so this is a common question. The answer is yes, you can. In fact, regular updates are needed to launch new features, ensure compatibility, fix bugs, etc. So, there's nothing to worry about.",
    },
    {
      question: "How much does it cost to develop a mobile app?",
      answer:
        "The cost of mobile app development depends on factors such as the app's complexity, features, and design requirements. It's best to discuss your specific needs with us to receive an accurate cost estimate.",
    },
  ];
  return (
    <>
      <InnerBanner
        welcometxt="Welcome to Future Avo"
        heading="Top-Tier Mobile App Development Services Personalized to "
        headingcolor="Meet Individual Requirements"
        bancont="Our mobile app development services build applications that enable seamless user experience for all users on all platforms and devices. Want to hire our app developer? Get in touch!"
      />
      <VideoSec
        videolink="#"
        videoimg="people-generating-images-using-artificial-intelligence-laptop-min.webp"
      />
      <InnerContentSecRight
        sectitle="We're a Renowned Custom Mobile App Development Company"
        secimg="5837-min.webp"
        seccont={contentRight}
      />
      <InnerContentSecMiddle
        sectitle="We Create Seamless Mobile Applications That Engage Users"
        secimg="2151003710-min.webp"
        seccont={contentMiddle}
      />
      <InnerContentSecLeft
        sectitle="Hire Our Custom App Development Company for Your Digital Journey"
        secimg="27823-min.webp"
        seccont={contentLeft}
      />
      <FaqHome
        faqDatatxt="Are you confused about mobile app development? Not sure how it works? You can learn all about it by exploring the frequently asked questions section."
        faqData={faqData}
      />
    </>
  );
};

export default page;
