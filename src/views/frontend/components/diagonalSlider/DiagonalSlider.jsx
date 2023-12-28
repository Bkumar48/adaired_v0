import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BackgroundImage from "./BackgroundImage";
import Slides from "./Slides";
import Controls from "./Controls";
import "./DiagonalSlider.scss";

const sliderData = [
  {
    img: "assets/images/big-image_ceo.jpg",
    alt: "CEO",
  },
  {
    img: "assets/images/ceo_sir-img.jpg",
    alt: "CEO",
  },
  {
    img: "assets/images/growth-img.jpg",
    alt: "CEO",
  },
];

const initData = sliderData[0];

const DiagonalSlider = () => {
  const [data, setData] = useState(sliderData.slice(1));
  const [transitionData, setTransitionData] = useState(sliderData[0]);
  const [currentSlideData, setCurrentSlideData] = useState({
    data: initData,
    index: 0,
  });
  return (
    <>
      <div className="diagonalSlider">
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="diagonalSlider__slides">
          <Slides data={data} />
        </div>
      </div>
      
        <Controls
          currentSlideData={currentSlideData}
          data={data}
          transitionData={transitionData}
          initData={initData}
          handleData={setData}
          handleTransitionData={setTransitionData}
          handleCurrentSlideData={setCurrentSlideData}
          sliderData={sliderData}
        />
      
    </>
  );
};

export default DiagonalSlider;
