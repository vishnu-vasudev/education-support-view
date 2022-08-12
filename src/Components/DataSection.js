import React from 'react'

const DataSection = () => (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h6 className='skill-header'>Mandatory skills</h6>
                    <button className='skill-btn'>Data analysis</button>
                    <button className='skill-btn'>Communication</button>
                </div>
                <div id='comm_skill-div' className='col-lg-6'>
                    <h6 className='skill-header'>Good to have skills</h6>
                    <button className='skill-btn'>Communication</button>
                    <button className='skill-btn'>Data analysis</button>
                </div>
            </div><hr />

            <div className='row'>
                <div className='col-lg-6'>
                    <h6 className='skill-header'>When: <span className='weighted-text'>Aug 3, 2022</span></h6>
                    <h6 className='skill-header'>Join at <br /><span className='text-info' id='school-name'>Narayan school</span></h6>
                </div>
                <div className='col-lg-6'>
                    <h6 className='skill-header'>Time: <span className='weighted-text'>Flexible</span></h6>
                </div>
            </div><hr />

            <div className='row'>
                <div className='col-lg-6'>
                    <h6 className='skill-header'>Estimated Savings: <br /><br /> <span className='weighted-text'>Saves 5 of work at ₹50 hour rate = ₹250</span></h6>
                </div>
                <div className='col-lg-6'>
                    <h6 className='skill-header'>Time Commitment: <br /><br /> <span className='weighted-text'>1-5 hours over 0 weeks</span></h6>
                </div>
            </div><hr />
        </div>

    </>
)

export default DataSection;