import React from "react";
import { Link } from "react-router-dom";

const PopularPosts = () => {
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ...";
    }
    return text;
  };
  return (
    <>
      <div className="popular__posts">
        <h4 className="main-heading"> Popular Posts</h4>
        <div className="popular__posts-item">
          <Link to="#" className="d-flex">
            <div className="popular__posts-item-img">
              <img src={"assets/images/blog_post_img_0.jpg"} alt="Image" />
            </div>
            <div className="popular__posts-items-info">
              <h6>Lorem ipsum</h6>
              <p>
                {truncateText(
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat consequatur ipsa exercitationem. Vero, facilis.",
                  10
                )}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PopularPosts;
