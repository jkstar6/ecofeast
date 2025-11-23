import React, { useEffect, useState } from "react";
import "../styles/howitwork.css";

// Import gambar dari folder assets
import IconPaket from "../assets/paket.png";
import IconJadwal from "../assets/jadwal.png";
import IconMenu from "../assets/piring.png";
import IconDashboard from "../assets/static.png";

function HowItWork() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Aktifkan animasi setelah komponen muncul
    setTimeout(() => setVisible(true), 100);
  }, []);

  const steps = [
    {
      id: 1,
      icon: IconPaket,
      title: "Pilih Paket",
      desc: "Pilih dari berbagai catering terpercaya dan sesuaikan level paketmu.",
    },
    {
      id: 2,
      icon: IconJadwal,
      title: "Atur Jadwal dan Jumlah Makan",
      desc: "Pilih 1–3 kali makan per hari dan 4–6 hari per minggu.",
    },
    {
      id: 3,
      icon: IconMenu,
      title: "Pilih Menu atau Gunakan Rekomendasi",
      desc: "Atur sendiri atau biarkan sistem pilih menu seimbang untukmu.",
    },
    {
      id: 4,
      icon: IconDashboard,
      title: "Nikmati dan Pantau di Dashboard",
      desc: "Lihat statistik nutrisi dan food waste setiap minggu.",
    },
  ];

  return (
    <div className="how-it-works">
      <h2>Langkah cepat untuk memulai</h2>
      <p>Hanya 4 Langkah Mudah Menuju Pola Makan Sehatmu.</p>

      <div className="steps">
        {steps.map((step, index) => (
          <div
            className={`card ${visible ? "fade-up" : ""}`}
            key={step.id}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="step-number">{step.id}</div>
            <div className="icon">
              <img src={step.icon} alt={step.title} />
            </div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="timeline">
        <div className="line"></div>
        {steps.map((_, index) => (
          <div className="dot" key={index}></div>
        ))}
      </div>
    </div>
  );
}

export default HowItWork;
