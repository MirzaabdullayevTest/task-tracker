import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ text, onClick, toggleForm }) => {
    return (
        <header className='header'>
            <h3>{text}</h3>

            <Button
                text=
                {`${toggleForm
                    ? 'Hide'
                    : 'Show'}`
                }
                onClick={onClick}
                color="grey" />
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