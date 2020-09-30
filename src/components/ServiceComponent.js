import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  ListGroup,
  Button,
  Collapse,
  Accordion,
} from "react-bootstrap";

export default class ServicePage extends React.Component {
  render() {
    return (
      <div className="content-wrap bg">
        <div className="service-page">
          <Container>
            <Row>
              <Col className="body center">
                <h1>Layanan</h1>
                <h5>
                  Cahaya Baru 18 memberikan layanan untuk segala jenis kebutuhan
                  Bordir, Sablon dan Konveksi.
                </h5>
              </Col>
            </Row>
            <div className="overlay"></div>
          </Container>
        </div>
        <div className="service-two">
          <Container>
            <Row>
              <Col md={4}>
                <div className="box-content center">
                  <Image
                    className="img-responsive"
                    src={require("../assets/images/bordir.png")}
                  />
                  <div className="img-overlay"></div>
                  <div className="box-body">
                    <h4>Bordir</h4>
                    <p>
                      Bordir komputer untuk memaksimalkan hasil dan waktu
                      pengerjaan
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="box-content center">
                  <Image
                    className="img-responsive"
                    src={require("../assets/images/sablon.png")}
                  />
                  <div className="img-overlay"></div>
                  <div className="box-body">
                    <h4>Sablon</h4>
                    <p>
                      Sablon dengan bahan berkualitas terbaik untuk hasil
                      memuaskan
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="box-content center">
                  <Image
                    className="img-responsive"
                    src={require("../assets/images/konveksi.png")}
                  />
                  <div className="img-overlay"></div>
                  <div className="box-body">
                    <h4>Konveksi</h4>
                    <p>
                      Konveksi berbagai macam jenis pakaian dengan bahan
                      berkualitas dan rapi
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="service-three">
          <Container>
            <Row className="content">
              <Col xs={12} md={6}>
                <div className="three-right">
                  <Image
                    className="img-responsive hide-on-med"
                    src={require("../assets/images/service-i.png")}
                  />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="three-left">
                  <h2>Bordir Mesin</h2>
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
                  <ul class="list-service">
                    <li>Bordir Polo Shirt</li>
                    <li>Bordir Kemeja</li>
                    <li>Bordir Jaket</li>
                    <li>Bordir Rompi</li>
                    <li>Bordir Emblem</li>
                    <li>Bordir Topi</li>
                    <li>Bordir Handuk</li>
                    <li>Bordir Slempang </li>
                    <li>Dan Lainnya </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
          <div class="overlay"></div>
        </div>
        <div className="service-four">
          <Container>
            <Row>
              <Col className="body center">
                <h3>Menerima Pembuatan</h3>
                <h5>
                  "Some quick example text to build on the card title and make
                  up the bulk of the card's content."
                </h5>
                <div className="divider-title"></div>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <div className="center">
                  <div className="four-body">
                    <Image
                      className="img-responsive"
                      src={require("../assets/images/tshirt.png")}
                    />
                    <h4>Kaos Oblong</h4>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="center">
                  <div className="four-body">
                    <Image
                      className="img-responsive"
                      src={require("../assets/images/shirt.png")}
                    />
                    <h4>Kemeja</h4>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="center">
                  <div className="four-body">
                    <Image
                      className="img-responsive"
                      src={require("../assets/images/polo-shirt.png")}
                    />
                    <h4>Polo Shirt</h4>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="center">
                  <div className="four-body">
                    <Image
                      className="img-responsive"
                      src={require("../assets/images/hat.png")}
                    />
                    <h4>Topi</h4>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
