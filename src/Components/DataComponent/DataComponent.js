import React from 'react'
import './DataComponent.css'
import DataSection from '../DataSection/DataSection'
import FoundationSection from '../FoundationSection/FoundationSection'
import SliderComponent from '../SliderComponent/SliderComponent'

const DataComponent = () => {

    return (

        <div className='text-container'>

            <section>
                <p className='initial-text'>
                    Support education by teaching kidsSupport education by teaching kidsSupport education by teaching kidsSupport education by teaching kids
                </p>
            </section><hr />

            <section>
                <FoundationSection />
            </section><hr />

            <section>
                <DataSection />
            </section>

            <section>
                <SliderComponent />
            </section>

        </div>

    )
}

export default DataComponent;