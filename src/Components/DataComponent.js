import React from 'react'
import DataSection from './DataSection'
import FoundationSection from './FoundationSection'
import SliderComponent from './SliderComponent'

const DataComponent = () => {

    return (

        <div className='text-container'>

            <section>
                <p id='initial-text'>
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