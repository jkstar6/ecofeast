import React from "react";
import "../styles/footer.css";
import logo from "../assets/logo-ecofeast-3.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="left-footer">
          <img src={logo} alt="EcoFeast Logo" />
          <h1>
            Eat Fresh.
            <br />
            No Waste.
          </h1>
        </div>

        <div className="right-footer">
          <ul className="footer-ul-1">
            <li><a href="">Beranda</a></li>
            <li><a href="">Kenapa Pilih Kami?</a></li>
            <li><a href="">Cara Kerja</a></li>
            <li><a href="">Dampak</a></li>
            <li><a href="">Paket</a></li>
          </ul>

          <ul className="footer-ul-2">
            <li><a href="">Layanan</a></li>
            <li><a href="">Tentang Kami</a></li>
            <li><a href="">Sosial Media</a></li>
          </ul>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="line-footer"></div>
        <div className="bottom-text">
          <p>© 2025 EcoFeast. Website by Tim 5 ITC UPNYK</p>
          <h5>ECOFEAST</h5>
        </div>
      </div>
    </div>
  );
}
