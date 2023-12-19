import React from "react";
import { motion } from "framer-motion";

const SlideCard = ({ data }) => {
  return (
    <>
      <motion.div
        className="diagonal-slider__slide"
        layout
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.4,
          },
        }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
        }}
      >
        <motion.img
          layoutId={data}
          alt={"Transition Image"}
          src={data}
          className="diagonal-slider__slide_transition_image"
        />
      </motion.div>
    </>
  );
};

const NextSlide = ({ data }) => {
  return (
    <div>
      <SlideCard data={data[0]} key={data[0]} />
    </div>
  );
};

export default NextSlide;
