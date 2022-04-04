import React from 'react'

const Label = ({ id, text }) => {
    return (
        <label htmlFor={id}>{text}</label >
    )
}

export default Label