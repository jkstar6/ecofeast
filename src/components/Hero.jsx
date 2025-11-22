// src/components/Hero.jsx
import React from "react";
import "../styles/hero.css";
import logo from "../assets/logo.png";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import arrow from "../assets/arrow.png";
import image from "../assets/image.png";

export default function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${image})` }}>
      <header>
        <img src={logo} alt="logo" />
        <div className="curve-one"></div>
        <div className="curve-two"></div>
        <div className="curve-three"></div>
        <nav>
          <ul>
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Cara Kerja</a></li>
            <li><a href="#">Dampak</a></li>
            <li><a href="#">Paket</a></li>
            <li><a href="#">Tentang Kami</a></li>
          </ul>
        </nav>
        <a className="btn-masuk-daftar" href="#">Masuk / Daftar</a>
      </header>

      <div className="content">
        <div className="main">
          <div className="curve-four"></div>
          <h1 className="fade-left fade-delay-1">Catering Berkelanjutan, <br />Pilihan Fleksibel</h1>
          <h2 className="fade-left fade-delay-2">Lebih hemat. Lebih hijau. Lebih cerdas.</h2>
          <p className="fade-left fade-delay-3">
            Satu platform untuk banyak catering, atur menu <br />
            mingguanmu tanpa ribet, tanpa plastik sekali pakai.
          </p>
          <button className="btn-pesan-sekarang fade-left fade-delay-4">Pesan Sekarang</button>
        </div>

        <div className="side">
          <div className="item">
            <img className="item-image" src={item1} alt="" />
            <div className="item-content">
              <p>
                Rencanakan<br />
                <span className="highlight">Menu Mingguan-Mu</span> Sekarang!
              </p>
            </div>
            <button className="item-button">
              <img src={arrow} alt="" />
            </button>
            <div className="curve-item-one"></div>
            <div className="curve-item-two"></div>
          </div>

          <div className="item">
            <img className="item-image" src={item2} alt="" />
            <div className="item-content">
              <p>
                Lihat <span className="highlight">Cuplikan Menu</span> Minggu Ini
              </p>
            </div>
            <button className="item-button">
              <img src={arrow} alt="" />
            </button>
            <div className="curve-item-one"></div>
            <div className="curve-item-two"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
