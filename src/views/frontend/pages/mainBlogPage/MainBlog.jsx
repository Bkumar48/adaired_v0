import Banner from "../../components/banners/Banner";
import Blogs from "../../components/Blogs";

const MainBlog = () => {
  return (
    <>
      <Banner title="Blog" />
      <Blogs limit={3} />
    </>
  );
};

export default MainBlog;
