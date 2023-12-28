import Image from "next/image";
import React from "react";

const ServiceBoxInner = ({ title, cont, icon, img, order1, order2 }) => {
  return (
    <>
      <div className="serbox-inner">
        <div className="row">
          <div className={`col-12 col-md-6 ${order1}`}>
            <div className="serbox-inner-cont">
              <div className="serboxicon">
                <img
                  src={`/images/${icon}`}
                  alt="icon"
                  className="img-fluid lazy"
                  width={64}
                  height={64}
                />
              </div>
              <div className="serboxcont">
                <h3>{title}</h3>
                <p>{cont}</p>
              </div>
            </div>
          </div>
          <div className={`col-12 col-md-6 ${order2}`}>
            <div className="serboximg-inner">
              <img
                src={`/images/${img}`}
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
