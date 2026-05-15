import React from 'react'
import { useParams } from 'react-router-dom'

export default function Useparams() {
    let data=useParams()
    console.log(data)
  return (
    <div>
      <h1>Use params hook component</h1>
      <h1>my name is {data.myname}</h1>
      <h1>my city name is {data.mycity}</h1>
    </div>
  )
}
