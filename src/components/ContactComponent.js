import React from "react";
import { Container, Row, Col, Button, Image, Card, Tabs, Tab } from "react-bootstrap";

export default class ContactPage extends  React.Component {
  render(){
    return (
      <div className="content-wrap">
        <div className="aktivitas-page">
          <Container>
            <Row>
              <Col>
                  <h1 className="center">Kontak Kami.</h1>
                  <h5 className="center">"Some quick example text to build on the card title and make up the bulk of the card's content."</h5>
              </Col>
            </Row>
            <Row>
                <Col md={4}>
                <div className="kontak">
                    <ul>
                        <li>
                            <i class='bx bxs-map bx-sm bx-border-circle'></i>
                            <span>
                            <strong>Address:</strong><br/>
                            Some quick example text to build on the card title and make up the bulk of the card's content.<p></p>
                            </span>
                        </li>
                        <li><i class='bx bxl-facebook bx-sm bx-border-circle'></i><i class='bx bxl-twitter bx-sm bx-border-circle' ></i></li>
                    </ul>
                </div>
                </Col>
            </Row>
          </Container> 
        </div>
    </div>
    );
  }
};