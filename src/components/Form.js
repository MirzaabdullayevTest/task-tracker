import React from 'react'
import Button from './Button'
import Input from './Input'
import Label from './Label'

const Form = ({ onChange, addHandler }) => {
    return (
        <div className='form-control'>
            <Label id="do" text='To do task' />
            <Input type='text' id="do" onChange={onChange} />
            <Button text='Add' color='rgb(0,120,0)' onClick={addHandler} />
        </div>
    )
}

export default Form