import React, { useState } from "react";
import Todos from "./Todos";
import TodoForm from "./TodoForm";

export default function TodoList(){
    const [todos, setTodos] = useState([])

    const addToDo = todo => {
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log("NewTodo:", todo, `\n`, "OldTodos:", ...todos)
    }
const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
}

const updateTodo = (todoId, newValue) => {
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
}

const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
        if(todo.id === id){
            todo.isComplete = !todo.isComplete;
        }
        return todo
    })
    setTodos(updatedTodos)
}
const sortTodos = order =>{
    const sortedTodos = [...todos].sort((a, b)=>{
        let textA = a.text.toLowerCase()
        let textB = b.text.toLowerCase()

        if (order === "ascending"){
         if(textA < textB) return -1
         if(textA > textB) return 1   
        }else{
            if(textA > textB) return -1
            if(textA < textB) return 1
        }
        return 0
    })
    setTodos(sortedTodos)

}

    return (
        <div>
            <h1>What needs to be done today?</h1>
            <div>
                <button onClick={() =>sortTodos("ascending")}>

                </button>
                <button onClick={()=>sortTodos("descending")}>
                    
                </button>
            </div>
            <TodoForm onSubmit={addToDo}/>
            <Todos todos={todos} completeTodos={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}
