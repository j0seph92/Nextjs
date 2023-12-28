import Link from "next/link";
import React from "react";
import ButtonMain from "./ButtonMain";

const MobileMenu = () => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };
  return (
    <>
      <div className="mobile-nav bg-grad">
        <div
          className="collapse navbar-collapse justify-content-lg-around d-md-none"
          id="navbarSupportedContent"
        >
          <div className="p-3 text-center ">
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu gap-1 p-2 rounded-3 mx-0 shadow">
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
              <li>
                <ButtonMain
                  label="Start Trial Now"
                  onClick={handleButtonClick}
                  extclass=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
