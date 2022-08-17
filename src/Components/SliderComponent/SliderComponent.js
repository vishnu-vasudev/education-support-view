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

const SliderComponent = () => {
    const [nestedModal, setNestedModal] = useState(false);
    const toggleNested = () => {
        setNestedModal(!nestedModal);
    };

    return (

        <>
            <Container fluid>

                <Row>

                    <Col>
                        <h6 className='skill-header'>Volunteers Required:</h6>
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                        /><br />
                    </Col>

                </Row>

                <Row>

                    <Col>
                        <p className='skill-header'>Support education by teaching kids</p>
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
                                </Button>{' '}
                            </ModalFooter>
                        </Modal>
                    </Col>

                </Row>

            </Container>
        </>

    )
}

export default SliderComponent;