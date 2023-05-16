import React, {useState} from 'react';

export default function About() {
 const [about, setAbout] = useState("")

 const handleSubmit = (e) => {
    e.preventDefault()
    alert(`These are my hobbies ${about}`)
 }
 return (
    <div className="App">
    <form onSubmit={handleSubmit}>
        <label>Enter Name</label>
        <input type = "text" value ={about} onChange = {(e)=>setAbout(e.target.value) } />
        <input type ="submit"/>
    </form>
    <p>About Me</p>
    <About/>
  </div>
    
  );
}