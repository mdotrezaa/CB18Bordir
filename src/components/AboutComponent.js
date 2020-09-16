import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

export default class AboutPage extends  React.Component {
  render(){
    return (
      <div>
        <div className="section-one about-page">
          <Container>
            <Row>
              <Col>
                  <h1>Tentang Kami.</h1>
                  <h5>"Lorem ipsum dolor sit amet"</h5>
              </Col>
              <Col>
                <div className="about">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </Col>
            </Row>
          </Container>  
        </div>
      </div>
    );
  }
};