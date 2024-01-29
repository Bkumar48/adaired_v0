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
import Loader from "../../components/loaders/Loader";

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

  const [currentPage, setCurrentPage] = useState(
    searchParams.get("skip") / limit + 1
  );
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
        }/api/v1/blog/findBlog?limit=${limit}&skip=${skip}`
      );
      const data = await response.data;
      return data;
    },
    placeholderData: keepPreviousData,
  });

  if (isLoading) return <Loader />;
  if (error) return "An error has occurred: " + error.message;

  const handleMove = (moveCount) => {
    setSearchParams((prev) => {
      const newSkip = Math.max(skip + moveCount, 0);
      prev.set("skip", newSkip);
      setCurrentPage(Math.floor(newSkip / limit) + 1);
      return prev;
    });
  };

  const formatDate = (inputDateString) => {
    const inputDate = new Date(inputDateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return inputDate.toLocaleDateString("en-US", options);
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
                      src={`${import.meta.env.VITE_API_IMAGE_URL}/blog/${
                        blog.image
                      }`}
                      alt="Image"
                    />
                  </div>
                  <div className="blog-main-text">
                    <div className="blog-top d-flex">
                      <div>
                        <Icon icon="uil:calender" />
                        <span>{formatDate(blog.createdAt)}</span>
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
                      navigateTo={`/blog/${blog.slug}`}
                    />
                  </div>
                </div>
              );
            })}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Pagination
              itemsCount={blogs.totalBlogsCount}
              itemsPerPage={5}
              currentPage={currentPage}
              onPrev={() => {
                handleMove(-limit);
              }}
              onNext={() => {
                handleMove(limit);
              }}
              onPageClick={(page) => {
                const newSkip = (page - 1) * limit;
                setSearchParams((prev) => {
                  prev.set("skip", newSkip);
                  return prev;
                });
                setCurrentPage(searchParams.get("skip") / limit + 1);
              }}
            />
          </div>
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
