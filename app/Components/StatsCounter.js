"use client";
import { Power1, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const StatsCounter = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".counter > span");

    gsap.registerPlugin(ScrollTrigger);

    items.forEach((item) => {
      const maxValue = parseInt(item.dataset.maxValue, 10); // Get the maximum value from a data attribute

      gsap.to(item, {
        textContent: maxValue,
        duration: 4,
        ease: Power1.easeIn,
        onStart: () => {
          item.textContent = 0; // Start from 0 when the animation begins
        },
        onUpdate: () => {
          item.textContent = Math.round(item.textContent); // Round the value to avoid decimals
        },
        scrollTrigger: {
          trigger: item,
          start: "top 80%", // Adjust the start position based on your design
        },
      });
    });
    console.log(document.body);
  }, []);

  return (
    <>
      <section className="stats-sec py-5">
        <div className="container">
          <div className="row gy-3">
            <div className="col-12 col-md-3">
              <div className="stats-box">
                <div className="counter">
                  <span data-max-value="10">0</span>M
                </div>
                <p>File Generated</p>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="stats-box">
                <div className="counter">
                  <span data-max-value="56">0</span>
                </div>
                <p>Option Variety</p>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="stats-box">
                <div className="counter">
                  <span data-max-value="20">0</span>+
                </div>
                <p>Advanced Tool</p>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="stats-box">
                <div className="counter">
                  <span data-max-value="20">0</span>+
                </div>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsCounter;
