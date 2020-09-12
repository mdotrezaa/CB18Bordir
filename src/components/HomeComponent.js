import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const HomeComponent = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col className="sectionOneLeft">
          <div>
            <h1>Bordir Komputer Cepat</h1>
            <p>
              Kami Memberikan Penawaran Jasa Bordir Berkualitas Atas Kebutuhan
              Anda!
            </p>
            <Button className="contactUsBtn" variant="primary">
              Hubungi Kami
            </Button>
          </div>
        </Col>
        <Col>
          <div>
            <Image src={require("../assets/images/section-one.png")} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeComponent;
