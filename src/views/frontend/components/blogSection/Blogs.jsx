import BlogCard from "../singleBlogCard/BlogCard";
import { Link } from "react-router-dom";
import Button from "../buttonComponent/Button";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Blogs = React.memo((props) => {
  const {
    isLoading,
    error,
    data: blogs,
  } = useQuery({
    queryKey: ["blogs", props.limit],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/blog/findBlog?limit=${
          props.limit
        }&skip=0`
      );
      const data = await response.data.result;
      return data;
    },
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <section className="blog-outer pad100">
        <div className="text-center">
          <h4 className="sub-heading sub_hd-mx">Blog</h4>
          <h2 className="bigheading">
            Update On The Latest Marketing Trends and Tech{" "}
          </h2>
          <p>
            You can never miss an update with Adaried! Explore our blogs for
            insightful information and stay ahead with specially curated content
            by industry experts.
          </p>
        </div>
        <div className="container d-flex mt50">
          {blogs.map((data, index) => {
            return <BlogCard key={index} data={data} />;
          })}
        </div>
        {props.viewMoreBtn && (
          <div className="text-center mt25">
            <Button
              title="View More"
              type="button"
              svgBackgroundColor="#F89520"
              icon="solar:arrow-right-broken"
              navigateTo="/blog"
              className="blog-view-more-btn text-center"
            />
          </div>
        )}
      </section>
    </>
  );
});

Blogs.displayName = "Blogs";

export default Blogs;
