import React, { useContext } from "react";
import "./DataSection.css";
import { Container, Row, Col, Button } from "reactstrap";
import PackageContext from "../../Context/context";

const DataSection = () => {
    const data = useContext(PackageContext)
    return (
    <>
                <Container fluid>
                    <Row>
                        <Col lg="6">
                            <h6 className="skill-header">Mandatory skills</h6>
                            <Button size="sm" className="skill-btn">
                                {data.mandatorySkill1}
                            </Button>
                            <Button size="sm" className="skill-btn">
                                {data.mandatorySkill2}
                            </Button>
                        </Col>
                        <Col lg="6">
                            <h6 className="skill-header goodtohaveskill-div">
                                Good to have skills
                            </h6>
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
                            <h6 className="skill-header">
                                When: <span className="weighted-text">{data.date}</span>
                            </h6>
                            <h6 className="skill-header">
                                Join at <br />
                                <span className="school-name">{data.schoolName}</span>
                            </h6>
                        </Col>
                        <Col lg="6">
                            <h6 className="skill-header">
                                Time: <span className="weighted-text">{data.time}</span>
                            </h6>
                        </Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col lg="6">
                            <h6 className="skill-header">
                                Estimated Savings: <br />
                                <br />{" "}
                                <span className="weighted-text">
                                    {data.estimatedSavings}
                                </span>
                            </h6>
                        </Col>
                        <Col lg="6">
                            <h6 className="skill-header">
                                Time Commitment: <br />
                                <br />{" "}
                                <span className="weighted-text">
                                    {data.timeCommitment}
                                </span>
                            </h6>
                        </Col>
                    </Row>
                    <hr />
                </Container>
    </>
    )
};

export default DataSection;
