import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Footer.css";

const Footer = () => (
    <>
        <Container fluid>
            <Row>
                <Col>
                    <p className="footer-first-text">
                        Look who else is volunteering for this
                    </p>
                </Col>

                <Col className="footer-div">
                    <div className="bottom-circle">
                        <h4 className="bottom-circle-text text-white">TR</h4>
                    </div>
                    <p className="footer-text">&ensp; Thara Ravi</p>
                </Col>
            </Row>
        </Container>
    </>
);

export default Footer;