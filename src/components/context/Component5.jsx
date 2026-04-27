import React, { useContext } from 'react'
import { city, myname } from './Component1'

export default function Component5() {
    let mynamevalue=useContext(myname)
    let cityvalue=useContext(city)
  return (
    <>
        <h1>Component5</h1>
        <h1>my name is {mynamevalue}</h1>
        <h1>my city name is {cityvalue}</h1>
    </>
  )
}
