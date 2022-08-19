import { useState } from 'react'
import PageDisplay from '../Components/PageDisplay/PageDisplay'
import PackageContext from '../Context/context'

const StringsProvider = props => {
    const [strings] = useState({
        foundationName: "Annamrita Foundation",
        mandatorySkill1: "Data Analysis",
        mandatorySkill2: "Communication",
        goodtohaveSkill1: "Communication",
        goodtohaveSkill2: "Data Analysis",
        date: "Aug 3. 2022",
        schoolName: "Narayan school",
        time: "Flexible",
        estimatedSavings: "Saves 5 of work at ₹50 hour rate = ₹250",
        timeCommitment: "1-5 hours over 0 weeks"
    })
    return (
        <PackageContext.Provider
            value={strings }
        >
            <PageDisplay />
        </PackageContext.Provider>
    )
}

export default StringsProvider