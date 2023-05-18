import React, { useState, useEffect, useRef } from "react";


export default function TodoForm(props) {
    const [input, setInput] = useState("")
    const inputRef = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id:Math.floor(Math.random()* 1000000),text:input
        })
        setInput("")
    }

    const handleChange = e => {
        setInput(e.target.value)
    }

    useEffect(()=>{
        inputRef.current.focus()
    })

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a to do" value={input} name="text" className="todo-input" onChange={handleChange} ref={inputRef} />
            <button className="todo-button">Addtodo</button>
        </form>
    )
    
}