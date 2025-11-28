import React, { useEffect, useRef } from "react";
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
    stars: 4,
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
  const sliderRef = useRef(null);

  // mutable refs untuk state non-reactive
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const lastX = useRef(0);
  const velocity = useRef(0);
  const momentumID = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Mouse events
    const onMouseDown = (e) => {
      isDown.current = true;
      slider.classList.add("is-grabbing");
      startX.current = e.pageX;
      scrollStart.current = slider.scrollLeft;
      lastX.current = e.pageX;
      velocity.current = 0;
      cancelMomentum();
      // cegah teks terseleksi saat drag
      document.body.style.userSelect = "none";
    };

    const onMouseMove = (e) => {
      if (!isDown.current) return;
      e.preventDefault();
      const dx = e.pageX - startX.current;
      slider.scrollLeft = scrollStart.current - dx;
      // hitung velocity sebagai perubahan posisi antar frame
      velocity.current = e.pageX - lastX.current;
      lastX.current = e.pageX;
    };

    const endDrag = () => {
      if (!isDown.current) return;
      isDown.current = false;
      slider.classList.remove("is-grabbing");
      document.body.style.userSelect = ""; // restore
      startMomentum();
    };

    const onMouseUp = endDrag;
    const onMouseLeave = endDrag;

    // Touch events (mobile)
    const onTouchStart = (e) => {
      isDown.current = true;
      slider.classList.add("is-grabbing");
      const touch = e.touches[0];
      startX.current = touch.pageX;
      scrollStart.current = slider.scrollLeft;
      lastX.current = touch.pageX;
      velocity.current = 0;
      cancelMomentum();
    };

    const onTouchMove = (e) => {
      if (!isDown.current) return;
      const touch = e.touches[0];
      const dx = touch.pageX - startX.current;
      slider.scrollLeft = scrollStart.current - dx;
      velocity.current = touch.pageX - lastX.current;
      lastX.current = touch.pageX;
    };

    const onTouchEnd = () => {
      if (!isDown.current) return;
      isDown.current = false;
      slider.classList.remove("is-grabbing");
      startMomentum();
    };

    // attach
    slider.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mouseleave", onMouseLeave);

    slider.addEventListener("touchstart", onTouchStart, { passive: true });
    slider.addEventListener("touchmove", onTouchMove, { passive: false }); // will call preventDefault if needed
    slider.addEventListener("touchend", onTouchEnd);

    // cleanup
    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("mouseleave", onMouseLeave);

      slider.removeEventListener("touchstart", onTouchStart);
      slider.removeEventListener("touchmove", onTouchMove);
      slider.removeEventListener("touchend", onTouchEnd);

      cancelMomentum();
      document.body.style.userSelect = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startMomentum() {
    cancelMomentum();
    // gunakan requestAnimationFrame loop
    const step = () => {
      const slider = sliderRef.current;
      if (!slider) return;
      // kurangi velocity karena friction
      slider.scrollLeft -= velocity.current;
      velocity.current *= 0.95; // friction (0.95 -> agak licin; 0.8 -> cepat berhenti)
      // hentikan jika sudah kecil
      if (Math.abs(velocity.current) > 0.5) {
        momentumID.current = requestAnimationFrame(step);
      } else {
        cancelMomentum();
      }
    };
    momentumID.current = requestAnimationFrame(step);
  }

  function cancelMomentum() {
    if (momentumID.current) {
      cancelAnimationFrame(momentumID.current);
      momentumID.current = null;
    }
  }

  return (
    <section className="testi-section testi-container">
      <h2 className="testi-title">
        Dari mahasiswa sampai pekerja kantoran,<br /> semuanya punya cerita
      </h2>

      <div ref={sliderRef} className="testi-slider">
        <div className="testi-track">
          {testimonials.map((item, i) => (
            <div className="testi-card" key={i}>
              <img src={item.avatar} alt={item.name} className="testi-avatar" />
              <div className="testi-content">
                <div className="testi-item">
                  <h3>{item.name}</h3>
                  <div className="stars">{"★".repeat(item.stars)}</div>
                  <p className="testi-text">"{item.text}"</p>
                </div>
                <div className="highlight">
                  <p style={{ textAlign: "center", marginBottom: 12 }}>Highlight</p>
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
