"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonMain from "./ButtonMain";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
            className="navbar-toggler mx-3"
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
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Logo Design
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
                            UX Design
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Graphic Design
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Graphic Design
                          </Link>
                        </div>
                      </div>
                      <div className="menu-col">
                        <div className="list-group list-group-flush">
                          <p className="mb-0 list-group-item font-weight-bold">
                            Development
                          </p>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Web Development
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Joomla
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Wordpress
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Software Development
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Ecommerce
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Mobile Apps
                          </Link>
                        </div>
                      </div>
                      <div className="menu-col">
                        <div className="list-group list-group-flush">
                          <p className="mb-0 list-group-item font-weight-bold">
                            Digital Marketing
                          </p>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            SEO
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Paid Advertising
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Social Media
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Content
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
                            Cloud Services
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Cyber Security
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Cloud Infrastructure
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Client Ticket Portal
                          </Link>
                        </div>
                      </div>
                      <div className="menu-col">
                        <div className="list-group list-group-flush">
                          <p className="mb-0 list-group-item font-weight-bold">
                            Consultancy
                          </p>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            GDPR Consultancy
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            ISO Consultancy
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            IT Consultancy
                          </Link>
                          <Link
                            href="#"
                            className="list-group-item list-group-item-action"
                          >
                            Microsoft Power BI
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
          <div className="text-start text-lg-end">
            <div className="link-box">
              <ButtonMain
                label="Start Trial Now"
                onClick={handleButtonClick}
                extclass=""
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
