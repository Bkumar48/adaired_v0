import { Link } from "react-router-dom";
import Button from "../buttonComponent/Button";

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
          <img src={data.image} alt={data.imageAlt} />
        </div>
        <div className="blog-text">
          <h4 className="short-hd">{data.title}</h4>
          <p>{data.description}</p>
          <Button
            title="Read More"
            type="button"
            svgBackgroundColor="#F89520"
            icon="solar:arrow-right-broken"
            borderColor="transparent"
          />
          <div className="blog-bottom d-flex">
            <div className="d-flex gap-10">
            <i className="fa-solid fa-calendar-days"></i>
            <span>{formatDate(data.created_at)}</span>
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
