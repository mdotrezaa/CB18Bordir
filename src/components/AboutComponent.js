import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

export default class AboutPage extends  React.Component {
  render(){
    return (
      <div>
      <Container>
        <Row className="section-one">
          <Col>
            <div className="center">
              <h1>Tentang Kami</h1>
              <p>
                Kami Memberikan Penawaran Jasa Bordir Berkualitas Atas Kebutuhan
                Anda!
              </p>
              <Button className="btn-primary" variant="primary">
                Hubungi Kami
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      
    </div>
    );
  }
  
};