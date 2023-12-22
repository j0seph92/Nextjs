"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Faq = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div className="faq">
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <button
            className={`faq-question ${index === activeIndex ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            {item.question}
            <FaArrowRight />
          </button>
          {index === activeIndex && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
