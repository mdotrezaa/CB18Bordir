import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const FooterComponent = (props) => {
  return (
    <div className="footer">
        <Container>
          <Row>
            <Col>
            <Image width="50%" className="center-img" src={require("../assets/images/logo.png")} />

            </Col>
            <Col>
              <h5>Tentang Kami</h5>
              <ul>
                  <li>Some quick example text to build on the card title and make up the bulk of
                          the card's content.</li>
              </ul>
            </Col>
            <Col>
              <h5>Navigasi</h5>
              <ul>
                  <li><a href="/">Beranda</a></li>
                  <li><a href="/tentang-kami">Tentang Kami</a></li>
                  <li><a href="/layanan">Layanan</a></li>
                  <li><a href="/aktivitas">Aktivitas</a></li>
                  <li><a href="/kontak-kami">Kontak Kami</a></li>
              </ul>
            </Col>
            <Col>
              <h5>Hubungi Kami</h5>
              <ul>
                  <li>Tentang kami</li>
                  <li>Tentang kami</li>
                  <li className="socmed">
                    <i class='bx bxl-facebook bx-xs bx-border-circle'></i>
                    <i class='bx bxl-twitter bx-xs bx-border-circle' ></i>
                    <i class='bx bxl-instagram bx-xs bx-border-circle'></i>
                  </li> 
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default FooterComponent;
