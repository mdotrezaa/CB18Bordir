import React from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="section-one">
            <Col xs={12} md={6} className="sectionOneLeft">
              <div className="content-left">
                <h2>BORDIR KOMPUTER</h2>
                <div className="divider-title left"></div>
                <p>
                  Jasa Bordir Komputer Dengan Mengedepankan Kepuasan Pelanggan
                  Dengan Memberi Jaminan Pengerjaan Cepat Yang Dilakukan Oleh
                  Tenaga Berpengalaman Demi Menghasilkan Kualitas Terbaik Baru
                  Pelanggan.
                </p>
                <br />
                <Button
                  className="btn-primary contact-us-btn"
                  variant="primary"
                  href="/kontak-kami"
                >
                  Hubungi Kami
                </Button>
              </div>
              <div className="divider"></div>
              <div className="bottom-header">
                <p>Hubungi Kontak Dibawah Ini Untuk Informasi Lebih Lanjut</p>
                <div className="icon">
                  <span>
                    <i className="bx bxs-phone bx-border-circle bx-sm"></i>
                  </span>
                  <div className="icon-text">
                    <ul>
                      <li className="phone">
                        <a href="tel:6281212497533">(+62) 812-1249-7533</a>
                      </li>
                      <li className="phone">
                        <a href="tel:628176389206">(+62) 817-6389-206</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} className="sectionOneRight hide-on-med">
              <div>
                <Image
                  className="img-responsive"
                  src={require("../assets/images/section-one.png")}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="section-count">
            <Col xs={12} md={4} className="center">
              <div class="skill-list">
                <div class="skill-count">
                  <CountUp
                    className="count"
                    start={0}
                    end={9}
                    delay={1}
                    duration={3.75}
                  />
                </div>
                <div class="skill-name">
                  <h4>Toko Cabang</h4>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} className="center">
              <div class="skill-list">
                <div class="skill-count">
                  <CountUp
                    className="count"
                    start={0}
                    end={6000}
                    delay={1}
                    duration={3.75}
                    suffix="+"
                  ></CountUp>
                </div>
                <div class="skill-name">
                  <h4>Produk Selesai</h4>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} className="center">
              <div class="skill-list">
                <div class="skill-count">
                  <CountUp
                    className="count"
                    start={0}
                    end={25}
                    delay={1}
                    duration={3.75}
                    suffix="+"
                  />
                </div>
                <div class="skill-name">
                  <h4>Karyawan</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="divider-1"></div>
        <Container>
          <Row className="section-two">
            <Col xs={12} md={6} className="d-none d-md-block">
              <div className="two-left">
                <Image
                  className="img-responsive"
                  src={require("../assets/images/service.png")}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="two-right">
                <h2>Alasan Memilih Kami?</h2>
                <div className="divider-title left"></div>
                <p>
                  <b>Cahaya Baru 18</b> memberikan jaminan kualitas terbaik bagi
                  setiap pelanggan. Kami bekerja dengan tenaga - tenaga
                  profesional yang didukung dengan peralatan terbaik, demi
                  menghasilkan produk - produk berkualitas tinggi. Kami memiliki
                  banyak cabang yang bertujuan untuk meningkatkan kinerja agar
                  menjadi lebih baik dan lebih cepat dalam memproses setiap
                  permintaan pelanggan.
                </p>
                <br />
                <Button
                  className="btn-primary about-btn ml-right"
                  variant="primary"
                  href="/tentang-kami"
                >
                  Selengkapnya
                </Button>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-block d-md-none"
              Style="margin-top: 30px;"
            >
              <div className="two-left">
                <Image
                  className="img-responsive"
                  src={require("../assets/images/service.png")}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="section-three">
          <Container>
            <Row className="content">
              <Col xs={12} md={6}>
                <div className="three-left">
                  <h2>Apa Yang Kami Tawarkan?</h2>
                  <div className="divider-title left white"></div>
                  <p>
                    Kami menawarkan jasa bordir dengan teknologi komputer, yang
                    dapat menghasilkan produk - produk berkualitas dalam waktu
                    yang cepat. Selain itu juga kami menawarkan jasa sablon dan
                    konveksi kepada pelanggan. Fleksibilitas yang kami tawarkan
                    memudahkan pelanggan dalam menggunakan jasa kami, sehingga
                    pelanggan dapat menggunakan jasa kami tanpa harus memikirkan
                    konveksi ataupun sablon karena kami memberikan semua
                    pelayanan tersebut.
                  </p>
                  <br />
                  <Button
                    className="btn-primary service-btn"
                    variant="primary"
                    href="/layanan"
                  >
                    Layanan Kami
                  </Button>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="three-right">
                  <Image
                    className="img-responsive hide-on-med"
                    src={require("../assets/images/section-three.png")}
                  />
                </div>
              </Col>
            </Row>
          </Container>
          <div class="overlay"></div>
        </div>
        <div className="activity">
          <Container>
            <h2 className="center">Aktivitas Terbaru</h2>
            <div className="divider-title"></div>
            <Row>
              <Col md={4} sm={12}>
                <Card className="center">
                  <Card.Img
                    variant="top"
                    src={require("../assets/images/slide1.jpg")}
                  />
                  <Card.Body>
                    <Card.Text className="center">20/09/2020</Card.Text>
                    <Card.Title>Penambahan Mesin Bordir Baru</Card.Title>
                    <Link to="/aktivitas/post">Baca</Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} sm={12}>
                <Card className="center">
                  <Card.Img
                    variant="top"
                    src={require("../assets/images/store.jpg")}
                  />
                  <Card.Body>
                    <Card.Text className="center">20/09/2020</Card.Text>
                    <Card.Title>Pembukaan Outlet Cabang</Card.Title>
                    <Link>Baca</Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} sm={12}>
                <Card className="center">
                  <Card.Img
                    variant="top"
                    src={require("../assets/images/kemnaker-img.jpg")}
                  />
                  <Card.Body>
                    <Card.Text className="center">20/09/2020</Card.Text>
                    <Card.Title>
                      Proyek Bordir Kementerian Ketenagakerjaan RI
                    </Card.Title>
                    <Link>Baca</Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to="/aktivitas" className="btn-primary more-link">
                  Selengkapnya
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="divider-1"></div>
        <div className="client">
          <Container>
            <Row>
              <Col>
                <div className="client-col">
                  <Image src={require("../assets/images/polda.png")} />
                </div>
              </Col>
              <Col>
                <div className="client-col">
                  <Image src={require("../assets/images/dishub.png")} />
                </div>
              </Col>
              <Col>
                <div className="client-col">
                  <Image src={require("../assets/images/jamkrindo.png")} />
                </div>
              </Col>
              <Col>
                <div className="client-col">
                  <Image src={require("../assets/images/kementriantng.png")} />
                </div>
              </Col>
              <Col>
                <div className="client-col">
                  <Image src={require("../assets/images/mobil.png")} />
                </div>
              </Col>
              <Col>
                <div className="client-col">
                  <Image src={require("../assets/images/epson.png")} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
