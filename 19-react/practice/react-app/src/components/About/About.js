import React, {useState} from 'react';

export default function About(props) {
 const [fName, age] = props

 const handleSubmit = (e) => {
    e.preventDefault()
    alert(`These are my hobbies ${about}`)
 }
 return (
    <div className="About">
    <form onSubmit={handleSubmit}>
        <label>Enter Name</label>
        <input type = "text" value ={about} onChange = {(e)=>setAbout(e.target.value) } />
        <input type ="submit"/>
    </form>
    <h1> Hi, my name is, </h1>
    <About/>
  </div>
    
  );
}