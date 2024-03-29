import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm"

export default function Todo({todos, completeTodo, removeTodo, updateTodo}){ 
    const [edit, setEdit] = useState({
        id: null, value: ""
    })


        if(edit.id){
            return <TodoForm onSubmit={submitUpdate}/>
        }
    
        const submitUpdate = newTodo => {
            updateTodo(edit.id, newTodo)
            setEdit({id: null, value:""})
        }

    return todos.map((todo, idx)=>(
        <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={idx}>
            <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
                {todo.text}
            </div>
        <div className="icons">
            <RiCloseCircleLine onClick={()=> removeTodo(todo.id)}
            className="delete-icon"/>
            <TiEdit onClick={()=> setEdit({id: todo.id, value: todo.text})} className="edit-icon"/>
            </div>
            </div>
    ))
}


