import BlogCard from "./BlogCard";
import jsonData from "../JSON_files/blogs_data.json";
import { Link } from "react-router-dom";
const Blogs = (props) => {
  const blogData = jsonData.slice(0, props.limit ? props.limit : 3);
  return (
    <>
      <section className="blog-outer pad50-50">
        <div className="container d-flex">
          {blogData.map((data, index) => {
            return <BlogCard key={index} data={data} />;
          })}
        </div>
        {props.viewMoreBtn && (
          <Link to="/blogs" className="defbtn arrow-btn">
            View More
          </Link>
        )}
      </section>
    </>
  );
};

export default Blogs;
