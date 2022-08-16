import React from 'react'
import {
    Col
} from 'reactstrap'
import './Footer.css'

const Footer = () => (
    <>
        <Col>
            <p id='footer-text' className='text-info'>Look who else is volunteering for this</p>
        </Col>

        <Col className='footer-div'>
            <div className="bottom-circle">
                <h4 className="bottom-circle-text text-white">TR</h4>
            </div>
            <p style={{ color: "rgb(98, 106, 106" }} className='footer-text'>&ensp; Thara Ravi</p>
        </Col>
    </>
)

export default Footer;