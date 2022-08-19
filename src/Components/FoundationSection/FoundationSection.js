import React, {useContext} from "react";
import { Container, Row, Button } from "reactstrap";
import "./FoundationSection.css";
import PackageContext from "../../Context/context";

const FoundationSection = () => {
    const data = useContext(PackageContext)
    return (
        <>
            
                    <Container fluid className="foundation-container">
                        <Row>
                            <div className="col-7 foundation-div">
                                <div className="circle">
                                    <h4 className="circle-text">AF</h4>
                                </div>
                                <h4 className="foundation">{data.foundationName}</h4>
                            </div>
                            <div className="col new-col">
                                <Button className="follow-link" href="#">
                                    + Follow
                                </Button>
                                <Button className="info-button donate-button">Donate</Button>
                            </div>
                        </Row>
                    </Container>
        </>
    );
};

export default FoundationSection;
