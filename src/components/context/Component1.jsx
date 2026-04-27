import React, { createContext } from 'react'
import Component2 from './Component2'

let myname = createContext() // 
let city = createContext()

export default function Component1() {
    return (
        <div>
            <h1>Component1</h1>
            <myname.Provider value={"Groot academy"}>
                <city.Provider value={"Jaipur"}>
                    <Component2 />
                </city.Provider>
            </myname.Provider>

        </div>
    )
}

export { myname , city }
