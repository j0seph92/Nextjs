import React from "react";
import InnerBanner from "../Components/InnerBanner";
import HeadingMain from "../Components/HeadingMain";

const page = () => {
  return (
    <>
      <InnerBanner
        welcometxt="Welcome to Future Avo"
        heading="A Bright Future is Now Just "
        headingcolor="a Call or Text Away!"
        bancont="Whether you’re looking for outstanding logo design services or effective marketing for your brand, look no further than us. Get the support you need by contacting us right away or filling out the form below."
      />
      <section className="contform-pg-sec p-1 p-md-5 m-0 m-md-5">
        <div className="container">
          <HeadingMain label="Contact Us" extclass="text-center" />
          <div className="footer-cont-box mt-5">
            <div className="row g-5">
              <div className="col-12 col-md-6">
                <div className="form-fields">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control valid"
                    placeholder=""
                    required=""
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-fields">
                  <label>Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    id=" phone"
                    placeholder=""
                    required=""
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-fields">
                  <label>Organization</label>
                  <input
                    type="text"
                    className="form-control valid"
                    placeholder=""
                    required=""
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-fields">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder=""
                    required=""
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="col-12 col-md-12">
                <div className="form-fields">
                  <label>Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    id=""
                    placeholder=""
                    spellcheck="false"
                  ></textarea>
                </div>
              </div>
              <div className="col-12 col-md-12  text-center">
                <button
                  className="bg-grad text-light btnmain"
                  type="submit"
                  name="send"
                >
                  Send Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
