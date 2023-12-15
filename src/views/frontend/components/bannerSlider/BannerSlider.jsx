import { useEffect, useState } from "react";
import BackgroundImage from "./BackgroundImage";
import BannerContent from "./BannerContent";

const sliderData = [
  {
    img: "assets/images/1.png",
    subHead: "Hey There!1",
    title: "We Are A Strategic Creative Agency1.",
  },
  {
    img: "assets/images/2.png",
    subHead: "Hey There!2",
    title: "We Are A Strategic Creative Agency2.",
  },
  {
    img: "assets/images/3.png",
    subHead: "Hey There!3",
    title: "We Are A Strategic Creative Agency3.",
  },
  {
    img: "assets/images/4.png",
    subHead: "Hey There!4",
    title: "We Are A Strategic Creative Agency4.",
  },
  {
    img: "assets/images/5.png",
    subHead: "Hey There!5",
    title: "We Are A Strategic Creative Agency5.",
  },
  {
    img: "assets/images/6.png",
    subHead: "Hey There!6",
    title: "We Are A Strategic Creative Agency6.",
  },
  {
    img: "assets/images/7.png",
    subHead: "Hey There!7",
    title: "We Are A Strategic Creative Agency7.",
  },
];

const initData = sliderData[0];

const BannerSlider = () => {
  const [data, setData] = useState(sliderData.slice(1));
  const [transitionData, setTransitionData] = useState(sliderData[0]);
  const [currentSlideData, setCurrentSlideData] = useState({
    data: initData,
    index: 0,
  });

  const SlideToNext = () => {
    setData((prev) => prev.slice(1));
    setCurrentSlideData({
      data: transitionData ? transitionData : initData,
      index: sliderData.findIndex((ele) => ele.img === data[0].img),
    });
    setTransitionData(data[0]);
    setData((newData) => [
      ...newData,
      transitionData ? transitionData : initData,
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      SlideToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlideData]);

  return (
    <div className="banner__wrapper">
      <BackgroundImage transitionData={transitionData} />
      <div>
        <div className="banner-slider__content__overlay">
          <div className="banner-slider__content">
            <BannerContent transitionData={transitionData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
