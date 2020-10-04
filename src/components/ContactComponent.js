import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  FormControl,
  Card,
} from "react-bootstrap";

export default class ContactPage extends React.Component {
  render() {
    return (
      <div className="kontak-wrap bg">
        <div>
          <Container>
            <h1 className="center">Kontak dan Lokasi</h1>
            <Row>
              <Col xs={12} md={4}>
                <Card>
                  <Card.Body className="center">
                    <Card.Title>
                      <i class="bx bx-store-alt"></i>
                    </Card.Title>
                    <Card.Text>
                      Jalan Melawai V <br /> Blok M Square Lantai Basement{" "}
                      <br /> Blok D No 126, 035, 088, 176, 118, <br /> Melawai,
                      Kebayoran Baru, <br /> Jakarta Selatan
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card>
                  <Card.Body className="center">
                    <Card.Title>
                      <i class="bx bx-store-alt"></i>
                    </Card.Title>
                    <Card.Text>
                      Jalan Melawai V <br /> Blok M Square Lantai Basement{" "}
                      <br /> Blok E No 128, 96, 135, <br /> Melawai, Kebayoran
                      Baru, <br />
                      Jakarta Selatan
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4}>
                <Card>
                  <Card.Body className="center">
                    <Card.Title>
                      <i class="bx bx-store-alt"></i>
                    </Card.Title>
                    <Card.Text>
                      Jalan Melawai V <br /> Blok M Square Lantai Basement{" "}
                      <br /> Blok G No 003, <br /> Melawai, Kebayoran Baru,{" "}
                      <br /> Jakarta Selatan
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <div className="maps">
            <iframe
              title="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1426704457717!2d106.79798231476191!3d-6.244921995479634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16e9ffbc599%3A0xe4f891348e1a7d06!2sCahaya%20Baru%2018!5e0!3m2!1sid!2sid!4v1600860468023!5m2!1sid!2sid"
              frameborder="0"
              Style="border:0;"
              width="100%"
              height="500px"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
        <div className="kontak-form">
          <Container>
            <Row>
              <Col xs={12} md={7}>
                <Form className="form-kontak">
                  <Form.Row>
                    <Col>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <i
                              class="bx bxs-user"
                              style={{ color: "#000" }}
                            ></i>
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          id="inlineFormInputGroupUsername"
                          placeholder="Nama"
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <i
                              class="bx bxs-phone"
                              style={{ color: "#000" }}
                            ></i>
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          id="inlineFormInputGroupUsername"
                          placeholder="Nomor Telepon"
                        />
                      </InputGroup>
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text>@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          id="inlineFormInputGroupUsername"
                          placeholder="Email"
                        />
                      </InputGroup>
                    </Col>
                  </Form.Row>

                  <Form.Row>
                    <Col>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          placeholder="Deskripsi"
                        />
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <Button className="btn-primary center">Kirim</Button>
                </Form>
              </Col>
              <Col className="col-100" xs={12} md={5}>
                <div className="kontak-info">
                  <div class="contact_info">
                    <ul>
                      <li class="c_call">
                        <i class="bx bxs-phone"></i>
                        <aside>
                          <h3>Hubungi kami</h3>
                          <a href="tel:08176389206">+62 817-6389-206</a>
                        </aside>
                      </li>
                      <li class="c_mail">
                        <i class="bx bx-mail-send"></i>
                        <aside>
                          <h3>Kirim email</h3>
                          <a href="mailto:erunugriyanto@gmail.com">
                            erunugriyanto@gmail.com
                          </a>
                        </aside>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <div class="overlay"></div>
        </div>
        {/* <div className="kontak-page">
          <Container>
            <Row className="content">
            <Col className="col-100" xs={12} md={7}>
                  <Form className="form-kontak">
                    <Form.Row>
                      <Col>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text>
                              <i
                                class="bx bxs-user"
                                style={{ color: "#000" }}
                              ></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl
                            id="inlineFormInputGroupUsername"
                            placeholder="Nama"
                          />
                        </InputGroup>
                      </Col>
                      <Col>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text>
                              <i
                                class="bx bxs-phone"
                                style={{ color: "#000" }}
                              ></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl
                            id="inlineFormInputGroupUsername"
                            placeholder="Nomor Telepon"
                          />
                        </InputGroup>
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text>@</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl
                            id="inlineFormInputGroupUsername"
                            placeholder="Email"
                          />
                        </InputGroup>
                      </Col>
                    </Form.Row>

                    <Form.Row>
                      <Col>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Control
                            as="textarea"
                            rows="3"
                            placeholder="Deskripsi"
                          />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                    <Button className="btn-primary center">Kirim</Button>
                  </Form>
                </Col>
                <Col className="col-100" xs={12} md={5}>
                  <div className="kontak-info">
                    <div class="contact_info">
                      <ul>
                        <li class="c_call">
                          <i class="bx bxs-phone"></i>
                          <aside>
                            <h3>Hubungi kami</h3>
                            <a href="tel:08176389206">+62 817-6389-206</a>
                          </aside>
                        </li>
                        <li class="c_mail">
                          <i class="bx bx-mail-send"></i>
                          <aside>
                            <h3>Kirim email</h3>
                            <a href="mailto:erunugriyanto@gmail.com">
                              erunugriyanto@gmail.com
                            </a>
                          </aside>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
            </Row>
          </Container>
          <div class="overlay"></div>
        </div> */}
      </div>
    );
  }
}
