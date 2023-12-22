import React from "react";
import SubtitleTop from "./SubtitleTop";
import BlogBox from "./BlogBox";

const BlogHome = () => {
  return (
    <>
      <section className="blog-sec py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <SubtitleTop label="Blog Post" extclass="text-center" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-md-4">
              <BlogBox
                blogimg="/images/blog-img-1.jpg"
                boxlink="/"
                title="Post No 01"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
              />
            </div>

            <div className="col-12 col-md-4">
              <BlogBox
                blogimg="/images/blog-img-2.jpg"
                boxlink="/"
                title="Post No 02"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
              />
            </div>

            <div className="col-12 col-md-4">
              <BlogBox
                blogimg="/images/blog-img-3.jpg"
                boxlink="/"
                title="Post No 03"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogHome;
