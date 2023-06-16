import React from "react";
import './fruittypes.css';

export default function Fruittypes ({fruit}){
    return (
        <div className="fruit">
            <img src={fruit.image} alt={fruit.name}/>
            <h2>{fruit.name}</h2>
            <p>Taste: {fruit.taste}</p>
            <p>Grow on trees?: {fruit.growsontrees ? "Yes" : "No"}</p>
            <p>Country: {fruit.country}</p>
        </div>
    )
}

