"use client";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const BrandLogo = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Define a function to create the bounce animation
    const createBounceAnimation = (element, delay) => {
      const bounceTimeline = gsap.timeline({
        defaults: {
          duration: 2.5,
        },
        repeat: -1,
        yoyo: true,
        // scrollTrigger: {
        //   trigger: element,
        //   start: "10% bottom",
        //   scrub: true,
        // },
      });

      bounceTimeline.to(element, {
        y: -40,
        duration: 1,
      });

      // Set a delay for the timeline
      bounceTimeline.delay(delay);

      return bounceTimeline;
    };

    // Get all logobox elements
    const logoboxes = document.querySelectorAll(".logobox");

    // Create a timeline for each logobox with a staggered delay
    logoboxes.forEach((logobox, index) => {
      const delay = index * 2; // Adjust the delay as needed
      createBounceAnimation(logobox, delay);
    });

    // ScrollTrigger stuff...
  }, []);
  return (
    <>
      <section className="logobrandsec py-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="logobox">
                <img
                  src="/images/brandlogo-1.png"
                  alt="Brand Logo"
                  className="img-fluid lazy "
                  width={170}
                  height={45}
                />
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="logobox">
                <img
                  src="/images/brandlogo-2.png"
                  alt="Brand Logo"
                  className="img-fluid lazy "
                  width={170}
                  height={45}
                />
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="logobox">
                <img
                  src="/images/brandlogo-3.png"
                  alt="Brand Logo"
                  className="img-fluid lazy "
                  width={170}
                  height={45}
                />
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="logobox">
                <img
                  src="/images/brandlogo-4.png"
                  alt="Brand Logo"
                  className="img-fluid lazy "
                  width={170}
                  height={45}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandLogo;
