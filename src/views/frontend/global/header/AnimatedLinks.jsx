"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function AnimatedLinks({ title,link }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link to={link}>
    <motion.div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",

      }}
    >
      <AnimatedWord title={title} animation={letterAnimation} isHovered={isHovered}/>
      <div
        style={{
          position: "absolute",
          top: 0,
        }}
      >
        <AnimatedWord title={title} animation={letterAnimationTwo} isHovered={isHovered}/>
      </div>
    </motion.div>
    </Link>
  );
}

const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.003,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.003,
    },
  },
};

const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -30,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};
const letterAnimationTwo = {
  rest: {
    y: 30,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const AnimatedWord = ({ title, animation,isHovered }) => {
  return (
    <motion.span
      variants={titleAnimation}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      style={{
        position: "relative",
        whiteSpace: "nowrap",
        // padding:"30px 0px"
      }}
    >
      {title.split("").map((letter, index) =>
        letter === " " ? (
          <span key={index}>&nbsp;</span>
        ) : (
          <motion.span
            key={index}
            variants={animation}
            style={{
              position: "relative",
              display: "inline-block",
              whiteSpace: "nowrap",
            //   padding:"30px 0px"
            }}
          >
            {letter}
          </motion.span>
        )
      )}
    </motion.span>
  );
};
