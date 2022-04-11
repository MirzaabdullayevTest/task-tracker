import { useState } from 'react'

import React from 'react'
import Button from './Button'
import Input from './Input'
import Label from './Label'

const Form = ({ addHandler }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('11.04.2022')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Pleace write text');
            return
        }

        addHandler(text, day, reminder)

        setText('')
        setDay('11.04.2022')
        setReminder(false)
    }



    // Input change
    const onChange = (value) => {
        setText(value)
    }

    const changeDay = (value) => {
        setDay(value)
    }

    return (
        <form action='' onSubmit={onSubmit} className='form-control'>
            <Label id="do" text='To do task' />
            <Input type='text' id="do" onChange={onChange} value={text} />
            <Input type='date' id="date" onChange={changeDay} value={day} />
            <Button text='Add' color='rgb(0,120,0)' />
        </form>
    )
}

export default Form