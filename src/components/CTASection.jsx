import React from "react";
import "../styles/CTASection.css";
import pilihImg from "../assets/pilih.png";
import gabungImg from "../assets/gabung.png";
import arrowBlack from "../assets/arrow-black.png";

export default function CTASection() {
  return (
    <div className="cta-section">
      {/* Box 1 */}
      <div className="cta">
        <div className="container-cta">
          <h2>Pilih paketmu sekarang!</h2>
          <img className="pilih" src={pilihImg} alt="pilih" />
        </div>
        <div className="cta-button">
          <button>
            Pilih Paket <img src={arrowBlack} alt="" />
          </button>
        </div>
      </div>

      {/* Box 2 */}
      <div className="cta">
        <div className="container-cta">
          <h2>Belum bergabung di website kami?</h2>
          <img className="gabung" src={gabungImg} alt="gabung" />
        </div>
        <div className="cta-button">
          <button>
            Daftar Sekarang <img src={arrowBlack} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
