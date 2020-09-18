import React from "react";
import { Container, Row, Col, Button, Image, Card, ListGroup } from "react-bootstrap";

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
              <Col className="hide-on-med">
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
                                <ListGroup variant="flush">
                                  <ListGroup.Item>Bordir Polo Shirt</ListGroup.Item>
                                  <ListGroup.Item>Bordir Kemeja</ListGroup.Item>
                                  <ListGroup.Item>Bordir Jaket</ListGroup.Item>
                                  <ListGroup.Item>Bordir Rompi</ListGroup.Item>
                                  <ListGroup.Item>Bordir Emblem</ListGroup.Item>
                                  <ListGroup.Item>Bordir Topi</ListGroup.Item>
                                  <ListGroup.Item>Bordir Handuk</ListGroup.Item>
                                  <ListGroup.Item>Bordir Slempang </ListGroup.Item>
                                  <ListGroup.Item>Dan Lainnya </ListGroup.Item>
                                </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                  </Col>
                  <Col md={4} xs={12}>
                        <Card className="text-center second" style={{ width: '18rem' }}>
                            <Card.Header>Bordir Manual</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                <ListGroup variant="flush">
                                  <ListGroup.Item>Pataka</ListGroup.Item>
                                  <ListGroup.Item>Bendera Besar</ListGroup.Item>
                                  <ListGroup.Item>Bunga Untuk Kebaya</ListGroup.Item>
                                  <ListGroup.Item>Kaligrafi Besar</ListGroup.Item>
                                  <ListGroup.Item>Pemandangan</ListGroup.Item>
                                  <ListGroup.Item>Dan Lainya</ListGroup.Item>
                                </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                  </Col>
                  <Col md={4} xs={12}>
                        <Card className="text-center third" style={{ width: '18rem' }}>
                            <Card.Header>Menerima Pembuatan</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                <ListGroup variant="flush">
                                  <ListGroup.Item>Kemeja</ListGroup.Item>
                                  <ListGroup.Item>Polo Shirt</ListGroup.Item>
                                  <ListGroup.Item>Kaos Oblong</ListGroup.Item>
                                  <ListGroup.Item>Topi</ListGroup.Item>
                                </ListGroup>
                                </Card.Text>
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