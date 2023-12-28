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
        "Is your business struggling to gain a targeted audience's attention? Are you wondering how to remedy this? Well, organic search engine optimization services are the solution to your problems. Future Avo offers a comprehensive range of professional search engine optimization services along with other digital marketing amenities. ",
        <br></br>,
        <br></br>,
        "From SEO link building services to SEO marketing services and other aspects of search engine optimization marketing services, we offer them all to optimize your online presence and attract organic traffic. Here's how we can help you out.",
      ],
    },
  ];
  const contentMiddle = [
    {
      type: "paragraph",
      content: [
        "Why settle for the ordinary when you can have extraordinary? Our SEO link building services and SEO marketing services are anything but cookie-cutter. We're a team of digital specialists who possess the capability to maximize your website's potential with innovative strategies and cutting-edge techniques.",
        <br></br>,
        <br></br>,
        "Our professional SEO services are research-driven, allowing us to create customized SEO plans tailored to unique goals. As the best search engine optimization services, we don't compromise on our affordable website SEO services, which is why our experts dedicatedly work to help your brand outshine competitors.",
        <br></br>,
        <br></br>,
        "Get search engine optimization consulting services that work wonders by getting in touch with us.",
      ],
    },
  ];
  const contentLeft = [
    {
      type: "paragraph",
      content: [
        "At Future Avo, we provide a plethora of affordable search engine optimization services, making our SEO services company suitable for businesses with miscellaneous requirements and budgets. Our SEO company services include:",
      ],
    },
    {
      type: "ul",
      content: [
        "SEO consulting services",
        "Customized strategy",
        "SEO audit",
        "Competitor analysis",
        "Off-page optimization",
        "On-page optimization",
        "Link building SEO services",
        "Ongoing optimization",
        "Monthly reports",
        "ROI tracking",
        "First-party data activation",
      ],
    },
    {
      type: "paragraph",
      content: [
        "Leave no stone unturned, as our SEO consultant services handle every aspect of SEO without any hassles. Reach out to us right away to get a free quote!",
      ],
    },
  ];
  const faqData = [
    {
      question: "What are the different types of SEO?",
      answer: [
        "Generally, there are four types of search engine optimization that SEO consultant services utilize. They are as follows:",
        <br></br>,
        <br></br>,
        "•	On-page SEO",
        <br></br>,
        "•	Off-page SEO",
        <br></br>,
        "•	Local SEO",
        <br></br>,
        "•	Technical SEO",
        <br></br>,
        <br></br>,
        "Want to get familiar with these types? Schedule a quick call with our SEO consultancy services.",
      ],
    },
    {
      question: "What do SEO consultant services offer?",
      answer: [
        "SEO consultants' services entail providing professional guidance to help companies and businesses improve their rankings on different search engines. As a result, they will provide services that can assist with this task. If you want to avail SEO consultant services, contact us.",
      ],
    },
    {
      question: "Can I do SEO on my own?",
      answer:
        "While there are no hard and fast rules that stop businesses from handling SEO on their own, it's best to reach out to an expert for professional help. This is because you will require expertise and the right tools for the task, and one wrong move can worsen things for your company. So, it's best you hire top SEO services like us. ",
    },
    {
      question: "How to optimize a website?",
      answer:
        "There are several practices our professionals utilize to help optimize our clients' websites. Some popular ones include utilizing keywords appropriately, creating relevant content, using long-tail keywords for more impact, etc. ",
    },
  ];
  return (
    <>
      <InnerBanner
        welcometxt="Welcome to Future Avo"
        heading="Outrank Your Competition with Our Search Engine Optimization "
        headingcolor="Services Company"
        bancont="Get on the path to online dominance as our search engine optimization services company leads the way with unrivaled search engine optimization services. Connect with us to kickstart your journey!"
      />
      <VideoSec
        videolink="#"
        videoimg="people-generating-images-using-artificial-intelligence-laptop-min.webp"
      />
      <InnerContentSecRight
        sectitle="Professional SEO Services That Know the Ins and Outs of SEO"
        secimg="2150714059-min.webp"
        seccont={contentRight}
      />
      <InnerContentSecMiddle
        sectitle="Get Found with Our Across-the-Board Professional SEO Services"
        secimg="25806-min.webp"
        seccont={contentMiddle}
      />
      <InnerContentSecLeft
        sectitle="Higher Rankings, Higher Profits with Our SEO Consulting Services"
        secimg="2150714049-min.webp"
        seccont={contentLeft}
      />
      <FaqHome
        faqDatatxt="We strive to provide exceptional customer service and support, regardless of the subject. Take a look at our top FAQs for helpful answers."
        faqData={faqData}
      />
    </>
  );
};

export default page;
