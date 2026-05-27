import BasicExample from "../components/navBar";
import "../App.css";

function Ekstrakurikuler() {
  const daftarEkskul = [
    {
      nama: "Tahfidz Qur'an",
      ikon: "📖",
      desc: "Pendalaman seni baca Al-Qur'an dan hafalan juz amma.",
    },
    {
      nama: "Paskibra",
      ikon: "🇮🇩",
      desc: "Pelatihan kedisiplinan dan baris-berbaris untuk upacara besar.",
    },
    {
      nama: "Badminton",
      ikon: "🏸",
      desc: "Olahraga bulu tangkis untuk melatih ketangkasan dan stamina.",
    },
    {
      nama: "Futsal",
      ikon: "⚽",
      desc: "Latihan kerjasama tim dan teknik bermain bola untuk kompetisi daerah.",
    },
    {
      nama: "Bola Voli",
      ikon: "🏐",
      desc: "Pembinaan atlet voli sekolah untuk kompetisi daerah.",
    },
    {
      nama: "Pramuka",
      ikon: "⚜️",
      desc: "Pembentukan karakter melalui kegiatan alam dan kepanduan.",
    },
    {
      nama: "Pencak Silat",
      ikon: "🥋",
      desc: "Seni bela diri tradisional untuk kesehatan dan perlindungan diri.",
    },
  ];

  return (
    <div className="ekskul-page">
      <BasicExample />
      <div className="ekskul-container">
        <h1 className="ekskul-title">Ekstrakurikuler</h1>
        <p className="ekskul-subtitle">
          Wadah pengembangan minat dan bakat siswa di MA Ibrahimy.
        </p>

        <div className="ekskul-grid">
          {daftarEkskul.map((item, index) => (
            <div className="ekskul-card" key={index}>
              <div className="ekskul-icon">{item.ikon}</div>
              <h3>{item.nama}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ekstrakurikuler;
