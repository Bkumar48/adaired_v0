import { motion } from "framer-motion";
import Button from "./../buttonComponent/Button";

const AnimatedText = ({ data, className }) => {
  const item = {
    hidden: {
      y: "100%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 2,
        type: "spring",
      },
    },
  };

  return (
    <>
      <span
        style={{
          display: "inline-block",
          overflow: "hidden",
        }}
      >
        <motion.p className={`${className}`} variants={item} key={data}>
          {data}
        </motion.p>
      </span>
    </>
  );
};

const SlideInfoText = ({ data }) => {
  return (
    <motion.div
      initial="hidden"
      animate={"visible"}
      className="banner-slider__info"
    >
      <AnimatedText data={data?.subHead} className="banner-slider__subhead" />
      <AnimatedText data={data?.title} className="banner-slider__title" />
    </motion.div>
  );
};
const BannerContent = ({ transitionData, currentSlideData }) => {
  return (
    <>
      <SlideInfoText
        data={transitionData ? transitionData : currentSlideData.data}
      />
      <motion.div>
        <Button title="Get Started" />
      </motion.div>
    </>
  );
};

export default BannerContent;
