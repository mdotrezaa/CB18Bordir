import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

export default class HomePage extends  React.Component {
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
            <div className="icon-phone">
                <div className="icon">
                    <span><i className='bx bxs-phone bx-border-circle bx-sm'></i></span>
                    <div className="icon-text">
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
      <div className="section-three">  
      <Container>
        <Row className="content">      
        <Col xs={12} md={6}>
          <div className="three-left">
            <h2>Lorem ipsum dolor sit amet</h2>
            <h5>"Lorem ipsum dolor sit amet"</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Button className="btn-secondary" variant="primary">
              Layanan Kami
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
      </div>
      <div className="section-four">
        <Container>
          <h2 className="center">Our  Partners</h2>
          <section className="customer-logos slider">
              <div className="slide"><img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" alt="1"/></div>
              <div className="slide"><img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" alt="2"/></div>
              <div className="slide"><img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" alt="3"/></div>
              <div className="slide"><img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" alt="4"/></div>
              <div className="slide"><img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" alt="5"/></div>
              <div className="slide"><img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" alt="6"/></div>
              <div className="slide"><img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" alt="7"/></div>
              <div className="slide"><img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" alt="8"/></div>
          </section>
        </Container>
      </div>
    </div>
    );
  }
  
};