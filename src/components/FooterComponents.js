import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const FooterComponent = (props) => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <div className="footer-img">
              <Image
                className="center-img"
                src={require("../assets/images/logo.png")}
              />
            </div>
          </Col>
          <Col md={4} xs={6}>
            <div className="footer-contact">
              <h5>Hubungi Kami</h5>
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
                  Blok M Square Lt Basement,
                  <ul>
                    <li className="address-child">
                      Blok D No 126, 035, 088, 176, 118
                    </li>
                    <li className="address-child">Blok E No 128, 96, 135</li>
                  </ul>
                </li>
              </ul>
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
