"use client";
import React, { useEffect } from "react";

const Popup = () => {
  useEffect(() => {
    bootstrapScript.onload = () => {
      const modal = new window.bootstrap.Modal(
        document.getElementById("getQuoteModal")
      );
      modal.show();
    };
  }, []);
  return (
    <>
      {/* <!-- Get started Modal --> */}
      <div
        className="modal fade get-in-touch"
        id="getqoute"
        tabIndex="1"
        aria-labelledby="getqouteLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-white rounded-1">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="banner-cont-box">
              <h3>
                GET FREE<br></br>CONSULTATION
              </h3>
              <form
                action="#"
                method="post"
                name="contactFormbanner"
                encType="multipart/form-data"
                role="form"
                className="banner-form"
              >
                <div className="row">
                  <div className="col-12 col-md-12">
                    <div className="form-fields">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-fields">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-fields">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        id=" phone"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-12">
                    <div className="form-fields">
                      <textarea
                        className="form-control"
                        name="message"
                        id=""
                        placeholder="I Am Looking For......"
                        spellCheck="false"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12 col-md-12">
                    <button className="org-btn" type="submit" name="send">
                      send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
