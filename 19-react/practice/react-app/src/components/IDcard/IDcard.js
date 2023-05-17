import React, { useState } from 'react';

export default function IDcard() {
    const [name, setName] = useState("")
    const [dob, setDob] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")


const handleSubmit = (e) => {
    e.preventDefault()
}

return (
    <div className="App">
        <h1>ID Card Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Date Of Birth</label>
                <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
            </div>
            <div>
                <label>Address</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Phone</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit">Submit</button>

        </form>
    </div>
)
}