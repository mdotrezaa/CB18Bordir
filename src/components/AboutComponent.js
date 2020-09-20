import React from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class AboutPage extends  React.Component {
  render(){
    return (
      <div className="content-wrap">
        <div className="section-one about-page bg">
          <Container>
            <Row>
              <Col>
                  <Image className="img-responsive" src={require("../assets/images/about-page.png")} />
              </Col>
              <Col>
                  <h1>Tentang Kami.</h1>
                  <h5>"Lorem ipsum dolor sit amet"</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </Col>
            </Row>
            <div className="about-page">
                <Row>
                  <Col className="center">
                    <h5>Segera Hubungi Kami Untuk Informasi Lebih Lanjut!</h5>
                    <Button className="btn-primary" variant="primary">
                      Hubungi Kami
                    </Button>
                  </Col>
                </Row>
            </div>
          </Container> 
        </div>
        <div className="activity">
            <Container>
                <h2 className="center">Aktivitas Terbaru Kami</h2>
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
            </Container>
        </div>
      </div>
    );
  }
};