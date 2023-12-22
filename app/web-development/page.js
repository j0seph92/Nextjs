import React from "react";
import InnerBanner from "../Components/InnerBanner";
import VideoSec from "../Components/VideoSec";
import InnerContentSecRight from "../Components/InnerContentSecRight";
import InnerContentSecLeft from "../Components/InnerContentSecLeft";
import InnerContentSecMiddle from "../Components/InnerContentSecMiddle";
import BlogHome from "../Components/BlogHome";
import FaqHome from "../Components/FaqHome";

const page = () => {
  const faqData = [
    {
      question: "What is web design?",
      answer:
        "Web design entails crafting the layout and other visual elements of a website. These elements and designs are then transformed into functional websites with the help of programming languages. You can learn more by reaching out to the best web design agency.",
    },
    {
      question: "What are the different types of web designs?",
      answer: [
        "There are various types of web designs, including:",
        <br></br>,
        <br></br>,
        "1.	Responsive Web Design",
        <br></br>,
        "2.	E-commerce Web Design",
        <br></br>,
        "3.	Minimalist Web Design",
        <br></br>,
        "4.	Parallax Web Design",
        <br></br>,
        "5.	Single-Page Web Design",
        <br></br>,
        "6.	Illustrative Web Design",
        <br></br>,
        "7.	Typography-Driven Web Design",
        <br></br>,
        "8.	Flat Design",
        <br></br>,
        "9.	Vintage Web Design",
        <br></br>,
        "10.	Material Design",
        <br></br>,
        <br></br>,
        "Get in touch with us to understand each of them in detail.",
      ],
    },
    {
      question: "How do you hire web designing services?",
      answer:
        "The simplest way to hire web designing services is by conducting research. Fire up the search engine and look for reliable companies you can work with. You can also ask for recommendations and then make an informed choice. ",
    },
    {
      question: "What do web design services include?",
      answer:
        "Web design services involve creating pages and websites for a company or an individual to attract clients and improve branding. These services handle everything regarding website creation, from design to integration. If you’re interested in availing these services, you can communicate with us.",
    },
  ];
  return (
    <>
      <InnerBanner
        welcometxt="Welcome to Future Avo"
        heading="Want to Work with the Best"
        headingcolor="Website Development Company?"
        bancont="Are you interested in teaming up with the best website development company? Look no further than Future Avo, as we’re one of the best web development companies. Let’s begin!"
      />
      <VideoSec videolink="#" videoimg="ser-img.png" />
      <InnerContentSecRight
        sectitle="Leave a Lasting Impression with Our Web Development Agency"
        secimg="serimg2.png"
        seccont={[
          "A website is one of the core elements of branding, and a fully functioning and visually engaging one can grab the attention of potential and existing clients. That’s where our custom web development company comes into the mix. ",
          <br></br>,
          "We follow a meticulous process to create a website that resonates with your brand. From wireframes and designing to coding and testing, we execute every step with precision. With a focus on user experience and functionality, we create intuitive navigation, captivating visuals, and responsive layouts. ",
          <br></br>,
          "Read on to discover what it’s like working with the best web development company. ",
        ]}
      />
      <InnerContentSecMiddle
        sectitle="Workflow of Our Web Development Company"
        secimg="inner-img.png"
        seccont={[
          "The industry is packed with myriad website design companies, as digitalization has made it mandatory for companies and businesses to outshine in the digital space. However, not every firm succeeds in becoming the top website design agency. Fortunately, our custom website design company has effectively established itself as a reliable partner for web design services. ",
          <br></br>,
          "At our website designing company, we follow a plan that provides a meticulous blend of functionality and creativity for every project. Our team of specialized designers works closely with each client to understand their vision, making sure every pixel is a reflection of their vision. ",
          <br></br>,
          "So, if you want to hire web designer services for stunning websites that captivate the audience, we’re just a call away!",
        ]}
      />
      <InnerContentSecLeft
        sectitle="Collaborate with the Best Website Design Company"
        secimg="abt-img.jpg"
        seccont={[
          "Are you having a challenging time finding the best website design company? Put an end to this search, as we’re right here. As the best web design company, we boast a praiseworthy team of designers and developers who have a vision for detail and ample experience designing and creating websites. From intuitive user interfaces to unified user experiences, we focus on user-centered design to drive engagement and conversions. ",
          <br></br>,
          "Ready to get a custom website for your business that fuels your online success? Reach out to us to hire our web designing company.",
        ]}
      />
      <div className="p-5"></div>
      <FaqHome
        faqDatatxt="Are you unsure of how we manage our web design projects? Do you have some questions? We’ve cleared the air by answering some questions."
        faqData={faqData}
      />
      <BlogHome />
    </>
  );
};

export default page;
