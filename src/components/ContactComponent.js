import React from "react";
import { Container, Row, Col, Button, Form, InputGroup, FormControl } from "react-bootstrap";

export default class ContactPage extends  React.Component {
  render(){
    return (
      <div className="kontak-wrap bg">
        <div className="kontak-page">
          <Container>
            <Row>
              <Col>
                  <h1 className="center">Kontak Kami.</h1>
                  <div className="divider"></div>
                  <h5 className="center">"Some quick example text to build on the card title and make up the bulk of the card's content."</h5>
              </Col>
            </Row>
            </Container>
            <div className="maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.719366273717!2d106.8296376!3d-6.2068956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16ea40e6927%3A0x7549fb3baec6b55d!2sBl.%20M%20Square%2C%20Melawai%2C%20Kec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1600415769058!5m2!1sen!2sid" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <Container className="kontak-page">
            <Row>
            <Col>
                  <Form className="form-kontak">
                    <Form.Row>
                      <Col>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text><i class='bx bxs-user' style={{ color: '#000' }}></i></InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl id="inlineFormInputGroupUsername" placeholder="Full Name" />
                        </InputGroup>
                      </Col>
                      <Col>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text><i class='bx bxs-phone' style={{ color: '#000' }}></i></InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl id="inlineFormInputGroupUsername" placeholder="Phone" />
                        </InputGroup>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text>@</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl id="inlineFormInputGroupUsername" placeholder="Email" />
                        </InputGroup>
                      </Col>
                    </Form.Row>
                    
                    <Form.Row>
                      <Col>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Message:</Form.Label>
                          <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <Button className="btn-primary">Send</Button>
                  </Form>
                </Col>
                <Col md={6}>
                <div className="kontak">
                  <h4>Contact Information</h4>
                  <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Row>
                      <Col md={6}>
                      <h6>Contact Information</h6>
                      <ul>
                        <li>
                            <i class='bx bxs-map bx-xs bx-border-circle'></i>
                            <span>
                            Some quick example text to build on the card
                            </span>
                        </li>
                        <li>
                            <i class='bx bxs-phone bx-xs bx-border-circle'></i>
                            <span>
                           (+62)859-123-5554
                            </span>
                        </li>
                        <li>
                        <i class='bx bxs-envelope bx-xs bx-border-circle'></i>
                          <span>
                            mail@mail.id<p></p>
                          </span>
                        </li>
                      </ul>
                      </Col>
                      <Col md={6}>
                        <h6>Contact Information</h6>
                        <ul>
                          <li>
                              <i class='bx bxs-map bx-xs bx-border-circle'></i>
                              <span>
                              Some quick example text to build on the card
                              </span>
                          </li>
                          <li>
                              <i class='bx bxs-phone bx-xs bx-border-circle'></i>
                              <span>
                            (+62)859-123-5554
                              </span>
                          </li>
                          <li>
                          <i class='bx bxs-envelope bx-xs bx-border-circle'></i>
                            <span>
                              mail@mail.id<p></p>
                            </span>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                      <h6>Contact Information</h6>
                      <ul>
                        <li>
                            <i class='bx bxs-map bx-xs bx-border-circle'></i>
                            <span>
                            Some quick example text to build on the card
                            </span>
                        </li>
                        <li>
                            <i class='bx bxs-phone bx-xs bx-border-circle'></i>
                            <span>
                           (+62)859-123-5554
                            </span>
                        </li>
                        <li>
                        <i class='bx bxs-envelope bx-xs bx-border-circle'></i>
                          <span>
                            mail@mail.id<p></p>
                          </span>
                        </li>
                      </ul>
                      </Col>
                      <Col md={6}>
                        <h6>Contact Information</h6>
                        <ul>
                          <li>
                              <i class='bx bxs-map bx-xs bx-border-circle'></i>
                              <span>
                              Some quick example text to build on the card
                              </span>
                          </li>
                          <li>
                              <i class='bx bxs-phone bx-xs bx-border-circle'></i>
                              <span>
                            (+62)859-123-5554
                              </span>
                          </li>
                          <li>
                          <i class='bx bxs-envelope bx-xs bx-border-circle'></i>
                            <span>
                              mail@mail.id<p></p>
                            </span>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                      <h6>Contact Information</h6>
                      <ul>
                        <li>
                            <i class='bx bxs-map bx-xs bx-border-circle'></i>
                            <span>
                            Some quick example text to build on the card
                            </span>
                        </li>
                        <li>
                            <i class='bx bxs-phone bx-xs bx-border-circle'></i>
                            <span>
                           (+62)859-123-5554
                            </span>
                        </li>
                        <li>
                        <i class='bx bxs-envelope bx-xs bx-border-circle'></i>
                          <span>
                            mail@mail.id<p></p>
                          </span>
                        </li>
                      </ul>
                      </Col>
                      <Col md={6}>
                        <h6>Contact Information</h6>
                        <ul>
                          <li>
                              <i class='bx bxs-map bx-xs bx-border-circle'></i>
                              <span>
                              Some quick example text to build on the card
                              </span>
                          </li>
                          <li>
                              <i class='bx bxs-phone bx-xs bx-border-circle'></i>
                              <span>
                            (+62)859-123-5554
                              </span>
                          </li>
                          <li>
                          <i class='bx bxs-envelope bx-xs bx-border-circle'></i>
                            <span>
                              mail@mail.id<p></p>
                            </span>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                      <h6>Contact Information</h6>
                      <ul>
                        <li>
                            <i class='bx bxs-map bx-xs bx-border-circle'></i>
                            <span>
                            Some quick example text to build on the card
                            </span>
                        </li>
                        <li>
                            <i class='bx bxs-phone bx-xs bx-border-circle'></i>
                            <span>
                           (+62)859-123-5554
                            </span>
                        </li>
                        <li>
                        <i class='bx bxs-envelope bx-xs bx-border-circle'></i>
                          <span>
                            mail@mail.id<p></p>
                          </span>
                        </li>
                      </ul>
                      </Col>
                      <Col md={6}>
                        <h6>Contact Information</h6>
                        <ul>
                          <li>
                              <i class='bx bxs-map bx-xs bx-border-circle'></i>
                              <span>
                              Some quick example text to build on the card
                              </span>
                          </li>
                          <li>
                              <i class='bx bxs-phone bx-xs bx-border-circle'></i>
                              <span>
                            (+62)859-123-5554
                              </span>
                          </li>
                          <li>
                          <i class='bx bxs-envelope bx-xs bx-border-circle'></i>
                            <span>
                              mail@mail.id<p></p>
                            </span>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                </div>
                </Col>
            </Row>
          </Container> 
        </div>
    </div>
    );
  }
};