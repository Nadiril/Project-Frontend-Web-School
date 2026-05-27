import BasicExample from "../components/navBar";
// import Footer from "../components/Footer";
import "../App.css";

function Tentang() {
  return (
    <div className="page-wrapper">
      <BasicExample />

      {/* Header Halaman */}
      <div className="about-header text-center py-5 bg-light">
        <div className="container">
          <h1 className="display-4 fw-bold">Tentang Kami</h1>
          <p className="lead">Mengenal Lebih Dekat Madrasah Aliyah Ibrahimy</p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-center">
          {/* Bagian Teks Utama */}
          <div className="col-lg-7 mb-4">
            <h2 className="mb-4">Sejarah MA Ibrahimy</h2>
            <p
              className="text-muted"
              style={{ lineHeight: "1.8", textAlign: "justify" }}
            >
              <strong>MA Ibrahimy</strong> adalah lembaga pendidikan swasta di
              bawah naungan Kementerian Agama yang berlokasi di Jalan Ibrahimy
              Secang, Kalipuro, Kabupaten Banyuwangi. Sekolah ini telah resmi
              terakreditasi berdasarkan{" "}
              <strong>SK No. 164/BAP-S/M/SK/XI/2017</strong>.
            </p>
          </div>

          {/* Bagian Card Informasi Cepat (Syarat UTS) */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-lg p-3">
              <div className="card-body">
                <h4 className="card-title text-success mb-4">
                  Informasi Singkat
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>📍 Alamat:</strong> Jl. Ibrahimy Secang, Kalipuro
                  </li>
                  <li className="mb-3">
                    <strong>📜 Akreditasi:</strong> Nilai C (2017)
                  </li>
                  <li className="mb-3">
                    <strong>🕌 Naungan:</strong> Kementerian Agama
                  </li>
                  <li className="mb-3">
                    <strong>🎯 Fokus:</strong> Karakter & Intelektual
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Visi & Misi */}
        <div className="row mt-5 text-center">
          <div className="col-md-6 mb-4">
            <div className="p-4 border rounded bg-white shadow-sm h-100">
              <h3 className="text-success">Visi</h3>
              <p>
                Menjadi lembaga pendidikan unggul dalam melahirkan generasi
                berakhlak mulia, cerdas, kompeten, dan berdedikasi tinggi.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="p-4 border rounded bg-white shadow-sm h-100">
              <h3 className="text-success">Misi</h3>
              <p>
                Memberikan pendidikan berkualitas yang mengintegrasikan ilmu
                agama dan ilmu pengetahuan umum demi pengembangan karakter
                siswa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tambahkan Footer sesuai ketentuan UTS */}
      {/* <Footer /> */}
    </div>
  );
}

export default Tentang;
