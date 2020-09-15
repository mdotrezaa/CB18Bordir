import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

export default class Dashboard extends  React.Component {
  render(){
    return (
      <div>
      <Container>
        <Row className="section-one">
          <Col xs={12} md={6} className="sectionOneLeft" >
            <div>
              <h1>BORDIR KOMPUTER CEPAT</h1>
              <p>
                Kami Memberikan Penawaran Jasa Bordir Berkualitas Atas Kebutuhan
                Anda!
              </p>
              <Button className="btn-primary" variant="primary">
                Hubungi Kami
              </Button>
            </div>
            <hr className="divider"></hr>
            <div class="icon-phone">
                <div class="icon">
                    <span><i class='bx bxs-phone bx-border-circle bx-sm'></i></span>
                    <div class="icon-text">
                        <ul>
                          <li className="phone-title">Phone</li>
                          <li className="phone">(+62) 856-1234-5678</li>
                        </ul>
                    </div>
                </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="sectionOneRight hide-on-med">
            <div>
              <Image className="img-responsive" src={require("../assets/images/section-one.png")} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="section-two">
        <Col xs={12} md={6}>
          <div className="two-left">
            <Image className="img-responsive" src={require("../assets/images/service.png")} />
          </div>
        </Col>
        <Col xs={12} md={6}>
            <div className="two-right">
              <h2>Lorem ipsum dolor sit amet</h2>
              <h5>"Lorem ipsum dolor sit amet"</h5>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <Button className="btn-secondary" variant="primary">
                Hubungi Kami
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="section-three">   
        <Col xs={12} md={6}>
          <div className="three-left">
            <h2>Lorem ipsum dolor sit amet</h2>
            <h5>"Lorem ipsum dolor sit amet"</h5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Button className="btn-secondary" variant="primary">
              Hubungi Kami
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="three-right">
            <Image className="img-responsive" src={require("../assets/images/section-three.png")} />
          </div>
        </Col>
        </Row>
      </Container>
      <div className="section-four">  
        <Container>
          <Row>   
          <Col xs={12} md={6}>

          </Col>
          </Row>
        </Container>
      </div>
      </div>
    );
  }
  
};