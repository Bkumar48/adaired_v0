import React from "react";
import Banner from "../../components/banners/Banner";
import Button from "../../components/buttonComponent/Button";
import PopularPosts from "../../components/popularPostCard/PopularPosts";
import { Icon } from "@iconify/react";

const BlogCard = React.memo(() => {
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ...";
    }
    return text;
  };
  return (
    <>
      <section className="blog_outer-main blog-outer pad100">
        <div className="container d-flex">
         <div className="blog-flex d-flex gap-20 wrap-flex"> 
          <div className="blog-main-col">
            <div className="blog-main-img">
              <img src={"assets/images/blog_main_img.jpg"} alt="Image" />
            </div>
            <div className="blog-main-text">
              <div className="blog-top d-flex">
                <div>
                  <Icon icon="uil:calender" />
                  <span>29 March 2023</span>
                </div>
                <div>
                  <Icon icon="octicon:clock-24" />
                  <span>3 mins read</span>
                </div>
              </div>
              <h4>
                Color psychology is the study of hues as a determinant of human
                behavior.
              </h4>
              <p>
                {truncateText(
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat consequatur ipsa exercitationem. Vero, facilis.",
                  20
                )}
              </p>
              <Button
                title="Read More"
                type="button"
                svgBackgroundColor="#FB9100"
                icon="solar:arrow-right-broken"
                borderColor="transparent"
                navigateTo="/about"
              />
            </div>
          </div>
          <div className="blog-main-col">
            <div className="blog-main-img">
              <img src={"assets/images/blog_main_img.jpg"} alt="Image" />
            </div>
            <div className="blog-main-text">
              <div className="blog-top d-flex">
                <div>
                  <Icon icon="uil:calender" />
                  <span>29 March 2023</span>
                </div>
                <div>
                  <Icon icon="octicon:clock-24" />
                  <span>3 mins read</span>
                </div>
              </div>
              <h4>
                Color psychology is the study of hues as a determinant of human
                behavior.
              </h4>
              <p>
                {truncateText(
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat consequatur ipsa exercitationem. Vero, facilis.",
                  20
                )}
              </p>
              <Button
                title="Read More"
                type="button"
                svgBackgroundColor="#FB9100"
                icon="solar:arrow-right-broken"
                borderColor="transparent"
                navigateTo="/about"
              />
            </div>
          </div>
          <div className="blog-main-col">
            <div className="blog-main-img">
              <img src={"assets/images/blog_main_img.jpg"} alt="Image" />
            </div>
            <div className="blog-main-text">
              <div className="blog-top d-flex">
                <div>
                  <Icon icon="uil:calender" />
                  <span>29 March 2023</span>
                </div>
                <div>
                  <Icon icon="octicon:clock-24" />
                  <span>3 mins read</span>
                </div>
              </div>
              <h4>
                Color psychology is the study of hues as a determinant of human
                behavior.
              </h4>
              <p>
                {truncateText(
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat consequatur ipsa exercitationem. Vero, facilis.",
                  20
                )}
              </p>
              <Button
                title="Read More"
                type="button"
                svgBackgroundColor="#FB9100"
                icon="solar:arrow-right-broken"
                borderColor="transparent"
                navigateTo="/about"
              />
            </div>
          </div>
          </div>
          <aside className="blog__aside-items">
            <div>
              <PopularPosts />
            </div>
          </aside>
        </div>
        
      </section>
    </>
  );
});

BlogCard.displayName = "BlogCard";

const MainBlog = () => {
  return (
    <>
      <Banner title="Blog" />
      <BlogCard />
    </>
  );
};

export default MainBlog;
