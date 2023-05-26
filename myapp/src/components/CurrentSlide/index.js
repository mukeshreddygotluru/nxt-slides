import React from "react";
import "./index.css";

const CurrentSlide = ({
  slide,
  handleHeadingClick,
  handleDescriptionClick,
}) => {
  return (
    <div className="current-slide">
      <h1 className="heading" onClick={handleHeadingClick}>
        {slide.heading}
      </h1>
      <p className="description" onClick={handleDescriptionClick}>
        {slide.description}
      </p>
    </div>
  );
};

export default CurrentSlide;
