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
                    <h5>"Lorem ipsum dolor sit amet"</h5>
              </Col>
              <Col>
                    <Image className="img-responsive" src={require("../assets/images/section-three.png")} />
              </Col>
            </Row>
            <div className="section-four">
                <Row>
                    <Col md={4} xs={12}>
                        <Card className="text-center" style={{ width: '18rem' }}>
                            <Card.Header>Bordir Komputer</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                  </Col>
                  <Col md={4} xs={12}>
                        <Card className="text-center" style={{ width: '18rem' }}>
                            <Card.Header>Bordir Manual</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                  </Col>
                  <Col md={4} xs={12}>
                        <Card className="text-center" style={{ width: '18rem' }}>
                            <Card.Header>Menerima Pembuatan</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
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