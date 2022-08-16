import React from 'react'
import {
    Container,
    Row
} from 'reactstrap'
import './FoundationSection.css'
import Context from '../../Context/context'

const FoundationSection = () => {

    return (
        <>
            <Context.Consumer>
                {
                    (context) => (
                        <Container fluid>


                            <Row>
                                <div className='col-7 foundation-div'>
                                    <div className="circle">
                                        <h4 className="circle-text text-info">AF</h4>
                                    </div>
                                    <h4 className='foundation'>{context.data.foundationName}</h4>

                                </div>
                                <div className='col-lg new-col'>
                                    <button className='text-info follow-link' href="#">+ Follow</button>
                                    <button className='btn btn-info info-button donate-button'>Donate</button>
                                </div>
                            </Row>

                        </Container>
                    )

                }
            </Context.Consumer>




        </>
    )
}

export default FoundationSection;