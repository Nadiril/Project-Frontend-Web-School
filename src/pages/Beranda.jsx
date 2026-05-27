import { useNavigate } from "react-router-dom";
import BasicExample from "../components/navBar";
import "../App.css";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <BasicExample />

      <div className="hero-section">
        {/* Background diletakkan sebagai elemen absolut */}
        <div className="hero-background">
          <img
            src="/sekolah.webp"
            alt="Madrasah Aliyah Ibrahimy"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Konten berada di atas background */}
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Melahirkan Generasi <br />
              <span>Berakhlak Mulia</span>
            </h1>
            <div className="hero-divider"></div>
            <p className="hero-subtitle">Madrasah Aliyah Ibrahimy</p>
            <p className="hero-tagline">Secang - Kalipuro - Banyuwangi</p>

            <div className="hero-buttons">
              <button
                className="btn-primary-custom"
                onClick={() => navigate("/tentang")}
              >
                Tentang Sekolah
              </button>

              <button
                className="btn-outline-custom"
                onClick={() => navigate("/spmb")}
              >
                SPMB
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
