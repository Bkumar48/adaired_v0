import { Link } from "react-router-dom";

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
          <Link to={data.link} className="post-btn">
            Read More
          </Link>
          <div className="blog-bottom d-flex">
            <Link to="#">
              <i className="fa-solid fa-calendar-days"></i>
              <span>{formatDate(data.created_at)}</span>
            </Link>
            <Link to="#">
              <i className="fa-solid fa-clock"></i>
              <span>{data.readTime}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
