import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoSec = ({ videolink, videoimg }) => {
  const divStyle = {
    backgroundImage: `url(/images/${videoimg})`,
  };
  return (
    <>
      <section className="video-sec" style={divStyle}>
        <div className="btn-video-wrap">
          <a className="btn-video" href={videolink}>
            <FaPlay />
          </a>
        </div>
      </section>
    </>
  );
};

export default VideoSec;
