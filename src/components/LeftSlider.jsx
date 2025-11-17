// src/components/LeftSlider.jsx
import React, { useEffect, useRef, useState } from "react";
import slide1 from "../assets/slide-1.png";
import slide2 from "../assets/slide-2.png";
import slide3 from "../assets/slide-3.png";
import slide4 from "../assets/slide-4.png";

export default function LeftSlider() {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);
  const slides = [slide1, slide2, slide3, slide4];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const offset = slider.children[active]?.offsetLeft || 0;
      slider.style.left = `-${offset}px`;
    }
  }, [active]);

  return (
    <div className="left-slider">
      <div className="item-slider" ref={sliderRef}>
        {slides.map((src, index) => (
          <div className="list" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
