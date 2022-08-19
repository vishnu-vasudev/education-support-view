import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './Footer.css'
import { Typography } from '@mui/material'

const Footer = () => (
    <>
        <Container fluid>
            <Row>
                <Col>
                    <Typography
                        variant="p"
                        className="footer-first-text">
                        Look who else is volunteering for this
                    </Typography>
                </Col>

                <Col className="footer-div">
                    <div className="bottom-circle">
                        <Typography
                            variant="h6"
                            className="bottom-circle-text text-white">
                            TR
                        </Typography>
                    </div>
                    <Typography
                        variant="p"
                        className="footer-text">
                        &ensp; Thara Ravi
                    </Typography>
                </Col>
            </Row>
        </Container>
    </>
)

export default Footer
