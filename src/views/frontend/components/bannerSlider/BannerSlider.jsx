import { useEffect, useState } from "react";
import BackgroundImage from "./BackgroundImage";
import BannerContent from "./BannerContent";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const sliderData = [
  {
    img: "assets/images/1.png",
    subHead: "Adaired Digital Media",
    title: "Digital Marketing Agency That Turns Businesses Into Brands 0 ",
  },
  {
    img: "assets/images/2.png",
    subHead: "Adaired Digital Media",
    title: "Digital Marketing Agency That Turns Businesses Into Brands 1 ",
  },
  {
    img: "assets/images/3.png",
    subHead: "Adaired Digital Media",
    title: "Digital Marketing Agency That Turns Businesses Into Brands 2",
  },
];

const socialIcons = [
  {
    className: "icon-1",
    paths: [
      "M19.7998 31.6801H12.4078V19.6681H7.65576V12.5401H12.4078V9.90008C12.4078 6.86408 13.1998 4.62008 14.9158 3.16808C16.8958 1.45208 20.0638 0.924082 24.5518 1.58408L25.3438 1.71608V8.18408H21.3838C20.3278 8.18408 19.9318 8.44808 19.9318 9.90008V12.5401H25.3438L24.4198 19.6681H19.7998V31.6801ZM14.1238 29.9641H18.0838V17.9521H22.8358L23.2318 14.2561H18.0838V9.90008C18.0838 7.65608 19.1398 6.46808 21.2518 6.46808H23.4958V3.16808C19.9318 2.64008 17.4238 3.16808 15.9718 4.35608C14.6518 5.41208 13.9918 7.26008 13.9918 9.76808V14.1241H9.37176V17.8201H14.1238V29.9641Z",
    ],
  },
  {
    className: "banner__social-icon instagram",
    paths: [
      "M22.0441 30.3599H10.9561C6.33614 30.3599 2.64014 26.6639 2.64014 22.0439V10.9559C2.64014 6.33589 6.33614 2.63989 10.9561 2.63989H22.0441C26.6641 2.63989 30.3601 6.33589 30.3601 10.9559V22.0439C30.3601 26.6639 26.6641 30.3599 22.0441 30.3599ZM10.9561 4.22389C7.26014 4.22389 4.22414 7.25989 4.22414 10.9559V22.0439C4.22414 25.7399 7.26014 28.7759 10.9561 28.7759H22.0441C25.7401 28.7759 28.7761 25.7399 28.7761 22.0439V10.9559C28.7761 7.25989 25.7401 4.22389 22.0441 4.22389H10.9561Z",
      "M16.4999 23.0999C12.8039 23.0999 9.8999 20.0639 9.8999 16.4999C9.8999 12.9359 12.9359 9.8999 16.4999 9.8999C20.1959 9.8999 23.0999 12.9359 23.0999 16.4999C23.2319 20.1959 20.1959 23.0999 16.4999 23.0999ZM16.4999 11.3519C13.7279 11.3519 11.3519 13.5959 11.3519 16.4999C11.3519 19.4039 13.5959 21.6479 16.4999 21.6479C19.4039 21.6479 21.6479 19.4039 21.6479 16.4999C21.6479 13.7279 19.2719 11.3519 16.4999 11.3519Z",
      "M24.1559 10.296C23.3639 10.296 22.8359 9.63601 22.8359 8.97601C22.8359 8.31601 23.4959 7.65601 24.1559 7.65601C24.8159 7.65601 25.4759 8.31601 25.4759 8.97601C25.4759 9.63601 24.9479 10.296 24.1559 10.296ZM24.1559 8.71201C24.0239 8.71201 24.0239 8.84401 24.0239 8.84401C24.0239 9.10801 24.4199 9.10801 24.4199 8.84401C24.4199 8.84401 24.2879 8.71201 24.1559 8.71201Z",
    ],
  },
  {
    className: "banner__social-icon twitter",
    paths: [
      "M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z",
    ],
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

  const staggerDuration = 0.25;

  const socialIconAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const socialIconVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: { scaleY: 1, originY: 0 },
  };

  const svgVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: { opacity: 1, pathLength: 1 },
  };

  return (
    <AnimatePresence>
      <div className="banner__wrapper">
        <motion.div
          variants={socialIconAnimation}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="social-icon"
        >
          <motion.div
            variants={socialIconVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: staggerDuration }}
            className="line before"
          ></motion.div>

          {socialIcons.map((icon, index) => (
            <Link to="#" key={index}>
              <motion.svg
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * staggerDuration }}
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                {icon.paths.map((path, subPathIndex) => (
                  <path key={subPathIndex} d={path} fill="white" />
                ))}
              </motion.svg>
            </Link>
          ))}

          <motion.div
            variants={socialIconVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: (socialIcons.length - 1) * staggerDuration + 0.9,
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
