import React, {useState} from 'react';

export default function FavoriteColorInput() {
 const [color, setColor] = useState("")

 const handleSubmit = (e) => {
    e.preventDefault()
    alert(`This is my favorite color ${color}`)
 }
 return (
    <div className="App">
    <form onSubmit={handleSubmit}>
        <label>Enter Name</label>
        <input type = "text" value ={color} onChange = {(e)=>setColor(e.target.value) } />
        <input type ="submit"/>
    </form>
   
  </div>
    
  );
}