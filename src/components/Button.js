import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, onClick, color }) => {
    return (
        <button onClick={onClick} className="btn" style={{ background: color }}>{text}</button>
    )
}

Button.defaultProps = {
    text: 'Add',
    color: 'blue',
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button