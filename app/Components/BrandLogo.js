"use client";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const BrandLogo = () => {
  useEffect(() => {
    // GSAP animations go here
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        defaults: {
          duration: 1.5,
        },
      })
      .to(".logobox", {
        scrollTrigger: {
          trigger: ".logobox",
          scrub: true,
          start: "top bottom",
          end: "top top",
        },
        y: 10,
        ease: "bounce",
      });
    console.log(document.body);
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
