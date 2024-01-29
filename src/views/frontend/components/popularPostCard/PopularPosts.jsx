import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const getBlogs = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/v1/blog/findBlog?limit=${5}&skip=${0}`
  );
  const data = await response.data.result;
  return data;
};

const PopularPosts = React.memo(() => {
  const {
    isLoading,
    error,
    data: popularBlogs,
  } = useQuery({
    queryKey: ["popularBlogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <div className="popular__posts">
        <h4 className="main-heading"> Popular Posts</h4>
        {popularBlogs.map((blog) => (
          <div className="popular__posts-item" key={blog._id}>
            <Link to={`/blog/${blog.slug}`} className="d-flex">
              <div className="popular__posts-item-img">
                <img
                  src={`${import.meta.env.VITE_API_IMAGE_URL}/blog/${
                    blog.image
                  }`}
                  alt="Image"
                />
              </div>
              <div className="popular__posts-items-info">
                <h6>{blog.title}</h6>
              </div>
            </Link>
          </div>
        ))}
        {/* <div className="popular__posts-item">
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
        </div> */}
      </div>
    </>
  );
});

PopularPosts.displayName = "PopularPosts";

export default PopularPosts;
