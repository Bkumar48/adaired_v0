import { Link } from "react-router-dom";
import Button from "../buttonComponent/Button";
import React from "react";
import DOMPurify from "dompurify";

const RenderHtml = React.memo(({ data, limit }) => {
  const sanitizedHtml = DOMPurify.sanitize(data);

  // Create a temporary div element
  const tempDiv = document.createElement("div");

  // Set the HTML content using dangerouslySetInnerHTML
  tempDiv.innerHTML = sanitizedHtml;

  // Get the text content without HTML tags
  const textContent = tempDiv.textContent || tempDiv.innerText;

  // Cleanup: remove the temporary div element
  tempDiv.remove();

  return <p>{textContent}</p>;
});

RenderHtml.displayName = "RenderHtml";

const BlogCard = (props) => {
  // Access data from props
  const data = props.data;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <>
      <div className="blog-col">
        <div className="blog-img">
          <img
            src={`${import.meta.env.VITE_API_IMAGE_URL}/blog/${data.image}`}
            alt={data.imageAlt}
          />
        </div>
        <div className="blog-text">
          <h4 className="short-hd">{data.title}</h4>
          <RenderHtml data={data.description} limit={15} />
          <Button
            title="Read More"
            type="button"
            svgBackgroundColor="#F89520"
            icon="solar:arrow-right-broken"
            borderColor="transparent"
            navigateTo={`/blog/${data.slug}`}
          />
          <div className="blog-bottom d-flex">
            <div className="d-flex gap-10">
              <i className="fa-solid fa-calendar-days"></i>
              <span>{formatDate(data.createdAt)}</span>
            </div>
            <div className="d-flex gap-10">
              <i className="fa-solid fa-clock"></i>
              <span>{data.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
