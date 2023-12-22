import React from "react";
import InnerBanner from "../Components/InnerBanner";
import BlogHome from "../Components/BlogHome";
import FaqHome from "../Components/FaqHome";
import InnerContentSecRight from "../Components/InnerContentSecRight";
import InnerContentSecLeft from "../Components/InnerContentSecLeft";

export default function AboutUs() {
  const faqData = [
    {
      question: "Log In To Futureavo",
      answer:
        "Ullamcorper A Lacus Vestibulum Sed Arcu. Pellentesque Dignissim Enim Sit Congue Nisivitae Suscipit Tellus Mauris.",
    },
    {
      question: "Log In To Futureavo",
      answer:
        "Ullamcorper A Lacus Vestibulum Sed Arcu. Pellentesque Dignissim Enim Sit Congue Nisivitae Suscipit Tellus Mauris.",
    },
    {
      question: "Log In To Futureavo",
      answer:
        "Ullamcorper A Lacus Vestibulum Sed Arcu. Pellentesque Dignissim Enim Sit Congue Nisivitae Suscipit Tellus Mauris.",
    },
  ];
  return (
    <>
      <InnerBanner />
      <InnerContentSecRight />
      <InnerContentSecLeft />
      <FaqHome faqData={faqData} />
      <BlogHome />
    </>
  );
}
