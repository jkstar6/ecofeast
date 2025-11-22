import React, { useEffect } from "react";
import LeftSlider from "./LeftSlider";
import RightSlider from "./RightSlider";
import "../styles/whyUs.css";

export default function WhyUs() {

  // efek scroll
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="why-us">
      <h1 className="reveal">Lebih dari sekedar catering</h1>
      <h3 className="reveal">
        Anda bisa makan enak, hemat waktu, dan bantu bumi sekaligus
      </h3>

      <div className="slider-container">
        <LeftSlider />
        <RightSlider />
      </div>
    </div>
  );
}
