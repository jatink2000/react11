import React, { useState } from 'react'

export default function Inputstate() {
    let [name,setname]=useState()

    let namevalue=(e)=>{
        setname(e.target.value)
    }


    let [email,setemail]=useState()

    let emailvalue=(e)=>{
        setemail(e.target.value)
    }

  return (
    <div>
        <h1>Input state component</h1>

        <label>enter your name:</label>
        <input type='text' placeholder='enter name' onChange={namevalue}/>
        <p>your name is : {name}</p>

        <label>enter your email:</label>
        <input type='email' placeholder='enter email' onChange={emailvalue}/>
        <p>your email is : {email}</p>
    </div>
  )
}
