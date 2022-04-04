import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ tasks, onDelete, onRemind }) => {
    return (
        <>
            {
                tasks.map((task) => {
                    return (
                        <div
                            className={`task ${task.reminder ? 'reminder' : ''}`}
                            key={task.id}
                            onDoubleClick={() => onRemind(task.id)}>
                            <h3>{task.text} <FaTimes style={{ color: 'red' }} onClick={() => onDelete(task.id)} /></h3>
                            <p>{task.date}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Task