import Testimonials from "../../components/Testimonials";
import Blogs from "../../components/Blogs";

const Gallery = () => {
  return (
    <div>
      <Testimonials />
      <Blogs limit={3} viewMoreBtn={true} />
    </div>
  );
};

export default Gallery;
