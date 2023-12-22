"use client";
import Link from "next/link";
import React from "react";
import ButtonTransparent from "./ButtonTransparent";

const handleButtonClick = () => {
  alert("Button clicked!");
};

const BlogBox = ({ blogimg, boxlink, title, text }) => {
  return (
    <div className="bg-grad blog-box">
      <div className="blog-img">
        <Link href={boxlink}>
          <img
            src={blogimg}
            alt="FutureAVo"
            className="img-fluid lazy object-cover mx-auto"
            width={350}
            height={350}
          />
        </Link>
      </div>
      <div className="blogboxcont">
        <h4>
          <Link href={boxlink}>{title} </Link>
        </h4>
        <p>{text}</p>
        <ButtonTransparent
          label="Read More"
          onClick={handleButtonClick}
          extclass=""
        />
      </div>
    </div>
  );
};

export default BlogBox;
