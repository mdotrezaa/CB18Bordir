import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

export default class Dashboard extends  React.Component {
  render(){
    return (
      <Container>
        <Row className="section-one">
          <Col className="sectionOneLeft" >
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
            <div>
              <p>    
                {/* <i class='bx bxs-phone bx-border-circle bx-sm'></i> */}
              </p>
            </div>
          </Col>
          <Col className="sectionOneRight">
            <div>
              <Image src={require("../assets/images/section-one.png")} />
            </div>
          </Col>
        </Row>
        <Row className="section-two">
        <Col>
          <div className="two-left">
            <Image src={require("../assets/images/service.png")} />
          </div>
        </Col>
        <Col>
            <div className="two-right">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button className="btn-secondary" variant="primary">
                Hubungi Kami
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  
};