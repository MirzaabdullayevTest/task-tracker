import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ text, onClick }) => {
    return (
        <header className='header'>
            <h3>{text}</h3>

            <Button text="Add" onClick={onClick} color="#000" />
        </header>
    )
}

Header.defaultProps = {
    text: 'Default'
}

Header.propTypes = {
    text: PropTypes.string.isRequired
}

export default Header