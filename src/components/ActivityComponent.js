import React from "react";
import { Container, Row, Col, Button, Card, Tabs, Tab, Image, Pagination } from "react-bootstrap";
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
                <div className="list-activity">
                    <Row>
                        <Col md={4}>
                            <div className="thumbnail">
                                <Image className="img-responsive" src={require("../assets/images/store.jpg")} />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="list-header">
                                <span>20/09/2020</span>
                            </div>
                            <div className="list-body">
                                <h5><a href="#">Lorem Ipsum sit amet!</a></h5><br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="list-footer">
                                <span>Author Name</span>
                            </div>
                        </Col>
                        <Col className="read-left" md={2}>
                            <Button className="read-link">Baca</Button>
                        </Col>
                    </Row>
                </div>
                <div className="divider"></div>
                <div className="list-activity">
                <Row>
                        <Col md={4}>
                            <div className="thumbnail">
                            <Image className="img-responsive" src={require("../assets/images/slide1.jpg")} />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="list-header">
                                <span>20/09/2020</span>
                            </div>
                            <div className="list-body">
                                <h5><a href="#">Lorem Ipsum sit amet!</a></h5><br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="list-footer">
                                <span>Author Name</span>
                            </div>
                        </Col>
                        <Col className="read-left" md={2}>
                            <Button className="read-link">Baca</Button>
                        </Col>
                    </Row>
                </div>
                <div className="divider"></div>
                <div className="list-activity">
                <Row>
                        <Col md={4}>
                            <div className="thumbnail">
                                <Image className="img-responsive" src={require("../assets/images/store.jpg")} />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="list-header">
                                <span>20/09/2020</span>
                            </div>
                            <div className="list-body">
                                <h5><a href="#">Lorem Ipsum sit amet!</a></h5><br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="list-footer">
                                <span>Author Name</span>
                            </div>
                        </Col>
                        <Col className="read-left" md={2}>
                            <Button className="read-link">Baca</Button>
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
};