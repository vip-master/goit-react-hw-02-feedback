import React from 'react'
import PropTypes from 'prop-types'

function Statistics(justProps) {
    return (
        <ul>
           {Object.keys(justProps).map(
               label=>(
                   <li key={label}>
                       <h3>{label}</h3>
                       <span>{justProps[label]}{label==="positivePercentage" && "%"}</span>
                   </li>
               )
           )} 
        </ul>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}

export default Statistics

