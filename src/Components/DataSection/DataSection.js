import React, { useContext } from 'react'
import './DataSection.css'
import { Container, Row, Col, Button } from 'reactstrap'
import { Typography } from '@mui/material'
import PackageContext from '../../Context/context'

const DataSection = () => {
  const data = useContext(PackageContext)
  return (
        <>
            <Container fluid>
                <Row>
                    <Col lg="6">
                        <Typography
                            variant='p'
                            className='skill-header'
                        >
                            Mandatory skills
                        </Typography><br />
                        <Button size="sm" className="skill-btn">
                            {data.mandatorySkill1}
                        </Button>
                        <Button size="sm" className="skill-btn">
                            {data.mandatorySkill2}
                        </Button>
                    </Col>
                    <Col lg="6">
                        <Typography
                            variant='p'
                            className='skill-header'
                        >
                            Good to have skills
                        </Typography><br />
                        <Button size="sm" className="skill-btn">
                            {data.goodtohaveSkill1}
                        </Button>
                        <Button size="sm" className="skill-btn">
                            {data.goodtohaveSkill2}
                        </Button>
                    </Col>
                </Row>
                <hr />

                <Row>
                    <Col lg="6">
                        <Typography
                            variant='p'
                            className='skill-header'
                        >
                            When:
                            <span className="weighted-text">{data.date}</span>
                        </Typography><br />
                        <Typography
                            variant='p'
                            className='skill-header'
                        >
                            Join at <br />
                            <span className="school-name">{data.schoolName}</span>
                        </Typography><br />
                    </Col>
                    <Col lg="6">
                        <Typography
                            variant='p'
                            className='skill-header'
                        >
                            Time:
                            <span className="weighted-text">{data.time}</span>
                        </Typography>

                    </Col>
                </Row>
                <hr />

                <Row>
                    <Col lg="6">
                        <Typography
                            variant='p'
                            className='skill-header'
                        >
                            Estimated Savings: <br /><br />
                            <span className="weighted-text">
                                {data.estimatedSavings}
                            </span>
                        </Typography>
                    </Col>
                    <Col lg="6">
                        <Typography
                            variant='p'
                            className='skill-header'
                        >
                            Time Commitment: <br /><br />
                            <span className="weighted-text margin-top">
                                {data.timeCommitment}
                            </span>
                        </Typography>
                    </Col>
                </Row>
                <hr />
            </Container>
        </>
  )
}

export default DataSection
