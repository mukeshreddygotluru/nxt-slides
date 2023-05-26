import React from "react";

import "./index.css";

const SlideTabsPanel = ({ slides, activeSlideIndex, handleSlideTabClick }) => {
  return (
    <div>
      <div className="slide-tabs-panel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide-tab ${
              index === activeSlideIndex ? "active" : ""
            }`}
            onClick={() => handleSlideTabClick(index)}
          >
            <div className="tab-list">
              {index + 1}{" "}
              {
                <div className="tab">
                  <h1 className="heading-small">{slide.heading}</h1>
                  <p className="description-small">{slide.description}</p>
                </div>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideTabsPanel;
