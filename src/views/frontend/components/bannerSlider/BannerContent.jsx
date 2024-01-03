import { motion } from "framer-motion";
import Button from "./../buttonComponent/Button";

const AnimatedText = ({ data, className }) => {
  const item = {
    hidden: {
      y: "100%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.6 },
    },
    visible: {
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 1.2,
        // type: "spring",
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
        <motion.h1 className={`${className}`} variants={item} key={data}>
          {data}
        </motion.h1>
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
      <motion.div layout className="banner-slider__btn">
        <Button
          title="Request A Callback"
          type="button"
          svgBackgroundColor="#F89520"
          icon="solar:arrow-right-broken"
          borderColor="transparent"
          className="btn__case-study"
        />
      </motion.div>
    </>
  );
};

export default BannerContent;
