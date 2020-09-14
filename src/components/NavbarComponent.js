import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = (props) => {
  return (
    <div className="nav-border">
    <Navbar collapseOnSelect expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Cahaya Baru 18</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="#deets">Tentang Kami</Nav.Link>
            <Nav.Link href="#deets">Layanan</Nav.Link>
            <Nav.Link href="#deets">Aktivitas</Nav.Link>
            <Nav.Link href="#deets">Hubungi Kami</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavbarComponent;
