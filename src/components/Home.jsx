import React from 'react'

import "../css/Stylepage.css"

import image from "../images/image1.avif"

function Home() {
    let myname="groot academy"
  return (
    <>
        <h1>Home component</h1>

        <img src={image}/>

        <p>2+8</p> {/* html   */}
        <p>{2+8}</p> {/* js   */}

        <h1>my name is {myname}</h1>

    </>
  )
}

export {Home}