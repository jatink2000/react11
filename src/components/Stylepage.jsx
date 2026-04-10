import React from "react";

import "../css/Stylepage.css" // css link 

import myimage1 from "../images/image1.avif"

function Stylepage() {
    let mystyle = { color: "blue", background: "red", fontSize: "30px" }
    return (
        <>
            <h1 className="groot">Style page component</h1>
            <h1>Style page component</h1>

            {/* css : 
            1. inline css 
            2. js object 
            3. external css  */}

            {/* 1. inline css   */}
            <h2 style={{ color: "red", background: "green", fontSize: "50px" }}>hello groot</h2>


            {/* 2. js object  :  */}
            <p style={mystyle}>hello react js</p>
            <p style={mystyle}>hello react js</p>


            {/* 3. external css  :  */}

            <h4>hello html</h4>


            <img src={myimage1} alt="myimage"/>



            <img src={myimage1} alt="myimage"/>



            <img src={myimage1} alt="myimage"/>


        </>
    )
}

export { Stylepage }