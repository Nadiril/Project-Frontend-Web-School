<h1>Bahasa Indonesia</h1>
# Website Madrasah Aliyah Ibrahimy

Website profil sekolah berbasis web yang dibangun menggunakan React dan Vite. Proyek ini dirancang untuk memberikan informasi mengenai Madrasah Aliyah Ibrahimy, mencakup profil sekolah, kegiatan ekstrakurikuler, dan sistem penerimaan murid baru (SPMB).

## 🚀 Fitur Utama

- **Navigasi Multi-halaman**: Menggunakan React Router untuk perpindahan halaman yang mulus.
- **Beranda**: Halaman utama dengan ringkasan informasi sekolah.
- **Profil & Tentang**: Penjelasan detail mengenai sejarah dan visi misi Madrasah.
- **Ekstrakurikuler**: Informasi mengenai kegiatan non-akademik bagi siswa.
- **SPMB**: Halaman khusus untuk informasi Pendaftaran Mahasiswa/Siswa Baru.
- **Desain Responsif**: Menggunakan Bootstrap untuk memastikan tampilan optimal di berbagai perangkat.

## 🛠️ Teknologi yang Digunakan

- **Frontend Library**: [React.js](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Bootstrap](https://getbootstrap.com/) & [React Bootstrap](https://react-bootstrap.github.io/)
- **Routing**: [React Router Dom](https://reactrouter.com/) (v7)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 📋 Prasyarat Instalasi

Pastikan Anda sudah menginstal perangkat lunak berikut di perangkat Anda:

- [Node.js](https://nodejs.org/) (Versi terbaru direkomendasikan)
- [npm](https://www.npmjs.com/) (Biasanya terinstal bersama Node.js)

## ⚙️ Cara Instalasi & Menjalankan Proyek

1. **Clone repositori ini**
   ```bash
   git clone [https://github.com/username/nama-repo.git](https://github.com/username/nama-repo.git)
   cd "Madrasah Aliyah Ibrahimy"
2. **Instal dependensi**
   ```bash
   npm install
3. **Jalankan mode pengembangan**
   ```bash
   npm run dev
4. **Install icons**
   ```bash
   npm install react-icons
5. **Install react-componennt**
   ```bash
    npm install react-bootstrap bootstrap
6. **Install react-router-dom
   ```bash
   npm install react-router-dom
  ## Struktur folder Project :
```text
Madrasah-Aliyah-Ibrahimy/
├── node_modules/           # Folder dependensi npm (terinstal otomatis)
├── public/                 # Aset publik (favicon, logo sekolah)
├── src/
│   ├── assets/             # File gambar, svg, dan branding
│   ├── components/         # Komponen UI Reusable
│   │   ├── Navbar/         # Navigasi (React Bootstrap)
│   │   ├── Footer/         # Footer informasi sekolah
│   │   └── UI/             # Tombol & Card kustom
│   ├── pages/              # Komponen Halaman (Beranda, Tentang, SPMB)
│   ├── layouts/            # Layout utama (MainLayout.jsx)
│   ├── routes/             # Konfigurasi React Router Dom v7
│   ├── styles/             # Custom CSS & Bootstrap overrides
│   │   └── App.css         # Styling global
│   ├── App.jsx             # Entry routing & global provider
│   └── main.jsx            # Entry point (Import Bootstrap CSS di sini)
├── .gitignore              # Daftar file yang diabaikan Git
├── index.html              # Template HTML utama
├── package.json            # Berisi: bootstrap, react-bootstrap, react-icons, react-router-dom
└── vite.config.js          # Konfigurasi Vite
