import React, {useState} from 'react';

export default function Hobbies() {
 const [Hobbies, setHobbies] = useState("")

 const handleSubmit = (e) => {
    e.preventDefault()
    alert(`These are my hobbies ${Hobbies}`)
 }
 return (
    <div className="App">
    <form onSubmit={handleSubmit}>
        <label>Enter Name</label>
        <input type = "text" value ={Hobbies} onChange = {(e)=>setHobbies(e.target.value) } />
        <input type ="submit"/>
    </form>
    <p>My Hobbies</p>
    <hobbies/>
  </div>
    
  );
}