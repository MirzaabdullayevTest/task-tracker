import React from 'react'

const Input = ({ type, id, onChange, value }) => {
    return (
        <input type={type} id={id} onChange={(e) => onChange(e.target.value)} value={value} />
    )
}

export default Input