import React from "react";
import { Navbar, Nav, Container, Image, Button } from "react-bootstrap";

const NavbarComponent = (props) => {
  return (
    <div className="nav-border">
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/"><Image className="hide-on-med" src={require("../assets/images/header-logo.png")}/><Image className="hide-on-large" src={require("../assets/images/logo.png")}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
          <Nav defaultActiveKey="/" className="ml-auto center-img">
            <Nav.Link activeClassName="navbar__link--active" href="/tentang-kami">Tentang Kami</Nav.Link>
            <Nav.Link activeClassName="navbar__link--active" href="/layanan">Layanan</Nav.Link>
            <Nav.Link activeClassName="navbar__link--active" href="/aktivitas">Aktivitas</Nav.Link>
            <Nav.Link activeClassName="navbar__link--active" href="/kontak-kami">Hubungi Kami</Nav.Link>
          </Nav>
          <Button>ASDs</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavbarComponent;
