import Testimonials from "../../components/testimonialsSection/Testimonials";
import Blogs from "../../components/blogSection/Blogs";

const Gallery = () => {
  return (
    <div>
      <Testimonials />
      <Blogs limit={3} viewMoreBtn={true} />
    </div>
  );
};

export default Gallery;
