import React from "react";
import "../styles/package.css";

export default function PackageSection() {
  return (
    <div className="package-section">

      <h1 className="package-title">Sesuaikan paket dengan gaya hidupmu</h1>

      <p className="package-subtitle">
        Dari yang simpel dan hemat hingga yang super personal dan penuh kontrol nutrisi.
      </p>

      <div className="package-grid">

        {/* Reguler */}
        <div className="package-card">
          <div>
            <h2 className="card-title">Reguler</h2>
            <p className="card-desc">Simpel, Dekat, Ramah Kantong</p>

            <p className="card-price">
              20k<span>/bulan</span>
            </p>

            <ul className="card-list">
              <li>• Nikmati menu dari catering terdekat jangkauan 1 km</li>
              <li>• Pilih makanan hemat Rp10.000 - Rp20.000</li>
              <li>• Dapatkan promo mingguan & potongan</li>
              <li>• Cocok untuk pelajar & pekerja</li>
            </ul>
          </div>

          <button className="package-btn">Lihat Detail Paket</button>
        </div>

        {/* Premium */}
        <div className="package-card recommended">
          <span className="tag">Recommended</span>

          <div>
            <h2 className="card-title">Premium</h2>
            <p className="card-desc">Lebih Banyak Pilihan, Lebih Banyak Kebebasan</p>

            <p className="card-price">
              35k<span>/bulan</span>
            </p>

            <ul className="card-list">
              <li>• Jangkauan catering hingga 2 km</li>
              <li>• Harga menu Rp10.000 - Rp40.000</li>
              <li>• Variasi menu lebih banyak</li>
              <li>• Rekomendasi otomatis diet plan</li>
              <li>• Promo eksklusif & diskon khusus premium</li>
            </ul>
          </div>

          <button className="package-btn primary">Lihat Detail Paket</button>
        </div>

        {/* Advance */}
        <div className="package-card">
          <div>
            <h2 className="card-title">Advance</h2>
            <p className="card-desc">Untuk Mereka yang Serius dengan Nutrisi</p>

            <p className="card-price">
              55k<span>/bulan</span>
            </p>

            <ul className="card-list">
              <li>• Rekomendasi otomatis diet plan</li>
              <li>• Atur menu personal: kalori, protein, karbo, alergi</li>
              <li>• Mitra catering profesional radius 2 km+</li>
              <li>• Pantau melalui Health Dashboard</li>
              <li>• Prioritas promo & akses awal menu</li>
            </ul>
          </div>

          <button className="package-btn">Lihat Detail Paket</button>
        </div>

      </div>
    </div>
  );
}
