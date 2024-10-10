import React from "react";
import "../styles/BigII.css";
import img from '../images/gold-81.png'

function BigII({ isVisible }) {
  return (
    <div id="big2" className={`big2 ${isVisible ? "" : "hidden"}`}>
      <img src={img} alt="logo" />
    </div>
  );
}

export default BigII;
