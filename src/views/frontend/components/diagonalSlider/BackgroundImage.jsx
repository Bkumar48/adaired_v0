import { motion } from "framer-motion";

const BackgroundImage = ({ transitionData, currentSlideData }) => {
  return (
    <>
      {transitionData && (
        <motion.img
          key={transitionData.img}
          layoutId={transitionData.img}
          alt={transitionData.alt}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.5 },
          }}
          className="diagonalSlider__backgroundImage"
          src={transitionData.img}
        />
      )}
      <motion.img
        exit={transitionData ? { opacity: 0 } : { opacity: 1 }}
        alt={currentSlideData.data?.alt}
        key={currentSlideData.data?.img + "1"}
        src={currentSlideData.data?.img}
        className="diagonalSlider__backgroundImage-still"
      />
    </>
  );
};

export default BackgroundImage;
