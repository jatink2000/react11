import react, { useState } from "react";

function Multipleinput() {

    let [inputsdata,setinputsdata]=useState({})


    let groot=(e)=>{
        setinputsdata(
          { ...inputsdata,[e.target.name]:e.target.value}
        )
    }


    return (
        <>
            <h1>Multiple input component</h1>

            <label>enter your name:</label>
            <input type='text' placeholder='enter name' name="fullname" onChange={groot}  />
            <p>your name is : {inputsdata.fullname}</p>


            <label>enter your address:</label>
            <input type='text' placeholder='enter address' name="address" onChange={groot}  />
            <p>your address is : {inputsdata.address}</p>


            <label>enter your email:</label>
            <input type='email' placeholder='enter email' name="email" onChange={groot}  />
            <p>your email is : {inputsdata.email}</p>


            <label>enter your password:</label>
            <input type='password' placeholder='enter password' name="password" onChange={groot}  />
            <p>your password is : {inputsdata.password}</p>


            <label>enter your number:</label>
            <input type='number' placeholder='enter number' name="number" onChange={groot}  />
            <p>your number is : {inputsdata.number}</p>
        </>
    )
}

export { Multipleinput }