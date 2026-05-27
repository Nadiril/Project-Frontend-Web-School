import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"; // Import Link agar perpindahan halaman mulus

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
      <Container>
        {/* Gunakan as={Link} agar logo juga bisa diklik untuk balik ke Beranda */}
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <img
            src="../public/Logo.png" // Cukup /logo.png jika file ada di folder public
            alt="Logo MA Ibrahimy"
            className="brand-logo"
          />
          <span className="brand-text">MA. IBRAHIMY</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Beranda
            </Nav.Link>
            <Nav.Link as={Link} to="/Tentang">
              Tentang
            </Nav.Link>

            <Nav.Link as={Link} to="/Ekstrakurikuler">
              Ekstrakurikuler
            </Nav.Link>

            <Nav.Link as={Link} to="/SPMB">
              SPMB
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
