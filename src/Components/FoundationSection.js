import React from 'react'

const FoundationSection = () => (
    <>
        <div className='container-fluid fdsection'>
            <div className='row'>
                <div className='col-7 foundation-div'>
                    <div className="circle">
                        <h4 className="circle-text text-info">AF</h4>
                    </div>
                    <h4 className='foundation'>Annamrita Foundation</h4>

                </div>
                <div className='col-lg new-col'>
                    <button id='follow-link' className='text-info' href="#">+ Follow</button>
                    <button id='donate-button' className='btn btn-info info-button'>Donate</button>
                </div>
            </div>

        </div>

    </>
)

export default FoundationSection;