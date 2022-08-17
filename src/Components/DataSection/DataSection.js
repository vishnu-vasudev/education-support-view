import React, {useContext} from 'react'
import './DataSection.css'
import {
    Container,
    Row,
    Col,
    Button
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
                                <Button size='sm' className='skill-btn'>{context.data.mandatorySkill1}</Button>
                                <Button size='sm' className='skill-btn'>{context.data.mandatorySkill2}</Button>
                            </Col>
                            <Col lg="6">
                                <h6 className='skill-header goodtohaveskill-div'>Good to have skills</h6>
                                <Button size='sm' className='skill-btn'>{context.data.goodtohaveSkill1}</Button>
                                <Button size='sm' className='skill-btn'>{context.data.goodtohaveSkill2}</Button>
                            </Col>

                        </Row><hr />

                        <Row>

                            <Col lg="6">
                                <h6 className='skill-header'>When: <span className='weighted-text'>{context.data.date}</span></h6>
                                <h6 className='skill-header'>Join at <br /><span className='school-name'>{context.data.schoolName}</span></h6>
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