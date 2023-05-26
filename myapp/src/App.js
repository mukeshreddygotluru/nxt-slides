import React, { useState } from "react";
import { v4 } from "uuid";
import SlideTabsPanel from "./components/SlideTabsPanel";
import CurrentSlide from "./components/CurrentSlide";
import NewButton from "./components/NewButton";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [slides, setSlides] = useState([
    {
      id: "cc6e1752-a063-11ec-b909-0242ac120002",
      heading: "Welcome",
      description: "Rahul",
    },
    {
      id: "cc6e1aae-a063-11ec-b909-0242ac120002",
      heading: "Agenda",
      description: "Technologies in focus",
    },
    {
      id: "cc6e1e78-a063-11ec-b909-0242ac120002",
      heading: "Cyber Security",
      description: "Ethical Hacking",
    },
    {
      id: "cc6e1fc2-a063-11ec-b909-0242ac120002",
      heading: "IoT",
      description: "Wireless Technologies",
    },
    {
      id: "cc6e20f8-a063-11ec-b909-0242ac120002",
      heading: "AI-ML",
      description: "Cutting-Edge Technology",
    },
    {
      id: "cc6e2224-a063-11ec-b909-0242ac120002",
      heading: "Blockchain",
      description: "Emerging Technology",
    },
    {
      id: "cc6e233c-a063-11ec-b909-0242ac120002",
      heading: "XR Technologies",
      description: "AR/VR Technologies",
    },
  ]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideTabClick = (index) => {
    setActiveSlideIndex(index);
  };

  const handleHeadingClick = () => {
    const newHeading = prompt("Enter new heading:");
    if (newHeading) {
      const updatedSlides = [...slides];
      updatedSlides[activeSlideIndex].heading = newHeading;
      setSlides(updatedSlides);
    }
  };

  const handleDescriptionClick = () => {
    const newDescription = prompt("Enter new description:");
    if (newDescription) {
      const updatedSlides = [...slides];
      updatedSlides[activeSlideIndex].description = newDescription;
      setSlides(updatedSlides);
    }
  };

  const handleNewButtonClick = () => {
    const newSlide = {
      id: v4(),
      heading: "Heading",
      description: "Description",
    };
    const updatedSlides = [...slides, newSlide];
    /* updatedSlides.splice(activeSlideIndex + 1, 0, newSlide); */
    setSlides(updatedSlides);
    setActiveSlideIndex(activeSlideIndex);
  };

  return (
    <div className="app-container">
      <Header />
      <NewButton handleNewButtonClick={handleNewButtonClick} />
      <div className="nxt-slides-app">
        <div className="slide">
          <SlideTabsPanel
            slides={slides}
            activeSlideIndex={activeSlideIndex}
            handleSlideTabClick={handleSlideTabClick}
          />
        </div>
        <div className="active-slide">
          <CurrentSlide
            slide={slides[activeSlideIndex]}
            handleHeadingClick={handleHeadingClick}
            handleDescriptionClick={handleDescriptionClick}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
