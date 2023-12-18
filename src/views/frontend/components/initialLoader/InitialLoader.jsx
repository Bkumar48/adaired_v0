import React, { useEffect } from "react";
import { motion } from "framer-motion";

const InitialLoader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  });
  return (
    <div className="loader">
      <div className="loader-inner">
        <div className="transition-image"></div>
      </div>
    </div>
  );
};

export const ImageBlock = ({ id }) => {
  return (
    <div className={`image-block ${id}`}>
      <div className="transition-image">
        <img src={"assets/images/banner.jpg"} alt="banner" />
      </div>
    </div>
  );
};

export default InitialLoader;
