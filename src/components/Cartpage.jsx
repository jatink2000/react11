import React, { useState } from 'react'

export default function Cartpage() {

    let cartitems = JSON.parse(localStorage.getItem("cartdata")) || []

    let [quantity, setquantity] = useState(1)

    let increment = () => {
        if (quantity < 10) {
            setquantity(++quantity)
        }
    }
    let decrement = () => {
        if (quantity > 1) {
            setquantity(--quantity)
        }
    }

    return (
        <div>
            <h1>cartpage</h1>
            {cartitems.map((cart) => {
                return (
                    <>
                        <div>
                            <img src={cart.imageurl} />
                            <h3>{cart.productname}</h3>

                            <button onClick={decrement}> - </button> <span> {quantity} </span> <button onClick={increment}> + </button><br></br>
                            <button>Remove</button>
                        </div>


                    </>
                )
            })}
        </div>
    )
}
