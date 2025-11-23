import "../styles/impactsection.css";

export default function ImpactSection() {
  return (
    <section className="impact-section">

      {/* LEFT TEXT */}
      <div className="impact-left">
        <h2>Bukan sekadar makan, ini gaya hidup cerdas</h2>
        <p>
          Dengan EcoFeast, setiap pesanan bukan hanya mengenyangkan,
          tapi juga berkontribusi pada bumi yang lebih bersih. Pantau
          konsumsi, kurangi limbah, dan dapatkan rekomendasi menu yang
          seimbang dari sistem kami.
        </p>
      </div>

      {/* RIGHT TOP SMALL CARD */}
      <div className="impact-right-top">
        <button className="impact-btn">Kontribusi Anda</button>

        <div className="impact-card small plastic">
          <div className="overlay" />
          <div className="impact-circle">+3</div>
          <p><strong>wadah plastik</strong><br />yang bisa Anda bantu hemat tiap minggu!</p>
        </div>
      </div>

      {/* BOTTOM GRID */}
      <div className="impact-bottom">
        
        <div className="impact-card big">
          <div className="overlay" />
          <div className="impact-number">12.000+</div>
          <p className="impact-desc">
            <strong>wadah plastik</strong><br />
            yang diselamatkan pengguna kami
          </p>
        </div>

        <div className="impact-card small img">
          <div className="overlay" />
          <div className="impact-circle small">81%</div>
          <p><strong>sampah makanan</strong><br />yang biasanya Anda buang telah berhasil dihemat</p>
        </div>

      </div>

    </section>
  );
}
