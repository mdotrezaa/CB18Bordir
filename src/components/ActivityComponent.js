import React from "react";
import { Container, Row, Col, Button, Card, Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class ActivityPage extends  React.Component {
  render(){
    return (
      <div className="content-wrap bg">
        <div className="aktivitas-page">
          <Container>
            <Row>
              <Col>
                    <h1 className="center">Aktivitas Kami.</h1>
                    <div className="divider"></div>
                    <h5 className="center">"Some quick example text to build on the card title and make up the bulk of the card's content."</h5>
              </Col>
            </Row>
          </Container> 
        </div>
        <div className="activity">
            <Container>
                <Tabs defaultActiveKey="terbaru" id="uncontrolled-tab-example">
                    <Tab eventKey="terbaru" title="Terbaru">
                        <Row>
                            <Col md={4} sm={12}>
                            <Card className="center" style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={require("../assets/images/slide1.jpg")} />
                                <Card.Body>
                                <Card.Text>20-09-2020</Card.Text>
                                <Card.Title>Card Title</Card.Title>
                                    <Link>Selengkapnya</Link>
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col md={4} sm={12}>
                            <Card className="center" style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={require("../assets/images/slide1.jpg")} />
                                <Card.Body>
                                <Card.Text>20-09-2020</Card.Text>
                                <Card.Title>Card Title</Card.Title>
                                    <Link>Selengkapnya</Link>
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col md={4} sm={12}>
                            <Card className="center" style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={require("../assets/images/slide1.jpg")} />
                                <Card.Body>
                                <Card.Text>20-09-2020</Card.Text>
                                <Card.Title>Card Title</Card.Title>
                                    <Link>Selengkapnya</Link>
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="populer" title="Terpopuler">
                        <Row>
                            <Col md={4} sm={12}>
                            <Card className="center" style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={require("../assets/images/slide1.jpg")} />
                                <Card.Body>
                                <Card.Text>20-09-2020</Card.Text>
                                <Card.Title>Card Title</Card.Title>
                                    <Link>Selengkapnya</Link>
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col md={4} sm={12}>
                            <Card className="center" style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={require("../assets/images/slide1.jpg")} />
                                <Card.Body>
                                <Card.Text>20-09-2020</Card.Text>
                                <Card.Title>Card Title</Card.Title>
                                    <Link>Selengkapnya</Link>
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col md={4} sm={12}>
                            <Card className="center" style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={require("../assets/images/slide1.jpg")} />
                                <Card.Body>
                                <Card.Text>20-09-2020</Card.Text>
                                <Card.Title>Card Title</Card.Title>
                                    <Link>Selengkapnya</Link>
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </Container>
        </div>
      </div>
    );
  }
};