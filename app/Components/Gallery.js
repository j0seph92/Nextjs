import React from "react";
import HeadingMain from "./HeadingMain";
import Image from "next/image";
// import shape from "../../public/image_effects.jpg";

const Gallery = () => {
  const imageFiles = ["gallery-1.png", "gallery-3.png", "gallery-5.png"];
  const imageFiles2 = ["gallery-2.png", "gallery-4.png", "gallery-6.png"];
  const imageFiles3 = "/images/gallery-7.png";
  const shape = "/images/image_effects.jpg";
  return (
    <>
      <section className="gallery-sec py-5">
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-12 col-md-6">
              <HeadingMain label="Offering All-in-One Solutions" extclass="" />
            </div>
            <div className="col-12 col-md-6 ">
              <div className="gal-cont h-100 d-flex align-items-center">
                <p>
                  We build brands from scratch, creating seamless experiences
                  across all digital platforms. One-stop destination for web,
                  logo, app development, and digital marketing brilliance. Give
                  us a call!
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-3 gy-3 gy-md-0 gx-0 gx-md-3">
            <div className="col-12 col-md-6">
              <div className="image-gallery">
                {imageFiles.map((filename, index) => (
                  <div className="gal-img-box">
                    <img
                      src={`/images/${filename}`} // Path to the image
                      alt={`FutureAVO - Gallery ${index + 1}`}
                      className="img-fluid lazy gall-img gall-sec-front"
                      width={590}
                      height={680}
                    />
                    <img
                      src={`/images/${filename}`} // Path to the image
                      alt={`FutureAVO - Gallery ${index + 1}`}
                      className="img-fluid lazy gall-img gall-sec-back"
                      width={590}
                      height={680}
                    />
                    <img
                      src={shape} // Path to the image
                      alt={`FutureAVO - Gallery ${index + 1}`}
                      className="img-fluid lazy gall-img gall-sec-overlay"
                      width={590}
                      height={680}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="image-gallery">
                {imageFiles2.map((filename, index) => (
                  <div className="gal-img-box">
                    <img
                      src={`/images/${filename}`} // Path to the image
                      alt={`FutureAVO - Gallery ${index + 1}`}
                      className="img-fluid lazy gall-img gall-sec-front"
                      width={590}
                      height={680}
                    />
                    <img
                      src={`/images/${filename}`} // Path to the image
                      alt={`FutureAVO - Gallery ${index + 1}`}
                      className="img-fluid lazy gall-img gall-sec-back"
                      width={590}
                      height={680}
                    />
                    <img
                      src={shape} // Path to the image
                      alt={`FutureAVO - Gallery ${index + 1}`}
                      className="img-fluid lazy gall-img gall-sec-overlay"
                      width={590}
                      height={680}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="image-gallery">
                <div className="gal-img-box">
                  <img
                    src={imageFiles3}
                    alt="FutureAVO - Gallery"
                    className="img-fluid lazy gall-img gall-sec-front"
                    width={1200}
                    height={530}
                  />
                  <img
                    src={imageFiles3}
                    alt="FutureAVO - Gallery"
                    className="img-fluid lazy gall-img gall-sec-back"
                    width={1200}
                    height={530}
                  />
                  <img
                    src={shape}
                    alt="FutureAVO - Gallery"
                    className="img-fluid lazy gall-img gall-sec-overlay"
                    width={1200}
                    height={530}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
