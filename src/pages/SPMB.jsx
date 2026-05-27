import BasicExample from "../components/navBar";
import "../App.css";

function SPMB() {
  return (
    <div className="spmb-page">
      <BasicExample />
      <div className="spmb-wrapper">
        <div className="spmb-container">
          {/* Bagian Kiri: Gambar */}
          <div className="spmb-left">
            <img src="/SPMB.webp" alt="Poster SPMB" className="poster-img" />
          </div>

          {/* Bagian Kanan: Informasi & Tombol */}
          <div className="spmb-right">
            <h2 className="title-spmb">Sistem Penerimaan Murid Baru 2026</h2>
            <p className="description">
              Segera daftarkan diri Anda di MA Ibrahimy Secang Kalipuro.
              Dapatkan fasilitas pendidikan terbaik dan ekstrakurikuler yang
              beragam untuk mengembangkan bakat dan minat siswa.
              <br />
              *20 Pendaftar Pertama Mendapatkan Reward
            </p>
            <div className="info-section">
              <p>
                <strong>📍 Lokasi:</strong> MA. Ibrahimy Secang, Kalipuro,
                Banyuwangi
              </p>
              <p>
                <strong>📅 Jadwal:</strong> 13 April s.d 17 Juli 2026
              </p>
              <p>
                <strong>📞 Kontak:</strong> 0812-1684-1873
              </p>
            </div>
            <button
              className="btn-daftar"
              onClick={() => (window.location.href = "#")}
            >
              DAFTAR SEKARANG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SPMB;
