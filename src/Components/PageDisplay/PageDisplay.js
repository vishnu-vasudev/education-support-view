import React, { useState } from 'react'
import '../../App.css'
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter
} from 'reactstrap'
import { Typography } from '@mui/material'

import ImageComponent from '../ImageComponent/ImageComponent'
import DataComponent from '../DataComponent/DataComponent'
import Footer from '../Footer/Footer'
import Weather from '../Weather/Weather'

const PageDisplay = (args) => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
        <>
            <Container>
                <br />
                <center>
                    <Button color="danger" onClick={toggle}>
                        Click Me
                    </Button>
                </center>

                <Modal size="xl" isOpen={modal} toggle={toggle} {...args}>
                    <ModalHeader toggle={toggle}>
                        <Typography variant="p" className="modal-title">
                            Support education by teaching kids
                        </Typography>
                    </ModalHeader>
                    <ModalBody>
                        <Container fluid>
                            <Row>
                                <Col lg="4">
                                    <ImageComponent />
                                    <Weather />
                                </Col>
                                <Col lg="8">
                                    <DataComponent />
                                </Col>
                            </Row>
                        </Container>
                    </ModalBody>
                    <br />
                    <ModalFooter>
                        <Footer />
                    </ModalFooter>
                </Modal>
            </Container>
        </>
  )
}

export default PageDisplay
