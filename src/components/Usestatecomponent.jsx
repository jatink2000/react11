
import React, { useState } from "react";

function Usestatecomponent() {
    // syntex : 
    // let [current state , function ]=useState(state)

    let [name, setname] = useState("html")

    let upadtename = () => {
        setname("react")
    }

    let [color,setcolor]=useState("red")
    let updatecolor=()=>{
        setcolor("blue")
    }

    let [counter,setcounter]=useState(1)
    
    let increment=()=>{
        if(counter<10){
            setcounter(++counter)
        }
    }

    let decrement=()=>{
        if(counter>1){
            setcounter(--counter)
        }
    }

    return (
        <>
            <h1>Use state component</h1>
            <h2>hello {name}</h2>
            <button onClick={upadtename}>click here</button>


            <h1>color: {color}</h1>
            <button onClick={updatecolor}>click here for change the color value</button><br></br>

            <button onClick={decrement}>-</button> <span>{counter}</span> <button onClick={increment}>+</button>
        </>
    )
}

export { Usestatecomponent }