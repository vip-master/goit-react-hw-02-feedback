import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledList=styled.ul`
    display: flex;
    justify-content: 'space-around',
`;

function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <StyledList>
            {options.map(option=>(
                <li key={option}>
                    <button type="button" id={option} onClick={onLeaveFeedback}>{option}</button>
                </li>
            ))}
        </StyledList>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions

