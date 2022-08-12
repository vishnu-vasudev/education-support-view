import React from 'react'
import "../App.css"
import ImageComponent from './ImageComponent'
import DataComponent from './DataComponent'
import Footer from './Footer'
import Weather from './Weather'



const Modal = () => (
    <>
        <div className='container-fluid'><br />
            <center>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modal">
                    Click Me
                </button>
            </center>

        </div>

        <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="title">Support education by teaching kids</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <ImageComponent />
                                    <Weather />
                                </div>
                                <div className='col-lg-8'>
                                    <DataComponent />
                                </div>
                            </div>
                            <div className='container-fluid'>
                                <hr /><div className='row footer-div'>
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Modal;

