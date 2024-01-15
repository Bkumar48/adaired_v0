import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BackgroundImage from "./BackgroundImage";
import Slides from "./Slides";
import Controls from "./Controls";
import "./DiagonalSlider.scss";

const sliderData = [
  {
    img: "assets/images/diagonalSliderImages/image1.webp",
    alt: "CEO",
  },
  {
    img: "assets/images/diagonalSliderImages/image2.webp",
    alt: "CEO",
  },
  {
    img: "assets/images/diagonalSliderImages/image3.webp",
    alt: "CEO",
  },
  {
    img: "assets/images/diagonalSliderImages/image4.webp",
    alt: "CEO",
  },
  {
    img: "assets/images/diagonalSliderImages/image5.webp",
    alt: "CEO",
  },
  {
    img: "assets/images/diagonalSliderImages/image6.webp",
    alt: "CEO",
  },
  {
    img: "assets/images/diagonalSliderImages/image7.webp",
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
