"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonMain from "./ButtonMain";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MobileMenu from "./MobileMenu";
import ButtonTransparentLink from "./ButtonTransparentLink";
import { FaRocketchat } from "react-icons/fa";

const handleButtonClick = () => {
  alert("Button clicked!");
};
const Header = () => {
  useEffect(() => {
    // Import Bootstrap JavaScript only on the client side
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <header className="navbar pt-3 pb-3 navbar-expand-md sticky">
        <div className="container-fluid justify-content-between justify-content-sm-between justify-content-md-between">
          <div className="header-logo navbar-brand position-relative d-flex align-items-center justify-content-center">
            <Link href="/" className="">
              <img
                src="/images/logo.png"
                alt="FutureAVO - Logo"
                className="img-fluid lazy"
                width={230}
                height={30}
                rel="noopener noreferrer"
              />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav nav main-nav mb-2 justify-content-center mb-md-0">
              <li>
                <Link
                  href="/"
                  className="nav-link p-0 m-0"
                  rel="noopener noreferrer"
                >
                  Home
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      href="/logo-design"
                      className="list-group-item list-group-item-action"
                    >
                      Logo Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/web-design"
                      className="list-group-item list-group-item-action"
                      rel="noopener noreferrer"
                    >
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/web-development"
                      className="list-group-item list-group-item-action"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mobile-apps"
                      className="list-group-item list-group-item-action"
                    >
                      Mobile Apps
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/search-engine-optimization"
                      className="list-group-item list-group-item-action"
                    >
                      SEO
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/digital-marketing"
                      className="list-group-item list-group-item-action"
                    >
                      Social Media
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="list-group-item list-group-item-action dropdown-item"
                    >
                      Digital Marketing &raquo;
                    </Link>
                    <ul class="dropdown-menu dropdown-submenu">
                      <li>
                        <Link
                          href="/digital-marketing"
                          className="list-group-item list-group-item-action"
                        >
                          Digital Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/pay-per-click"
                          className="list-group-item list-group-item-action"
                        >
                          Paid Advertising
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/search-engine-marketing"
                          className="list-group-item list-group-item-action"
                        >
                          SEM
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li> */}
              {/* <!-- Navbar dropdown --> */}
              <li className="nav-item dropdown  position-static">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                {/* <!-- Dropdown menu --> */}
                <div
                  className="dropdown-menu w-100 mt-0 mega-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <div className="menu-container">
                    <div className="menu-row">
                      <div className="menu-col">
                        <div className="list-group list-group-flush">
                          <p className="mb-0 list-group-item font-weight-bold">
                            Design
                          </p>
                          <Link
                            href="/logo-design"
                            className="list-group-item list-group-item-action"
                          >
                            Logo Design
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Animated Logo Design
                          </Link>
                          <Link
                            href="/web-design"
                            className="list-group-item list-group-item-action"
                            rel="noopener noreferrer"
                          >
                            Web Design
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            UI/UX Design
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Branding Design
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Motion Graphics
                          </Link>
                        </div>
                      </div>
                      <div className="menu-col">
                        <div className="list-group list-group-flush">
                          <p className="mb-0 list-group-item font-weight-bold">
                            Development
                          </p>
                          <Link
                            href="/web-development"
                            className="list-group-item list-group-item-action"
                          >
                            Web Development
                          </Link>

                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Front-end Development
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Wordpress Development
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Ecommerce Solutions
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Custom Web Portal
                          </Link>
                        </div>
                      </div>
                      <div className="menu-col">
                        <div className="list-group list-group-flush">
                          <p className="mb-0 list-group-item font-weight-bold">
                            Digital Marketing
                          </p>
                          <Link
                            href="/digital-marketing"
                            className="list-group-item list-group-item-action"
                          >
                            Digital Marketing
                          </Link>
                          <Link
                            href="/search-engine-optimization"
                            className="list-group-item list-group-item-action"
                          >
                            SEO
                          </Link>
                          <Link
                            href="/search-engine-marketing"
                            className="list-group-item list-group-item-action"
                          >
                            SEM
                          </Link>
                          <Link
                            href="/pay-per-click"
                            className="list-group-item list-group-item-action"
                          >
                            Paid Advertising
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Content Creation
                          </Link>
                        </div>
                      </div>
                      <div className="menu-col">
                        <div className="list-group list-group-flush">
                          <p className="mb-0 list-group-item font-weight-bold">
                            Mobile Applications
                          </p>
                          <Link
                            href="/mobile-apps"
                            className="list-group-item list-group-item-action"
                          >
                            Mobile Apps
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Android App Development
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            IOS App Development
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Flutter App Development
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            React Native App Development
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Game Development
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            AR/VR App Development
                          </Link>
                        </div>
                      </div>
                      <div className="menu-col">
                        <div className="list-group list-group-flush">
                          <p className="mb-0 list-group-item font-weight-bold">
                            Technical
                          </p>

                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            IT Support
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            IT Solutions
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Data Analytics
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Domain And Hosting
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Cloud Services
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Email Services
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/why-choose-us" className="nav-link p-0 m-0">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="nav-link p-0 m-0">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="nav-link p-0 m-0">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="nav-link p-0 m-0"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-start text-lg-end d-flex justify-content-between align-items-center">
            <div className="link-box">
              <ButtonMain
                label="Start Live Chat"
                onClick={handleButtonClick}
                extclass="me-2"
                icon={FaRocketchat}
              />
            </div>

            <div className="link-box">
              <ButtonTransparentLink
                label="(123) 123-1234"
                onClick="tel:123456789"
                extclass=""
              />
            </div>
          </div>
        </div>
      </header>
      <MobileMenu />
    </>
  );
};

export default Header;
