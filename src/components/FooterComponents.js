import React from "react";
import { Container, Row, Col } from "react-bootstrap";

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
              <h6>Tentang Kami</h6>
              <ul>
                  <li>Tentang kami</li>
                  <li>Tentang kami</li>
                  <li>Tentang kami</li>
                  <li>Tentang kami</li>
              </ul>
            </Col>
            <Col>
              <h6>Layanan Kami</h6>
              <ul>
                  <li>Tentang kami</li>
                  <li>Tentang kami</li>
                  <li>Tentang kami</li>
                  <li>Tentang kami</li>
              </ul>
            </Col>
            <Col>
              <h6>Hubungi Kami</h6>
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
