import React, { useState } from "react";
import Banner from "../../components/banners/Banner";
import Button from "../../components/buttonComponent/Button";
import PopularPosts from "../../components/popularPostCard/PopularPosts";
import { Icon } from "@iconify/react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";
import DOMPurify from "dompurify";
import Pagination from "../../components/paginationComponent/Pagination";
import { useSearchParams } from "react-router-dom";

const truncateText = (text, limit) => {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + " ...";
  }
  return text;
};

const RenderHtml = React.memo(({ data, limit }) => {
  const sanitizedHtml = DOMPurify.sanitize(data);

  // Create a temporary div element
  const tempDiv = document.createElement("div");

  // Set the HTML content using dangerouslySetInnerHTML
  tempDiv.innerHTML = sanitizedHtml;

  // Get the text content without HTML tags
  const textContent = tempDiv.textContent || tempDiv.innerText;

  // Limit the number of words
  const truncatedText = truncateText(textContent, limit);

  // Cleanup: remove the temporary div element
  tempDiv.remove();

  return <p>{truncatedText}</p>;
});

RenderHtml.displayName = "RenderHtml";

const BlogCard = React.memo(() => {
  const [searchParams, setSearchParams] = useSearchParams({
    skip: 0,
    limit: 5,
  });
  const skip = parseInt(searchParams.get("skip") || 0);
  const limit = parseInt(searchParams.get("limit") || 5);

  const {
    isLoading,
    error,
    data: blogs,
  } = useQuery({
    queryKey: ["blogs", limit, skip],
    queryFn: async () => {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/api/v1/user/blog/findBlog?limit=${limit}&skip=${skip}`
      );
      const data = await response.data;
      return data;
    },
    placeholderData: keepPreviousData,
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  const handleMove = (moveCount) => {
    setSearchParams((prev) => {
      prev.set("skip", Math.max(skip + moveCount, 0));
      
      return prev;
    });
    
  };

  return (
    <>
      <div className="container d-flex pad100">
        <div className="blog-flex d-flex gap-20 wrap-flex">
          {blogs &&
            blogs.result.map((blog) => {
              return (
                <div className="blog-main-col" key={blog._id}>
                  <div className="blog-main-img">
                    <img
                      src={`https://localhost:5000/upload/blog/${blog.image}`}
                      alt="Image"
                    />
                  </div>
                  <div className="blog-main-text">
                    <div className="blog-top d-flex">
                      <div>
                        <Icon icon="uil:calender" />
                        <span>29 March 2023</span>
                      </div>
                      <div>
                        <Icon icon="octicon:clock-24" />
                        <span>3 mins read</span>
                      </div>
                    </div>
                    <h4>{blog.title}</h4>
                    <RenderHtml data={blog.description} limit={30} />
                    <Button
                      title="Read More"
                      type="button"
                      svgBackgroundColor="#FB9100"
                      icon="solar:arrow-right-broken"
                      borderColor="transparent"
                      navigateTo="/about"
                    />
                  </div>
                </div>
              );
            })}
          <Pagination
            itemsCount={blogs.totalBlogsCount}
            itemsPerPage={5}
            onNext={()=>{
              handleMove(limit)
            }}
            onPrev={()=>{
              handleMove(-limit)
            }}
          />
        </div>

        <aside className="blog__aside-items">
          <div>
            <PopularPosts />
          </div>
        </aside>
      </div>
    </>
  );
});

BlogCard.displayName = "BlogCard";

const MainBlog = () => {
  return (
    <>
      <section className="blog_outer-main blog-outer ">
        <Banner title="Blog" />
        <BlogCard />
      </section>
    </>
  );
};

export default MainBlog;
