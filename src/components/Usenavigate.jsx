import react, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Usenavigate(){
    let go=useNavigate()

    let [emailvalue,setemailvalue]=useState()

    let inputvalue=(e)=>{
        setemailvalue(e.target.value)
    }

    let productbtn=()=>{
       if(emailvalue=="admin@gmail.com"){
            go("/Ourproducts",{state:"groot"})
       }
       else{
        alert("email invalid")
       }
    }

    return(
        <>
            {/* <h1>usenavigate hook : the usenavigate hook in react js return a function that allow us to chnage the route to user action or logic.  </h1> */}
            <h1>usenavigate hook</h1>

            <label>email:</label>
            <input type="email" placeholder="enter email" onChange={inputvalue}/>

            <button onClick={productbtn}>click here for our products</button>

            <Link to={"/Ourproducts"}><button>click here for our products</button></Link>

        </>
    )

}

export {Usenavigate}