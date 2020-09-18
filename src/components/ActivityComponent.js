import React from "react";
import { Container, Row, Col, Button, Card, Tabs, Tab } from "react-bootstrap";

export default class ActivityPage extends  React.Component {
  render(){
    return (
      <div className="content-wrap bg">
        <div className="aktivitas-page">
          <Container>
            <Row>
              <Col>
                  <h1 className="center">Aktivitas Kami.</h1>
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
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={require("../assets/images/placeholder.png")} />
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button style={{ width: '100%' }}  className="btn-primary">Go somewhere</Button>
                                </Card.Footer>
                            </Card>
                            </Col>
                            <Col md={4} sm={12}>
                                <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={require("../assets/images/placeholder.png")} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button style={{ width: '100%' }}  className="btn-primary">Go somewhere</Button>
                                </Card.Footer>
                            </Card>
                            </Col>
                            <Col md={4} sm={12}>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={require("../assets/images/placeholder.png")} />
                                <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button style={{ width: '100%' }}  className="btn-primary">Go somewhere</Button>
                                </Card.Footer>
                            </Card>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="populer" title="Terpopuler">
                    <Row>
                        <Col md={4} sm={12}>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={require("../assets/images/placeholder.png")} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button style={{ width: '100%' }}  className="btn-primary">Go somewhere</Button>
                            </Card.Footer>
                        </Card>
                        </Col>
                        <Col md={4} sm={12}>
                            <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={require("../assets/images/placeholder.png")} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button style={{ width: '100%' }}  className="btn-primary">Go somewhere</Button>
                                </Card.Footer>
                        </Card>
                        </Col>
                        <Col md={4} sm={12}>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={require("../assets/images/placeholder.png")} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button style={{ width: '100%' }}  className="btn-primary">Go somewhere</Button>
                            </Card.Footer>
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