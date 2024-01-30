import { useEffect, useState } from "react";
import BackgroundImage from "./BackgroundImage";
import BannerContent from "./BannerContent";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const sliderData = [
  {
    img: "/assets/images/homePage/1.webp",
    subHead: "Adaired Digital Media",
    title: "Digital Marketing Agency That Turns Businesses Into Brands",
  },
  {
    img: "/assets/images/homePage/2.webp",
    subHead: "Adaired Digital Media",
    title: "Digital Marketing Agency That Turns Businesses Into Brands",
  },
  {
    img: "/assets/images/homePage/3.webp",
    subHead: "Adaired Digital Media",
    title: "Digital Marketing Agency That Turns Businesses Into Brands",
  },
];

const socialIcons = [
  {
    icon: "line-md:facebook",
    link: import.meta.env.VITE_ADAIRED_FACEBOOK_LINK,
  },
  {
    icon: "line-md:instagram",
    link: import.meta.env.VITE_ADAIRED_INSTA_LINK,
  },
  {
    icon: "line-md:twitter-x",
    link: import.meta.env.VITE_ADAIRED_TWITTER_LINK,
  },
];

const initData = sliderData[0];

const BannerSlider = () => {
  const [data, setData] = useState(sliderData.slice(1));
  const [transitionData, setTransitionData] = useState(sliderData[0]);
  const [currentSlideData, setCurrentSlideData] = useState({
    data: initData,
    index: 0,
  });

  const SlideToNext = () => {
    setData((prev) => prev.slice(1));
    setCurrentSlideData({
      data: transitionData ? transitionData : initData,
      index: sliderData.findIndex((ele) => ele.img === data[0].img),
    });
    setTransitionData(data[0]);
    setData((newData) => [
      ...newData,
      transitionData ? transitionData : initData,
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      SlideToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlideData]);

  const socialIconVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: { scaleY: 1, originY: 0 },
  };

  return (
    <AnimatePresence>
      <div className="banner__wrapper">
        <motion.div className="social-icon">
          <motion.div
            variants={socialIconVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="line before"
          ></motion.div>

          {socialIcons.map((icon, index) => (
            <Link to={icon.link} key={index}>
              <motion.div>
                <Icon
                  icon={icon.icon}
                  style={{
                    fontSize: "2rem",
                    color: "#fff",
                  }}
                />
              </motion.div>
            </Link>
          ))}

          <motion.div
            variants={socialIconVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
            }}
            className="line after"
          ></motion.div>
        </motion.div>
        <BackgroundImage transitionData={transitionData} />
        <div>
          <div className="banner-slider__content__overlay container">
            <div className="banner-slider__content ">
              <BannerContent transitionData={transitionData} />
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default BannerSlider;
