import { useEffect, useState } from "react";
import "./DiagonalSlider.scss";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundImage from "./BackgroundImage";
import NextSlide from "./NextSlide";

const DiagonalSlider = () => {
  const sliderData = [
    "assets/images/big-image_ceo.jpg",
    "assets/images/ceo_sir-img.jpg",
  ];
  const initData = sliderData[0];
  const [data, setData] = useState(sliderData.slice(1));
  const [transitionData, setTransitionData] = useState(sliderData[0]);
  const [currentSlideData, setCurrentSlideData] = useState({
    data: initData,
    index: 0,
  });

  const handleSlide = () => {
    setData((prev) => prev.slice(1));
    setCurrentSlideData({
      data: transitionData ? transitionData : initData,
      index: sliderData.findIndex((item) => item === data[0]),
    });
    setTransitionData(data[0]);
    setTimeout(() => {
      setData((newData) => [
        ...newData,
        transitionData ? transitionData : initData,
      ]);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="diagonal_slider">
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="diagonal-slider__slide">
          <NextSlide data={data} />
        </div>
      </AnimatePresence>
    </div>
  );
};

export default DiagonalSlider;
