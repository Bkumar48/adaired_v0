import React from "react";
import { motion } from "framer-motion";
const BackgroundImage = ({ transitionData, currentSlideData }) => {
  return (
    <>
      {transitionData && (
        <motion.img
          key={transitionData}
          layoutId={transitionData}
          alt={"Transition Image"}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          className="diagonal-slider__transition_image"
        />
      )}
      <motion.img
        alt={"Current Image"}
        key={currentSlideData.data + "transition"}
        src={currentSlideData.data}
        className="diagonal-slider__current_image"
      />
    </>
  );
};

export default BackgroundImage;
