import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Beranda from "./pages/Beranda";
import Tentang from "./pages/Tentang";
import Ekstrakurikuler from "./pages/Ekstrakurikuler";
import SPMB from "./pages/SPMB";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/Beranda" element={<Beranda />} />
          <Route path="/Tentang" element={<Tentang />} />
          <Route path="/Ekstrakurikuler" element={<Ekstrakurikuler />} />
          <Route path="/SPMB" element={<SPMB />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
