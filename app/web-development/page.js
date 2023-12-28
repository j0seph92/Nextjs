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
        "A website is one of the core elements of branding, and a fully functioning and visually engaging one can grab the attention of potential and existing clients. That's where our custom web development company comes into the mix. ",
        <br></br>,
        <br></br>,
        "We follow a meticulous process to create a website that resonates with your brand. From wireframes and designing to coding and testing, we execute every step with precision. With a focus on user experience and functionality, we create intuitive navigation, captivating visuals, and responsive layouts. ",
        <br></br>,
        <br></br>,
        "Read on to discover what it's like working with the best web development company. ",
      ],
    },
  ];
  const contentMiddle = [
    {
      type: "paragraph",
      content:
        "Here's an overview of how we tackle projects as a leading custom website development services providers:",
    },
    {
      type: "ul",
      content: [
        "Planning: At our website development firm, we begin by understanding your goals, target audience, and required features for the website.",
        "Design: Our talented designers create wireframes and visual designs that are parallel to your brand and user experience.",
        "Development: We then write clean code and implement the functionality.",
        "Testing: We rigorously test the website across different devices and browsers.",
        "Launch: Once everything is ready, the team at our web development agency deploys the website to a live server.",
        "Maintenance: The job isn't done yet; we continue to offer ongoing assistance and maintenance to ensure your website remains secure and up-to-date.",
      ],
    },
  ];
  const contentLeft = [
    {
      type: "paragraph",
      content: [
        "Our web development company combines years of experience and a thorough understanding of cutting-edge technologies and programming languages to provide a custom website development service. What makes Future Avo one of the best website development services and the best web development company is that we constantly improve our development processes. ",
        <br></br>,
        <br></br>,
        "Are you considering hiring our custom web development company for your brand? Here's what you'll get:",
      ],
    },
    {
      type: "ul",
      content: [
        "Completely customized website",
        "Responsive designs",
        "Professional and highly appealing visuals",
        "Unwavering support and assistance",
      ],
    },
    {
      type: "paragraph",
      content: [
        "So, what are you waiting for? Hire our web development firm. ",
      ],
    },
  ];
  const faqData = [
    {
      question: "What are the different phases of web development?",
      answer: [
        "Web development can be divided into a couple of stages to complete a project. These phases are as follows:",
        <br></br>,
        <br></br>,
        "•	Information gathering",
        "•	Planning",
        "•	Designing",
        "•	Coding",
        "•	Testing",
        "•	Reviewing and launching ",
        "•	Maintenance ",
      ],
    },
    {
      question: "What types of projects are there in web development?",
      answer: [
        "Since we aspire to be the best web developer company, we take on multiple projects regardless of the scope and industry. As a result, we work on diverse projects, and here are some common types:",
        <br></br>,
        <br></br>,
        "•	E-commerce Websites",
        <br></br>,
        "•	Blogging Platforms",
        <br></br>,
        "•	Portfolio Websites",
        <br></br>,
        "•	Corporate Websites",
        <br></br>,
        "•	Social Networking Sites",
        <br></br>,
        "•	Content Management Systems (CMS)",
        <br></br>,
        "•	Web Applications",
        <br></br>,
        "•	Online Learning Platforms",
        <br></br>,
        "•	Booking and Reservation Systems",
        <br></br>,
        "•	News and Media Websites",
      ],
    },
    {
      question: "How long does it take for each web development project?",
      answer:
        "Generally, the timeline for every project will depend entirely on the complexity and size of the project. It also depends on the expertise of the company offering the services. Therefore, simpler projects can be delivered in a shorter span compared to complex projects.",
    },
    {
      question:
        "What is the most common programming language used in web development?",
      answer:
        "Although developers use many languages, JavaScript is the most common one globally. This is simply because the majority of the web browsers utilize it. Besides JavaScript, HTML, React, Java, CSS, React, etc., are also used.",
    },
  ];
  return (
    <>
      <InnerBanner
        welcometxt="Welcome to Future Avo"
        heading="Want to Work with the Best "
        headingcolor="Website Development Company?"
        bancont="Are you interested in teaming up with the best website development company? Look no further than Future Avo, as we're one of the best web development companies. Let's begin!"
      />
      <VideoSec
        videolink="#"
        videoimg="people-generating-images-using-artificial-intelligence-laptop-min.webp"
      />
      <InnerContentSecRight
        sectitle="Leave a Lasting Impression with Our Web Development Agency"
        secimg="2150714193-min.webp"
        seccont={contentRight}
      />
      <InnerContentSecMiddle
        sectitle="Workflow of Our Web Development Company"
        secimg="2151003709-min.webp"
        seccont={contentMiddle}
      />
      <InnerContentSecLeft
        sectitle="What Makes Us the Best Web Development Company?"
        secimg="1542-min.webp"
        seccont={contentLeft}
      />
      <FaqHome
        faqDatatxt="Get all your queries answered and confusion cleared as our team of dedicated professionals and representatives answer some of the most commonly asked questions."
        faqData={faqData}
      />
    </>
  );
};

export default page;
