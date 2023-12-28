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
        "Almost every consumer utilizes search engines like Google to research a project or service before making a purchase. Unfortunately, the results that rank the highest get the most attention and eventually more sales, too. So, if your website isn't ranking higher on search engines, you can be at a disadvantage. ",
        <br></br>,
        <br></br>,
        "However, our search engine marketing consulting services give you just the competitive edge you need as we've been providing top-tier digital marketing solutions, including affordable search engine marketing services. ",
        <br></br>,
        <br></br>,
        "Let's dive into how things work at Future Avo.",
      ],
    },
  ];
  const contentMiddle = [
    {
      type: "paragraph",
      content: [
        "At Future Avo, we have a dedicated team of highly skilled specialists. Read on to explore how they operate.",
        <br></br>,
        <br></br>,
        "1.	Understanding Your Objectives: We begin with detailed discussions to get a clear perspective of your goals.",
        <br></br>,
        "2.	Target Audience Analysis: Our team leaves no stone unturned as we conduct thorough research to identify your target audience and their search behavior.",
        <br></br>,
        "3.	Keyword Research: We then perform extensive keyword research to identify relevant and high-performing keywords for your business.",
        <br></br>,
        "4.	Campaign Development: Based on our research, a customized search engine marketing campaign is developed.",
        <br></br>,
        "5.	Monitoring and Optimization: The task isn't done here; we closely monitor its performance after the campaign is live.",
        <br></br>,
        "6.	Performance Reporting: We provide regular reports highlighting key metrics such as impressions, clicks, conversions, and return on investment (ROI).",
      ],
    },
  ];
  const contentLeft = [
    {
      type: "paragraph",
      content: [
        "If you're looking for a praiseworthy SEM services company, you're in the right place. Our SEM services agency makes sure our client businesses stand tall and proud through effective marketing campaigns. Our team of experts devises tailored campaigns that drive targeted traffic to your website, boosting brand visibility and spiking conversions. With strategic keyword research, compelling ad copies, and data-driven optimizations, our  SEM consulting services will help you lead the search engine game.",
        <br></br>,
        <br></br>,
        "Say hello to high-traffic and eager customers with our search engine marketing expertise!",
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
        heading="Can't Find Reliable Search Engine Marketing Services? "
        headingcolor="Say No More!"
        bancont="Are you tired of getting lost in the competition? You don't have to deal with that anymore with our search engine optimization marketing services. Get in touch to avail our SEM marketing services."
      />
      <VideoSec
        videolink="#"
        videoimg="people-generating-images-using-artificial-intelligence-laptop-min.webp"
      />
      <InnerContentSecRight
        sectitle="Search Engine Marketing Services That Gets Your Business Recognized"
        secimg="461-min.webp"
        seccont={contentRight}
      />
      <InnerContentSecMiddle
        sectitle="Workflow of Our Professional Search Engine Marketing Services"
        secimg="18165-min.webp"
        seccont={contentMiddle}
      />
      <InnerContentSecLeft
        sectitle="Connect with Our SEM Services Company to Put Your Business Front and Center "
        secimg="2150710000-min.webp"
        seccont={contentLeft}
      />
      <FaqHome
        faqDatatxt="Our commitment to our clients means we are always ready to lend a helping hand, whether it's about our services or anything else. Browse our FAQs for more information."
        faqData={faqData}
      />
    </>
  );
};

export default page;
