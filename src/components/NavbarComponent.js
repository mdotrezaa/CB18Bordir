import React from "react";
import { Navbar, Nav, Container, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarComponent = (props) => {
  return (
    <div className="nav-border">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image
              className="hide-on-med"
              src={require("../assets/images/header-logo.png")}
            />
            <h4 className="hide-on-large center mobile-logo">Cahaya Baru</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
            <Nav defaultActiveKey="/" className="ml-auto center-img">
              <Nav.Link activeClassName="active" href="/tentang-kami">
                Tentang Kami
              </Nav.Link>
              <Nav.Link activeClassName="active" href="/layanan">
                Layanan
              </Nav.Link>
              <Nav.Link activeClassName="active" href="/aktivitas">
                Aktivitas
              </Nav.Link>
              <Nav.Link activeClassName="active" href="/kontak-kami">
                Kontak
              </Nav.Link>
            </Nav>
            <Button
              className="wa-btn"
              target="_blank"
              href="https://wa.me/628176389206"
            >
              <i className="bx bxl-whatsapp"></i>(+62) 817-6389-206
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
