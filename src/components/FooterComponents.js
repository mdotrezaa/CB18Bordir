import React from "react";
import { Navbar, Nav, Container, Row, Col, Image } from "react-bootstrap";

const FooterComponent = (props) => {
  return (
    <div className="footer">
        <Container>
          <Row>
            <Col>
              <h4>CahayaBaru18</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Col>
            <Col>
              <h5>Tentang Kami</h5>
              <ul>
                  <li>Tentang kami</li>
                  <li>Tentang kami</li>
                  <li>Tentang kami</li>
                  <li>Tentang kami</li>
              </ul>
            </Col>
            <Col>
              <h5>Layanan Kami</h5>
              <ul>
                  <li>Tentang kami</li>
                  <li>Tentang kami</li>
                  <li>Tentang kami</li>
                  <li>Tentang kami</li>
              </ul>
            </Col>
            <Col>
              <h5>Hubungi Kami</h5>
              <ul>
                  <li>Tentang kami</li>
                  <li>Tentang kami</li>
                  <li>Tentang kami</li>
                  <li>Tentang kami</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default FooterComponent;
