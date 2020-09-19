import React from "react";
import { Navbar, Nav, Container, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarComponent = (props) => {
  return (
    <div className="nav-border">
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/"><Image className="hide-on-med" src={require("../assets/images/header-logo.png")}/><Image className="hide-on-large" src={require("../assets/images/logo.png")}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
          <Nav defaultActiveKey="/" className="ml-auto center-img">
            <NavLink activeClassName="active" to="/tentang-kami">Tentang Kami</NavLink>
            <NavLink activeClassName="active" to="/layanan">Layanan</NavLink>
            <NavLink activeClassName="active" to="/aktivitas">Aktivitas</NavLink>
            <NavLink activeClassName="active" to="/kontak-kami">Kontak</NavLink>
          </Nav>
          <Button className="wa-btn"><i class='bx bxl-whatsapp'></i>Klik Untuk Info</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavbarComponent;
