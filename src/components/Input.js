import React from 'react'

const Input = ({ type, id, onChange }) => {
    return (
        <input type={type} id={id} onChange={onChange} />
    )
}

export default Input