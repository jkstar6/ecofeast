// src/components/RightSlider.jsx
import React, { useEffect, useState } from "react";
import recycle from "../assets/recycle.png";
import food from "../assets/food.png";
import time from "../assets/time.png";
import dashboard from "../assets/dashboard.png";

export default function RightSlider() {
  const slides = [
    {
      img: recycle,
      title: "Wadah Reusable",
      desc: "Kami menggunakan wadah yang bisa digunakan kembali, bukan plastik sekali pakai.",
    },
    {
      img: food,
      title: "Food Waste Tracking",
      desc: "Lihat seberapa banyak makanan yang tersisa dan bantu kurangi limbah dan konsumsi harianmu.",
    },
    {
      img: time,
      title: "Custom Waktu dan Lokasi Antar",
      desc: "Pilih kapan dan dimana makananmu dikirim sesuai jadwalmu.",
    },
    {
      img: dashboard,
      title: "Dashboard Nutrisi dan Statistik",
      desc: "Pantau asupan mikro-nutrien dan statistik konsumsi setiap minggu.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const auto = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(auto);
  }, [slides.length]);

  return (
    <div className="right-slider">
      <div
        className="container-slider"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: "transform 1s ease",
        }}
      >
        {slides.map((s, i) => (
          <div className="container-slide" key={i}>
            <img src={s.img} alt={s.title} />
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      <ul className="dots">
        {slides.map((_, i) => (
          <li
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          ></li>
        ))}
      </ul>

      <div className="why">
        <p>Kenapa pilih kami</p>
      </div>
      <div className="curve-slider-one"></div>
      <div className="curve-slider-two"></div>
      <div className="curve-slider-three"></div>
    </div>
  );
}
