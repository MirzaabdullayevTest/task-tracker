import Task from "./Task"

const Tasks = ({ tasks, onDelete, onRemind }) => {
    return (
        <Task tasks={tasks} onDelete={onDelete} onRemind={onRemind}></Task>
    )
}

export default Tasks