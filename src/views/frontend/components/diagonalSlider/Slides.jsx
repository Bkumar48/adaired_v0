import React from "react";
import SliderCard from "./SliderCard";
const Slides = ({ data }) => {
  console.log(data);
  return <div>{<SliderCard data={data[0]} key={data[0]?.img} />}</div>;
};

export default Slides;
