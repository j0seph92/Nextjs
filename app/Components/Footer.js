import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import FloatingIcons from "./FloatingIcons";

const divStyle = {
  backgroundImage: 'url("../images/curve.png")',
};

const Footer = () => {
  return (
    <>
      <div className="ft-curve" style={divStyle}></div>
      <footer className="footer-sec">
        <div className="container container-sm container-md container-lg container-xl container-xxxl">
          <div className="row mb-5">
            <div className="col-12 col-sm-4">
              <div className="footer-logo mb-4">
                <Link href="/" className="">
                  <img
                    src="/images/logo.png"
                    alt="FutureAVO - Logo"
                    className="img-fluid lazy"
                    width={230}
                    height={30}
                  />
                </Link>
              </div>
              <div className="cont-details">
                <p className="d-flex">
                  <FaLocationDot />
                  <Link href="#">
                    54 State Street, Ste 804 #10949, Albany, New York 12207 US
                  </Link>
                </p>
                <p>
                  <FaPhone /> <Link href="#">123-456-7890,</Link>
                </p>
                <p>
                  <FaEnvelope /> <Link href="#">support@futureavo.com</Link>
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-3">
              <div className="ft-title">
                <h4>Quick Links</h4>
              </div>
              <div className="ft-menu ">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>

                  <li>
                    <Link href="/why-choose-us">Why Choose Us</Link>
                  </li>

                  <li>
                    <Link href="/success-stories">Success Stories</Link>
                  </li>

                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-5">
              <div className="ft-title">
                <h4>Subscribe To Our Newsletter</h4>
                <p>
                  Future Avo has been a leading provider of all-inclusive design
                  and development services in the industry. Throughout the
                  years, we’ve helped build brands with our top-notch services,
                  leading companies into an intelligently designed future.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 cpyrt">
              <p>© Copyright 2024 Future AVO | All Right Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      <FloatingIcons />
    </>
  );
};

export default Footer;
