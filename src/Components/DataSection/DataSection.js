import React from 'react'
import './DataSection.css'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import Context from '../../Context/context'

const DataSection = () => (
    <>
        <Context.Consumer>
            {
                (context) => (
                    <Container fluid>

                        <Row>

                            <Col lg="6">
                                <h6 className='skill-header'>Mandatory skills</h6>
                                <button className='skill-btn'>{context.data.mandatorySkill1}</button>
                                <button className='skill-btn'>{context.data.mandatorySkill2}</button>
                            </Col>
                            <Col lg="6">
                                <h6 className='skill-header'>Good to have skills</h6>
                                <button className='skill-btn'>{context.data.goodtohaveSkill1}</button>
                                <button className='skill-btn'>{context.data.goodtohaveSkill2}</button>
                            </Col>

                        </Row><hr />

                        <Row>

                            <Col lg="6">
                                <h6 className='skill-header'>When: <span className='weighted-text'>{context.data.date}</span></h6>
                                <h6 className='skill-header'>Join at <br /><span className='text-info school-name'>{context.data.schoolName}</span></h6>
                            </Col>
                            <Col lg="6">
                                <h6 className='skill-header'>Time: <span className='weighted-text'>{context.data.time}</span></h6>
                            </Col>

                        </Row><hr />

                        <Row>

                            <Col lg="6">
                                <h6 className='skill-header'>Estimated Savings: <br /><br /> <span className='weighted-text'>{context.data.estimatedSavings}</span></h6>
                            </Col>
                            <Col lg="6">
                                <h6 className='skill-header'>Time Commitment: <br /><br /> <span className='weighted-text'>{context.data.timeCommitment}</span></h6>
                            </Col>

                        </Row><hr />

                    </Container>
                )
            }
        </Context.Consumer>

    </>
)

export default DataSection;