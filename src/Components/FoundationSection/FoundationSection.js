import React, { useContext } from 'react'
import { Container, Row, Button } from 'reactstrap'
import Typography from '@mui/material/Typography'
import './FoundationSection.css'
import PackageContext from '../../Context/context'

const FoundationSection = () => {
  const data = useContext(PackageContext)
  return (
        <>

            <Container fluid className="foundation-container">
                <Row>
                    <div className="col-7 foundation-div">
                        <div className="circle">
                            <Typography
                                variant='h5'
                                className="circle-text"
                            >
                                AF <br />
                            </Typography>
                        </div>
                        <Typography
                                variant='p'
                                className="foundation"
                            >
                                {data.foundationName} <br />
                            </Typography>
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
  )
}

export default FoundationSection
