import React from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class AboutPage extends React.Component {
  render() {
    return (
      <div className="content-wrap">
        <div className="section-one about-page bg">
          <Container>
            <Row>
              <Col className="hide-on-med">
                <Image
                  className="img-responsive"
                  src={require("../assets/images/about-page.png")}
                />
              </Col>
              <Col>
                <h1>Cahaya Baru 18</h1>
                <h5>Embroidery Art</h5>
                <p align="justify">
                  Berdiri sejak tahun 2015, Cahaya Baru 18 hadir dan memberikan
                  layanan Bordir, Sablon dan Koveksi untuk semua kalangan.
                  Berlokasi di Blok M Square Jakarta Selatan, kini kami memiliki
                  9 toko cabang yang berada di Lantai Basement Blok M Square.
                  Kami telah melayani berbagai pelanggan dari mulai perusahaan
                  swasta, pemerintahan hingga dari kalangan pelajar. Kepuasan
                  pelanggan merupakan prioritas utama kami, oleh karena itu kami
                  memberikan pelayanan terbaik untuk mencapai hal tersebut. Kami
                  memberikan jaminan kualitas terbaik, pengerjaan yang cepat,
                  dikerjakan oleh tenaga profesional dan peralatan modern juga
                  layanan pesan antar kepada pelanggan.
                </p>
              </Col>
            </Row>
            <div className="ap-hubungi">
              <Row>
                <Col className="center">
                  <h5>Hubungi kami untuk informasi lebih lanjut</h5>
                  <Button className="btn-primary" variant="primary">
                    Hubungi Kami
                  </Button>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="ap-hour">
          <Container>
            <h2 className="center">Jam Operasional</h2>
            <div className="divider-2"></div>
          </Container>
        </div>
        <div className="client ap-client">
          <Container>
            <h2 className="center">Klien Kami</h2>
            <div className="divider"></div>
            <Row>
              <Col md={2} xs={6}>
                <div className="client-col">
                  <Image src={require("../assets/images/polda.png")} />
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="client-col">
                  <Image src={require("../assets/images/dishub.png")} />
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="client-col">
                  <Image src={require("../assets/images/jamkrindo.png")} />
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="client-col">
                  <Image src={require("../assets/images/kementriantng.png")} />
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="client-col">
                  <Image src={require("../assets/images/mobil.png")} />
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="client-col">
                  <Image src={require("../assets/images/epson.png")} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={2} xs={6}>
                <div className="client-col">
                  <Image src={require("../assets/images/nielson.png")} />
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="client-col">
                  <Image src={require("../assets/images/mitratel.png")} />
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="client-col">
                  <Image src={require("../assets/images/mobil.png")} />
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="client-col">
                  <Image src={require("../assets/images/atrbpn.png")} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
