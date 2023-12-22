import { Icon } from "@iconify/react";
const SliderButton = ({ children, handleClick }) => {
  return (
    <button className="diagonalSlider__button" onClick={handleClick}>
      {children}
    </button>
  );
};

const Controls = ({
  sliderData,
  data,
  transitionData,
  currentSlideData,
  handleData,
  handleTransitionData,
  handleCurrentSlideData,
}) => {
  const handlePrev = () => {
    handleData((prevData) => [
      transitionData ? transitionData : initData,
      ...prevData.slice(0, prevData.length - 1),
    ]);
    handleCurrentSlideData({
      data: transitionData ? transitionData : sliderData[0],
      index: sliderData.findIndex(
        (ele) => ele.img === data[data.length - 1].img
      ),
    });
    handleTransitionData(data[data.length - 1]);
  };

  const handleNext = () => {
    handleData((prev) => prev.slice(1));
    handleCurrentSlideData({
      data: transitionData ? transitionData : initData,
      index: sliderData.findIndex((ele) => ele.img === data[0].img),
    });
    handleTransitionData(data[0]);
    setTimeout(() => {
      handleData((newData) => [
        ...newData,
        transitionData ? transitionData : initData,
      ]);
    }, 500);
  };
  return (
    <div className="diagonalSlider__control-btn">
      <SliderButton handleClick={handlePrev}>
        <Icon icon="mingcute:arrow-left-line" />
      </SliderButton>
      <SliderButton handleClick={handleNext}>
        <Icon icon="mingcute:arrow-right-line" />
      </SliderButton>
    </div>
  );
};

export default Controls;
