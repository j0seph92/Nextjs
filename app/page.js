import HomeBanner from "./Components/HomeBanner";
import BrandLogo from "./Components/BrandLogo";
import WhyChooseUsSec from "./Components/WhyChooseUsSec";
import StatsCounter from "./Components/StatsCounter";
import Gallery from "./Components/Gallery";
import StoriesSec from "./Components/StoriesSec";
import VideoSec from "./Components/VideoSec";
import FaqHome from "./Components/FaqHome";
import AboutUs from "./Components/AboutUs";
import BlogHome from "./Components/BlogHome";
import Testimonial from "./Components/Testimonial";
import ServicesTab from "./Components/ServicesTab";

export default function Home() {
  const faqData = [
    {
      question: "What services do we offer?",
      answer:
        "At our firm, we take pride in providing clients with a diverse range of services, including logo design, application, and website development services. We also offer bespoke digital marketing services, such as social media marketing services and more. ",
    },
    {
      question: "How do you handle different projects?",
      answer:
        "Generally, our team follows a blueprint that ensures we manage every project impeccably. The blueprint consists of several phases. However, we may alter the process slightly to cater to diverse requirements, considering we deal with a huge clientele. ",
    },
    {
      question: "How long does each project take to complete?",
      answer:
        "The timeline for each project depends on a list of factors, such as the complexity of the project, the requirements, etc. So, to get a clear idea of the timeline, you’ll need to get in touch with our representatives, and after discussing your requirements, they will let you know the details.",
    },
    {
      question: "What happens if I’m not satisfied with the result?",
      answer:
        "At Future Avo, we go the extra mile to ensure our clients are always satisfied with the final result. That’s why we are open to any suggestions they may have and also cater to revisions in case they require us to make any adjustments. This helps guarantee they’re satisfied. ",
    },
  ];
  return (
    <>
      <HomeBanner />
      <BrandLogo />
      <ServicesTab />
      <WhyChooseUsSec />
      <StatsCounter />
      <Gallery />
      <StoriesSec />
      <Testimonial />
      <VideoSec videolink="#" videoimg="18165-min.webp" />
      <FaqHome
        faqDatatxt="Do you have some queries that need to be answered? Our experts
                  have offered their expert guidance by answering some common
                  questions. Learn more."
        faqData={faqData}
      />
      <AboutUs />
      <BlogHome />
    </>
  );
}
