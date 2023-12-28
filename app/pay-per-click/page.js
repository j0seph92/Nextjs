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
        "Step into the future where nothing can bring your company down, thanks to our PPC marketing services. Calling out to all those looking for surefire ways to drive the right traffic to their website and spark conversions, our pay per click advertising company has got your back! At our PPC management company, we have the industry's top experts who create highly optimized PPC campaigns that drive results.",
        <br></br>,
        <br></br>,
        "Want to hire our pay per click advertising company? Just drop us a message to get started!",
      ],
    },
  ];
  const contentMiddle = [
    {
      type: "paragraph",
      content: [
        "Are you confused if we're the right choice for PPC advertising services? Well, you're about to change your mind. We pride ourselves on providing top-of-the-line PPC campaign management services and PPC marketing services for our clients. Our team of certified and experienced PPC specialists utilizes cutting-edge tools and the latest technologies to create campaigns that perform well. ",
        <br></br>,
        <br></br>,
        "At our PPC management agency, we take our time understanding every client's requirement and other essentials and then devise a tailored strategy to deliver maximum results. ",
        <br></br>,
        <br></br>,
        "Get ready to skyrocket your online visibility, boost leads, and grow your business with our pay per click management services. Connect with us for further details!",
      ],
    },
  ];
  const contentLeft = [
    {
      type: "paragraph",
      content: [
        "Ready to take your online advertising to the next level? Our pay per click advertising agency is at your service. With our PPC marketing agency, you can acquire instant visibility on search engines, reaching your target audience when they're looking for your products or services. Forget about the stress of digital marketing as you gain complete control with us.",
        <br></br>,
        <br></br>,
        "We provide complete transparency, sharing detailed reports with insights on the performance of the campaign, permitting our clients to track their ROI and make informed decisions.",
        <br></br>,
        <br></br>,
        "Let the clicking begin with our PPC advertising agency.",
      ],
    },
  ];
  const faqData = [
    {
      question: "What exactly is PPC advertising?",
      answer: [
        "Pay-per-click, or PPC, is a top advertising model where marketing professionals pay depending on the number of individuals who click on their advertisements. This marketing tactic can help boost a website's visibility on different search engines and draw traffic to its pages.",
      ],
    },
    {
      question: "What are the key components of a PPC ad?",
      answer: [
        "A PPC ad comprises certain elements, with the core ones being a headline, a description, the URL that needs to be displayed, and the destination URL. When creating PPC ads, it's essential to focus on drafting a catchy heading and informative description. ",
      ],
    },
    {
      question: "Who should use PPC?",
      answer:
        "Whether you are a large enterprise or just a startup, marketing efforts are constantly required, especially digital marketing. So, incorporating pay-per-click advertising in your strategy can be valuable as it will help you stand out in the crowd, improving visibility and increasing sales.",
    },
    {
      question: "Does PPC help SEO?",
      answer:
        "PPC (Pay-Per-Click) campaigns usually don't directly affect how keywords rank in search engine optimization. These two channels are actually separate, so it will not have any impact on the results. However, since PPC helps online visibility, it can indirectly help SEO.",
    },
  ];
  return (
    <>
      <InnerBanner
        welcometxt="Welcome to Future Avo"
        heading="Better Clicks, Better Leads with Future Avo's "
        headingcolor="PPC Management Services"
        bancont="Ready to turn clicks into profits? We bring you exceptional PPC management services for businesses that want to become unstoppable. Climb up the success ladder with our PPC services."
      />
      <VideoSec
        videolink="#"
        videoimg="people-generating-images-using-artificial-intelligence-laptop-min.webp"
      />
      <InnerContentSecRight
        sectitle="Click Your Way to the Top with a Top-Tier PPC Management Company "
        secimg="1131-min.webp"
        seccont={contentRight}
      />
      <InnerContentSecMiddle
        sectitle="Why Future Avo for PPC Advertising Services?"
        secimg="1631-min.webp"
        seccont={contentMiddle}
      />
      <InnerContentSecLeft
        sectitle="Ready? Click and Succeed with Our PPC Marketing Agency"
        secimg="2305-min.webp"
        seccont={contentLeft}
      />
      <FaqHome
        faqDatatxt="Need help with our services or anything else? Don't hesitate to reach out to us – our team is here to support our clients 24/7. Check out our top FAQs for quick answers."
        faqData={faqData}
      />
    </>
  );
};

export default page;
