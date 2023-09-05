import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./App.css";
import { SliderData } from "./SliderData";

const App = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === SliderData.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === SliderData.length - 1 ? 0 : current + 1);
  };
  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

      {SliderData.map((slide, index) => {
        return (
          <>
            {index === current && (
              <img src={slide.image} alt="test" className="image" />
            )}
          </>
        );
      })}
    </div>
  );
};

export default App;
