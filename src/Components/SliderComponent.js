import React from 'react'
import ReactSlider from 'react-slider'
import { useHistory } from 'react-router-dom'

const SliderComponent = () => {

    const history = useHistory()

    return (

        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <h6 className='skill-header'>Volunteers Required:</h6>
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                        /><br />
                    </div>

                </div>
                <div className='row'>
                    <div className='col'>
                        <p className='skill-header'>Support education by teaching kids</p>
                    </div>
                    <div className='col-lg'>
                        <button id='volunteer-btn' className='btn-info'>Volunteer Now</button>
                        <button onClick={() => {
                            history.push("/share")
                        }}
                            data-dismiss="modal"
                            id='share-btn'
                        >
                            Share
                        </button>
                    </div>
                </div>
            </div>





        </>

    )
}
/* <a
    // onClick={() => {
    //     history.push("/share")
    // }}
    href="https://www.facebook.com/"
// data-dismiss="modal"
// aria-label="Close"
>
    <i
        className="fa fa-facebook-square fa-5x"
        aria-hidden="true"
    >
    </i> */

export default SliderComponent;