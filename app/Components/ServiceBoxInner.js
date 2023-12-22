import Image from "next/image";
import React from "react";

const ServiceBoxInner = ({ order1, order2 }) => {
  return (
    <>
      <div className="serbox-inner">
        <div className="row w-100">
          <div className={`col-12 col-md-6 ${order1}`}>
            <div className="serbox-inner-cont">
              <div className="serboxicon">
                <img
                  src="/images/icon-1.png"
                  alt="icon"
                  className="img-fluid lazy"
                  width={64}
                  height={64}
                />
              </div>
              <div className="serboxcont">
                <h4>Brainstorm Faster</h4>
                <p>
                  We Are Focused On Delivering Results For Our Clients And
                  Helping Them Achieve Their Goals.
                </p>
              </div>
            </div>
          </div>
          <div className={`col-12 col-md-6 ${order2}`}>
            <div className="serboximg-inner">
              <img
                src="/images/ser-img.png"
                alt="futureAVO"
                className="img-fluid lazy"
                width={555}
                height={430}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceBoxInner;
