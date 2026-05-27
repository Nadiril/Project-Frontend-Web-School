import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa"; // Pastikan sudah install react-icons
  
function Footer() {
  return (
    <footer className="footer-section mt-5">
      <Container>
        <Row className="py-5">
          {/* Kolom 1: Profil Singkat */}
          <Col lg={4} md={6} className="mb-4">
            <h5 className="text-emerald fw-bold mb-4">MA. IBRAHIMY</h5>
            <p className="text-white small">
              Membentuk generasi cerdas yang berlandaskan akhlak mulia dan
              nilai-nilai Islam. Terus berinovasi dalam pendidikan untuk masa
              depan bangsa.
            </p>
            <div className="social-links d-flex gap-3 mt-3">
              <a
                href="https://www.facebook.com/share/18kt9KMncP/"
                target="Blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/ma_ibrahimy_kalipuro/"
                target="Blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@MaibraMultimedia"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaYoutube />
              </a>
            </div>
          </Col>

          {/* Kolom 2: Tautan Cepat */}
          <Col lg={2} md={6} className="mb-4">
            <h5 className="text-light fw-bold mb-4">Tautan</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="/">Beranda</a>
              </li>
              <li>
                <a href="/tentang">Tentang</a>
              </li>
              <li>
                <a href="/ekstrakurikuler">Ekstrakurikuler</a>
              </li>
              <li>
                <a href="/spmb">SPMB</a>
              </li>
            </ul>
          </Col>

          {/* Kolom 3: Kontak */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-light fw-bold mb-4">Kontak</h5>
            <ul className="list-unstyled text-muted small">
              <li className="mb-2">
                <FaMapMarkerAlt className="text-emerald me-2" />
                Jl. Ibrahimy Secang, Kalipuro, Banyuwangi
              </li>
              <li className="mb-2">
                <FaPhone className="text-emerald me-2" />
                (0333) 123456
              </li>
              <li className="mb-2">
                <FaEnvelope className="text-emerald me-2" />
                info@maibrahimy.sch.id
              </li>
            </ul>
          </Col>

          {/* Kolom 4: Jam Operasional */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-light fw-bold mb-4">Jam Kantor</h5>
            <div className="text-muted small">
              <p className="mb-1">Senin - Kamis: 07:00 - 13:00</p>
              <p className="mb-1">Jumat: 07:00 - 10:30</p>
              <p className="mb-1">Sabtu: 07:00 - 13:00</p>
              <p className="text-emerald mt-2">Minggu: Libur</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Copyright Bar */}
      <div className="footer-bottom py-3">
        <Container>
          <Row>
            <Col className="text-center">
              <p className="mb-0 text-muted small">
                &copy; {new Date().getFullYear()}{" "}
                <strong>MA Ibrahimy Banyuwangi</strong>. All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
