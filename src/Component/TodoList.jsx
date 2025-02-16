import React, { useState } from 'react'
import TodoItem from './TodoItem'

function TodoList() {
    const [tasks,setTasks]=useState([])
    const [newTask,setNewTask]=useState("")

    const addTask=()=>{
        if(newTask.trim()=="")
            return
        setTasks([...tasks,{id:Date.now(), text:newTask, completed:false }])
        setNewTask("")
    }

    const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
    }

    const toggleComplete=(id)=>{
setTasks(
    tasks.map((task)=>(task.id === id ? {...task,completed:!task.completed}:task))
)
    }

    const editTask=(id,newText)=>{
setTasks(
    tasks.map((task)=>(
     task.id===id ? {...task,text:newText}:task   
    ))
)
    }
  return (
    <div className="todo-container">
<div className="input-container">
    <input type="text" value={newTask} placeholder='enter your task ..' onChange={(e)=>setNewTask(e.target.value)} />
    <button onClick={addTask}>Add</button>
</div>
<ul>
    {tasks.map((task)=>(
    <TodoItem key={task.id} task={task} editTask={editTask} toggleComplete={toggleComplete} deleteTask={deleteTask}/>
    ))}
</ul>
    </div>
  )
}

export default TodoList