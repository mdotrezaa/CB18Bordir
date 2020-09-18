import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = (props) => {
  return (
    <div className="nav-border">
    <Navbar collapseOnSelect expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Cahaya Baru 18</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="/tentang-kami">Tentang Kami</Nav.Link>
            <Nav.Link href="/layanan">Layanan</Nav.Link>
            <Nav.Link href="/aktivitas">Aktivitas</Nav.Link>
            <Nav.Link href="/kontak-kami">Hubungi Kami</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavbarComponent;
