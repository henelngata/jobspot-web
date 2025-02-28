import { faMoneyBills } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

let specializations =[
    {
        name: "Design",
        icon: <FontAwesomeIcon icon={faMoneyBills} flip="vertical" size="xs" style={{color: "#ff9228",}} />,
        jobs: "140 jobs"
    }
]

function  SpecializationCard() {
    return(
        <section>
             <FontAwesomeIcon icon={faMoneyBills} flip="vertical"  style={{color: "#ff9228",}}  className='w-[50px] h-[50px] p-2 rounded-full bg-lavender-light'/>
        </section>
    )
}
const SpecializationCards = () => {
  return (
    <SpecializationCard/>
  )
}

export default SpecializationCards