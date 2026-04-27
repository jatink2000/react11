import React, { useContext } from 'react'
import Component5 from './Component5'
import { city } from './Component1'

export default function Component4() {
  let cityvalue=useContext(city)
  return (
    <div>
        <h1>Component4</h1>
        <h1>my city name is {cityvalue}</h1>
        <Component5/>
      
    </div>
  )
}
