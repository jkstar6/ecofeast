// src/components/WhyUs.jsx
import React from "react";
import LeftSlider from "./LeftSlider";
import RightSlider from "./RightSlider";

export default function WhyUs() {
  return (
    <div className="why-us">
      <h1>Lebih dari sekedar catering</h1>
      <h3>Anda bisa makan enak, hemat waktu, dan bantu bumi sekaligus</h3>
      <div className="slider-container">
        <LeftSlider />
        <RightSlider />
      </div>
    </div>
  );
}
