import React from 'react'
import { Button } from 'reactstrap'
import './ImageComponent.css'

const ImageComponent = () => (
    <>
        <img
            className="img-fluid image"
            alt="teaching"
            src="https://corp.smartbrief.com/wp-content/uploads/2020/07/cdc-GDokEYnOfnE-unsplash-scaled.jpg"
        >
        </img>
        <br />
        <Button className="info-button">In-person</Button>
    </>
)

export default ImageComponent
