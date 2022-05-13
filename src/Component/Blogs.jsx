import React from "react";
import "../css/Blog.css";
import BlogCard from "./BlogCard";
import { blogSection } from "../portfolio";

export default function Blogs() {
  return (
    <div className="main" id="blogs">
      <div className="title">
        <h1 className="blog-header-text">{blogSection.title} ✒️</h1>
        <div className='title-bar'></div>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          {blogSection.blogs.map(blog => {
            return (
              <BlogCard
                blog={{
                  url: blog.url,
                  image: blog.image,
                  title: blog.title,
                  description: blog.description
                }}
              />
            );
          })}
        </div>
      </div>
      <div className='more-projects'>
        <a href='https://abhijithjadhav.medium.com/' target='_blank' className='btn btn-primary'><i className='uil uil-medium-m'></i> Read More Blogs</a>
      </div>
    </div>
  );
}
