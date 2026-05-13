import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Uselocation() {
  let loc=useLocation()
  console.log(loc)

  return (
    <div>
      <h1>Use location hook: </h1>
      <h1>{loc.pathname}</h1>
      <h1>my name is {loc.state}</h1>
    </div>
  )
}
