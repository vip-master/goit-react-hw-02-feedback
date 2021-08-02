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
                <li key={option.id}>
                    <button type="button" id={option.id} onClick={onLeaveFeedback}>{option.title}</button>
                </li>
            ))}
        </StyledList>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions

