import React, {useState} from 'react';

export default function Goals() {
 const [Goals, setGoals] = useState("")

 const handleSubmit = (e) => {
    e.preventDefault()
    alert(`These are my hobbies ${Goals}`)
 }
 return (
    <div className="App">
    <form onSubmit={handleSubmit}>
        <label>Enter Name</label>
        <input type = "text" value ={Goals} onChange = {(e)=>setGoals(e.target.value) } />
        <input type ="submit"/>
    </form>
    <div className ="Goals">
        <ul>
          <li>{Goals1}</li>
          <li>{Goals2}</li>
          <li>{Goals3}</li>
        </ul>

    <Goals/>
  </div>
    
  );
}