import React, { useEffect, useState } from "react";
import "../styles/testimoni.css";

/* Import gambar dari folder src/assets */
import avatarRina from "../assets/Ellipse21.png";
import avatarNiko from "../assets/image13.png";
import avatarDoni from "../assets/image14.png";
import avatarAisyah from "../assets/image14.png";

const testimonials = [
  {
    name: "Rina – Pekerja Kantoran",
    avatar: avatarRina,
    stars: 5,
    text: "Suka banget sama fitur atur jam antar! Kadang rapat sampai malam tapi makanannya tetep nyampe sesuai jadwal. Tracking nutrisinya juga membantu banget buat jaga pola makan.",
    tags: ["fleksibilitas waktu", "nutrisi tracking"]
  },
  {
    name: "Niko – Mahasiswa Teknik",
    avatar: avatarNiko,
    stars: 5,
    text: "Awalnya cuma coba seminggu, tapi ternyata seru banget karena bisa mix menu dari beberapa catering. Jadi nggak bosen dan tetep hemat. Plus, gak ada plastik tiap hari!",
    tags: ["variasi menu", "eco container"]
  },
  {
    name: "Doni – Freelancer",
    avatar: avatarDoni,
    stars: 5,
    text: "Suka banget sistem adaptifnya! Bisa ganti jadwal kapan aja, cocok buat yang jam kerjanya nggak menentu. Sekalian bantu hidup mindful juga.",
    tags: ["adaptif", "mindful eating"]
  },
  {
    name: "Aisyah – Mahasiswi Gizi",
    avatar: avatarAisyah,
    stars: 5,
    text: "Cateringnya ramah banget buat diet! Bisa pilih menu sesuai kalori dan rasanya tetep enak.",
    tags: ["diet friendly", "custom menu"]
  }
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visible = testimonials.slice(index, index + 2);
  if (visible.length < 2) {
    visible.push(...testimonials.slice(0, 2 - visible.length));
  }

  return (
    <section className="testi-section">
      <h2 className="testi-title">
        Dari mahasiswa sampai pekerja kantoran,<br /> semuanya punya cerita
      </h2>

      <div className="testi-slider">
        <div className="testi-track">
          {visible.map((item, i) => (
            <div className="testi-card" key={i}>
              <img src={item.avatar} alt={item.name} className="testi-avatar" />
              <div className="testi-content">
                <h3>{item.name}</h3>
                <div className="stars">{"★".repeat(item.stars)}</div>
                <p>{item.text}</p>
                <div className="highlight">
                  <p>Highlight</p>
                  <div className="tags">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
