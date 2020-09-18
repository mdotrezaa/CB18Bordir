import React from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";

export default class ServicePage extends  React.Component {
  render(){
    return (
      <div className="content-wrap">
        <div className="section-one service-page">
          <Container>
            <Row>
              <Col>
                    <h1>Layanan Kami.</h1>
                    <h5>"Some quick example text to build on the card title and make up the bulk of
                          the card's content."</h5>
              </Col>
              <Col>
                    <Image className="img-responsive" src={require("../assets/images/section-three.png")} />
              </Col>
            </Row>
            <div className="service-two">
                <Row>
                    <Col md={4} xs={12}>
                        <Card className="text-center first" style={{ width: '18rem' }}>
                            <Card.Header>Bordir Komputer</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                  <ul>
                                    <li>Bordir Polo Shirt</li>
                                    <li>Bordir Kemeja</li>
                                    <li>Bordir Jaket</li>
                                    <li>Bordir Rompi</li>
                                    <li>Bordir Emblem</li>
                                    <li>Bordir Topi</li>
                                    <li>Bordir Handuk</li>
                                    <li>Bordir Slempang</li>
                                    <li>Dan Lainnya</li>
                                  </ul>
                                </Card.Text>
                                <Button style={{ width: '100%' }} variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                  </Col>
                  <Col md={4} xs={12}>
                        <Card className="text-center second" style={{ width: '18rem' }}>
                            <Card.Header>Bordir Manual</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                  <ul>
                                    <li>Pataka</li>
                                    <li>Bendera Besar</li>
                                    <li>Bunga Untuk Kebaya</li>
                                    <li>Kaligrafi Besar</li>
                                    <li>Pemandangan</li>
                                    <li>Dan Lainya</li>
                                  </ul>
                                </Card.Text>
                                <Button style={{ width: '100%' }} variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                  </Col>
                  <Col md={4} xs={12}>
                        <Card className="text-center third" style={{ width: '18rem' }}>
                            <Card.Header>Menerima Pembuatan</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                  <ul>
                                    <li>Kemeja</li>
                                    <li>Polo Shirt</li>
                                    <li>Kaos Oblong</li>
                                    <li>Topi</li>
                                  </ul>
                                </Card.Text>
                                <Button style={{ width: '100%' }} variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                  </Col>
                </Row>
            </div>
          </Container> 
        </div>
      </div>
    );
  }
};