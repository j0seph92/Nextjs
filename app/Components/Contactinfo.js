import React from "react";

const Contactinfo = () => {
  return (
    <>
      <section className="my-5">
        <div className="container bg-grad border border-1 border-light border-white rounded-3 p-3">
          <div className="row align-items-stretch">
            <div className="col-12 col-md-3">
              <div className="continfobox h-100 d-flex justify-content-center align-items-center text-center">
                <p className="fw-bold text-light fs-4 m-0">
                  You Are Just A Call Away From Securing A Spectacular Design
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 offset-md-1">
              <div className="continfobox h-100 d-flex justify-content-center align-items-center text-center">
                <a
                  className="fw-bold text-light fs-4 m-0"
                  href="tel:(123)123-1234"
                >
                  Call Us (TOLL FREE) <br></br> (123) 123-1234
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="continfobox h-100 d-flex justify-content-center align-items-center text-center">
                <a
                  className="fw-bold text-light fs-4 m-0"
                  href="mailto:info@futureavo.com"
                >
                  Discuss Your Ideas <br></br>Info@futureavo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactinfo;
