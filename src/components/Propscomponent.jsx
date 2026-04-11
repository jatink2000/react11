import React from "react";

function Propscomp(props){
    console.log(props)
    return(
        <>
            <h1>Props component</h1>
            <h1>my name is {props.myname} and my second name is {props.mysecondname}. </h1>

            <img src={props.image}/>
        </>
    )
}

export {Propscomp}