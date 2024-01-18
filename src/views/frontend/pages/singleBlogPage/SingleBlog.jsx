import JsonData from "./SingleBlog.json";
import DOMPurify from "dompurify";
import React from "react";
import Advertisement from "../../components/advertisementCard/Advertisement";
import { useParams } from "react-router-dom";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";

const RenderHtml = React.memo(({ data }) => {
  const sanitizedHtml = DOMPurify.sanitize(data);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
});

RenderHtml.displayName = "RenderHtml";

const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const SingleBlog = () => {
  const { slug } = useParams();
  const data = JsonData[0];

  const {
    isLoading,
    error,
    data: blog,
  } = useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/blog/${slug}`
      );
      const data = await response.data.result[0];
      return data;
    },
  });
  console.log(blog)
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <section className="single__blog-section">
        <div className="container pad100 d-flex align-start">
          <div className="single__blog-card">
            <div className="single__blog-img">
              <img
                src={`${import.meta.env.VITE_API_IMAGE_URL}/blog/${blog.image}`}
                alt="image"
                loading="lazy"
              />
            </div>
            <div className="single__blog-title mt25">
              <h2>{blog.title}</h2>
            </div>
            <div className="single__blog-date">
              <p>{formatDate(blog.createdAt)}</p>
            </div>
            <div className="single__blog-content mt25">
              <RenderHtml data={blog.description} />
            </div>

            {/* <div className="single__blog-questions mt25">
              {data.questionsAndAnswers.map((item, index) => (
                <div key={index} className="single__blog-questions-item ">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="single__blog-extra-content mt25">
              <RenderHtml data={data.extraContent} />
            </div> */}

          </div>
          <Advertisement />
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
