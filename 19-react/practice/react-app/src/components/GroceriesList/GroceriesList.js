import { useState } from "react";
import GroceriesListItem from "../GroceriesListItem/GroceriesListItem"

export default function GroceriesList() {
    const [list, setList] = useState([{ name: "Banana", count: 3 }, { name: "apple", count: 5 }, { name: "orange", count: 8 }])

    const listArray = list.map(item => {
        return <h1>{item}</h1>
    })
    return (
        <div className="groceriesList">
            <h1>GroceriesList</h1>
            {list.map((item, i) => {
                return (
                    <GroceriesListItem key={i} item={item}/>
                )
            })}
        </div>
    )
}