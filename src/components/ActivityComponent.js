import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Tabs,
  Tab,
  Image,
  Pagination,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default class ActivityPage extends React.Component {
  render() {
    return (
      <div className="content-wrap bg">
        <div className="aktivitas-page">
          <Container>
            <Row>
              <Col>
                <h1 className="center">Aktivitas</h1>
                <div className="divider"></div>
                <h5 className="center">
                  Baca untuk mengetahui kegiatan Cahaya Baru 18 sehari - hari
                </h5>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="activity">
          <Container>
            <div className="list-activity">
              <Row>
                <Col md={4}>
                  <div className="thumbnail">
                    <Image
                      className="img-responsive"
                      src={require("../assets/images/slide1.jpg")}
                    />
                  </div>
                </Col>
                <Col md={8}>
                  <div className="list-header">
                    <span>20/09/2020</span>
                  </div>
                  <div className="list-body">
                    <h5>
                      <a href="#">Penambahan Mesin Bordir Baru</a>
                    </h5>
                    <br />
                    <p>
                      Untuk meningkatkan kinerja, kami menambahkan mesin bordir
                      baru dibeberapa toko kami. Dengan adanya mesin baru dengan
                      spesifikasi tinggi, proses produksi akan semakin cepat dan
                      dapat memproduksi lebih banyak lagi.
                    </p>
                  </div>
                  <div className="list-footer">
                    <span>Cahaya Baru 18 Admin</span>
                    <Button
                      className="read-link"
                      Style="width: 150px; float: right;"
                    >
                      Baca
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="divider"></div>
            <div className="list-activity">
              <Row>
                <Col md={4}>
                  <div className="thumbnail">
                    <Image
                      className="img-responsive"
                      src={require("../assets/images/store.jpg")}
                    />
                  </div>
                </Col>
                <Col md={8}>
                  <div className="list-header">
                    <span>20/09/2020</span>
                  </div>
                  <div className="list-body">
                    <h5>
                      <a href="#">Pembukaan Outlet Cabang</a>
                    </h5>
                    <br />
                    <p>
                      Cahaya Baru 18 kini berkembang lagi dengan menambah outlet
                      cabang baru, semua ini dapat dicapai atas kepercayaan dan
                      dukungan pelanggan setia kami. Dengan adanya penambahan
                      outlet baru ini, kami dapat melayani lebih banyak
                      pelanggan.
                    </p>
                  </div>
                  <div className="list-footer">
                    <span>Cahaya Baru 18 Admin</span>
                    <Button
                      className="read-link"
                      Style="width: 150px; float: right;"
                    >
                      Baca
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="divider"></div>
            <div className="list-activity">
              <Row>
                <Col md={4}>
                  <div className="thumbnail">
                    <Image
                      className="img-responsive"
                      src={require("../assets/images/kemnaker-img.jpg")}
                    />
                  </div>
                </Col>
                <Col md={8}>
                  <div className="list-header">
                    <span>20/09/2020</span>
                  </div>
                  <div className="list-body">
                    <h5>
                      <a href="#">
                        Proyek Bordir Kementerian Ketenagakerjaan RI
                      </a>
                    </h5>
                    <br />
                    <p>
                      Cahaya Baru 18 mendapatkan kepecayaan dari Kementerian
                      Ketenagakerjaan RI untuk memproduksi bordir untuk mereka.
                      Merupakan sebuah kebanggan dan pencapaian bagi kami dapat
                      melayani sebuah instansi besar, terlebih lagi instansi
                      pemerintahan.
                    </p>
                  </div>
                  <div className="list-footer">
                    <span>Cahaya Baru 18 Admin</span>
                    <Button
                      className="read-link"
                      Style="width: 150px; float: right;"
                    >
                      Baca
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="text-center">
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    );
  }
}
