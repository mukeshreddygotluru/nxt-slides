import React from "react";
import "./index.css";

const NewButton = ({ handleNewButtonClick }) => {
  return (
    <div>
      <button className="new-button" onClick={handleNewButtonClick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
          alt="new plus icon"
          className="plus"
        />
        New
      </button>
    </div>
  );
};

export default NewButton;
