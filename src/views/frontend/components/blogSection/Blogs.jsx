import BlogCard from "../singleBlogCard/BlogCard";
import jsonData from "../../JSON_files/blogs_data.json";
import { Link } from "react-router-dom";
import Button from "../buttonComponent/Button";
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
          <div className="text-center mt25">
          <Button
            title="View More"
            type="button"
            svgBackgroundColor="#F89520"
            icon="solar:arrow-right-broken"
            navigateTo="/blogs"
            className="blog-view-more-btn text-center"
          />
        </div>
        )}
      </section>
    </>
  );
};

export default Blogs;
