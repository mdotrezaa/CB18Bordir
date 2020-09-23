import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const FooterComponent = (props) => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={4} xs={12}>
            <div className="footer-img">
              <Image
                className="center-img"
                src={require("../assets/images/logo.png")}
              />
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="footer-contact">
              <h5>Hubungi Kami</h5>
              <div className="divider-title left"></div>
              <ul>
                <li className="phone">
                  <a href="tel:6281212497533">(+62) 812-1249-7533</a>
                </li>
                <li className="phone">
                  <a href="tel:628176389206">(+62) 817-6389-206</a>
                </li>
                <li className="ig">
                  <a
                    href="https://www.instagram.com/heru_nugriyanto/?hl=id"
                    target="blank"
                  >
                    IG: @heru_nugriyanto
                  </a>
                </li>
                <li>
                  <a
                    className="footer-address"
                    href="https://goo.gl/maps/StxJf4UWUazrGY3h9"
                    target="blank"
                  >
                    Blok M Square Lt Basement,
                    <ul>
                      <li className="address-child">
                        Blok D No 126, 035, 088, 176, 118
                      </li>
                      <li className="address-child">Blok E No 128, 96, 135</li>
                      <li className="address-child">Blok G No 003</li>
                    </ul>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="footer-subscribe">
              <h5>Lokasi</h5>
              <div className="divider-title left"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1426704457717!2d106.79798231476191!3d-6.244921995479634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16e9ffbc599%3A0xe4f891348e1a7d06!2sCahaya%20Baru%2018!5e0!3m2!1sid!2sid!4v1600860468023!5m2!1sid!2sid"
                frameborder="0"
                Style="border:0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        <p Style="text-align: center;">
          Copyright&nbsp; © 2020 Cahaya Baru 18. All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
