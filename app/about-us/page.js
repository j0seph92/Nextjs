import React from "react";
import InnerBanner from "../Components/InnerBanner";
import FaqHome from "../Components/FaqHome";
import InnerContentSecRight from "../Components/InnerContentSecRight";
import InnerContentSecLeft from "../Components/InnerContentSecLeft";

export default function AboutUs() {
  const contentRight = [
    {
      type: "paragraph",
      content: [
        "We’re your go-to, one-stop solution for branding needs, including designing, development, digital marketing, etc. At our firm, we’re passionate about creating and developing projects that leave a lasting impression. With a talented and highly creative team of designers, developers, and digital strategists, we strive to deliver innovative solutions customized to meet every unique requirement of our clients. In every project we handle, our commitment to excellence is evident. We combine leading-edge technologies with ideas that are out of the box to keep our clients satisfied. ",
        <br></br>,
        <br></br>,
        "Relish in the power of collaboration as Future Avo’s team works closely with you to deliver what you envision. Get a quote now!",
      ],
    },
  ];
  const contentLeft = [
    {
      type: "paragraph",
      content: [
        "With years of industry experience, Future Avo has established itself as a company clients can rely on for professional services. Our expertise goes beyond just aesthetics; we understand the significance of a seamless user experience, branding, visibility, and more. Unlike other companies, we stay in the game by following the latest trends, technologies, and industry practices to deliver future-proof services. Our dedication to professionalism, eye for detail, and commitment to delivering timely projects that are within budget have earned us a reputation for brilliance.",
        <br></br>,
        <br></br>,
        "Team up with us to unlock your business's full potential with our broad range of services; drop us a message now!",
      ],
    },
  ];
  const faqData = [
    {
      question:
        "What if I need revisions after the end product has been delivered?",
      answer:
        "One of the most common concerns for clients is about revisions. In many instances, clients may request modifications even after the final product is delivered. We're pleased to inform our clients that we cater to all sorts of revisions until they're satisfied. ",
    },
    {
      question: "Will I experience any delays?",
      answer:
        "At Future Avo, we give our all to ensure there are no delays from our end. Whether it's our designing services, development services, marketing services, or anything else, we establish clear communication during all stages to ensure that. In case that happens, we will keep you in the loop.",
    },
    {
      question: "What's the process of working with your firm?",
      answer:
        "If you're interested in working with us, the first step is connecting with us. There are various ways to do that: you can call or text us, and then our representatives will guide you on how to go about things. You can also directly send us your queries, and we can proceed accordingly.",
    },
    {
      question: "What if I'm not satisfied with the services?",
      answer:
        "At our company, we deliver nothing but exceptional services, and we go the extra mile for it. So, if you're still not satisfied with our services, we'll be at your service to ensure you are, which means working on your project until that happens.",
    },
  ];
  return (
    <>
      <InnerBanner
        welcometxt="Welcome to Future Avo"
        heading="Our Visionary Approach Sets Us "
        headingcolor="Apart as Professionals"
        bancont={[
          "Future Avo is dedicated to making collaboration with us smooth and valuable. Experience what it's like partnering up with the leading professionals as we focus on delivering top-tier services and customer service that raises the bar.",
          <br></br>,
          <br></br>,
          "Schedule a call today!",
        ]}
      />
      <InnerContentSecRight
        sectitle="Who Are We?"
        secimg="descomposition-person-wearing-vr-glasses-min.webp"
        seccont={contentRight}
      />
      <InnerContentSecLeft
        sectitle="What Sets Us Apart?"
        secimg="3995-min.webp"
        seccont={contentLeft}
      />
      <FaqHome faqData={faqData} />
    </>
  );
}
