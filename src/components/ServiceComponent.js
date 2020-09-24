import React, { useState } from "react";
import { Container, Row, Col, Image, Card, ListGroup, Button, Collapse, Accordion } from "react-bootstrap";

export default class ServicePage extends  React.Component {
  render(){
    return (
      <div className="content-wrap bg">
        <div className="service-page">
          <Container>
            <Row>
              <Col className="body center">
                  <h1>Layanan Kami</h1>
                  <h5>"Some quick example text to build on the card title and make up the bulk of
                        the card's content."</h5>
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
                    <div className="box-body">
                    <i class='bx bxs-user bx-md' ></i>
                      <h4>Pekerja Berpengalaman</h4>
                    </div>
                  </div>
              </Col>
              <Col md={4}>
                  <div className="box-content center">
                    <div className="box-body">
                      <i class='bx bx-time-five bx-md' ></i>
                      <h4>Tepat Waktu</h4>
                    </div>
                  </div>
              </Col>
              <Col md={4}>
                  <div className="box-content center">
                    <div className="box-body">
                      <i class='bx bxs-truck bx-md' ></i>
                      <h4>Pesanan Dapat Diantar</h4>
                    </div>
                  </div>
              </Col>
            </Row>
          </Container>
            </div>
      </div>
    );
  }
};