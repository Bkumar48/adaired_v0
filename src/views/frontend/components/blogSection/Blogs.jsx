import BlogCard from "../singleBlogCard/BlogCard";
import jsonData from "../../JSON_files/blogs_data.json";
import { Link } from "react-router-dom";
const Blogs = (props) => {
  const blogData = jsonData.slice(0, props.limit ? props.limit : 3);
  return (
    <>
      <section className="blog-outer pad50-50">
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
