import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="section-one">
            <Col xs={12} md={6} className="sectionOneLeft">
              <div>
                <h2>BORDIR KOMPUTER</h2>
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
                >
                  Hubungi Kami
                </Button>
              </div>
              <hr className="divider"></hr>
              <div className="bottom-header">
                <p>Hubungi Kontak Dibawah Ini Untuk Informasi Lebih Lanjut</p>
                <div className="icon">
                  <span>
                    <i className="bx bxs-phone bx-border-circle bx-sm"></i>
                  </span>
                  <div className="icon-text">
                    <ul>
                      <li className="phone-title">Phone</li>
                      <li className="phone">(+62) 856-1234-5678</li>
                      <li className="phone">(+62) 856-1234-5678</li>
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
        <div className="divider-1"></div>
        <Container>
          <Row className="section-two">
            <Col xs={12} md={6}>
              <div className="two-left">
                <Image
                  className="img-responsive"
                  src={require("../assets/images/service.png")}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="two-right">
                <h2>Alasan Memilih Cahaya Baru 18?</h2>
                <p>
                  <b>Cahaya Baru 18</b> memberikan jaminan kualitas terbaik bagi
                  setiap pelanggan. Kami bekerja dengan tenaga - tenaga
                  profesional yang didukung dengan peralatan terbaik, demi
                  menghasilkan produk - produk berkualitas tinggi. Kami memiliki
                  banyak cabang yang bertujuan untuk meningkatkan kinerja agar
                  menjadi lebih baik dan lebih cepat dalam memproses setiap
                  permintaan pelanggan.
                </p>
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
                  <Button className="btn-primary service-btn" variant="primary">
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
        </div>
        <div className="section-four">
          <Container>
            <h2 className="center">Our Partners</h2>
            <section className="customer-logos slider">
              <div className="slide">
                <img
                  src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"
                  alt="1"
                />
              </div>
              <div className="slide">
                <img
                  src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg"
                  alt="2"
                />
              </div>
              <div className="slide">
                <img
                  src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg"
                  alt="3"
                />
              </div>
              <div className="slide">
                <img
                  src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg"
                  alt="4"
                />
              </div>
              <div className="slide">
                <img
                  src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg"
                  alt="5"
                />
              </div>
              <div className="slide">
                <img
                  src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg"
                  alt="6"
                />
              </div>
              <div className="slide">
                <img
                  src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg"
                  alt="7"
                />
              </div>
              <div className="slide">
                <img
                  src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg"
                  alt="8"
                />
              </div>
            </section>
          </Container>
        </div>
      </div>
    );
  }
}
