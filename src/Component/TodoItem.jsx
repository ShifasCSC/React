import React, { useState } from "react";

const TodoItem = ({ task, deleteTask, toggleComplete, editTask }) => {
    const [edit, setEdit] = useState(false)
    const [editedText, setEditedText] = useState(task.text)

    const handleEdit = () => {
        editTask(task.id, editedText)
        setEdit(false)
    }
    return (
        <li className="todo-item">
            {edit ? <>
                <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
                <button onClick={handleEdit}>save</button></> : <>
                <span className={`task-text ${task.Completed ? "completed" : ""}`} onClick={()=>toggleComplete(task.id)}>{task.text}
                </span>
                <button onClick={() => setEdit(true)}>edit</button>
                <button onClick={() => deleteTask(task.id)}>delete</button>
            </>}
        </li>
    )
}
export default TodoItem