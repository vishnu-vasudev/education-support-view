import React, { useState } from 'react'
import './SliderComponent.css'
import ReactSlider from 'react-slider'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Container,
  Row,
  Col
} from 'reactstrap'
import SharePage from '../SharePage/SharePage'
import { Typography } from '@mui/material'

const SliderComponent = () => {
  const [nestedModal, setNestedModal] = useState(false)
  const toggleNested = () => {
    setNestedModal(!nestedModal)
  }

  return (

        <>
            <Container fluid>

                <Row>

                    <Col>
                        <Typography
                            variant='p'
                            className='skill-header'
                        >
                            Volunteers Required:
                        </Typography>
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                        /><br />
                    </Col>

                </Row>

                <Row>

                    <Col>
                        <Typography
                            variant='p'
                            className='skill-header'
                        >
                            Support education by teaching kids
                        </Typography>
                    </Col>
                    <Col lg>
                        <Button className='volunteer-btn'>Volunteer Now</Button>
                        <Button className='share-btn' color="success" onClick={toggleNested}>
                            Share
                        </Button>
                        <Modal
                            isOpen={nestedModal}
                            toggle={toggleNested}
                        >
                            <ModalHeader>Share to:</ModalHeader>

                            <ModalBody>

                                <SharePage />

                            </ModalBody>

                            <ModalFooter>
                                <Button color="dark" onClick={toggleNested}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </Col>

                </Row>

            </Container>
        </>

  )
}

export default SliderComponent
