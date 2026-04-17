import React from 'react'
import { products } from '../data/Products'

export default function Ourproducts() {

    let addtocart=(data)=>{
        let alreadyitems=JSON.parse(localStorage.getItem("cartdata"))||[]
        alreadyitems.push(data)
        localStorage.setItem("cartdata",JSON.stringify(alreadyitems))
    }


    return (
        <>
            <h1>Our products</h1>
            <table border={1}>
                <tr>
                    <th>name</th>
                    <th>image</th>
                    <th>price</th>
                    <th>description</th>
                    <th>unit</th>
                    <th>Action</th>
                </tr>

                {products.map((item) => {
                    return (
                        <>
                            <tr>
                                <td>{item.productname}</td>
                                <td><img src={item.imageurl}/></td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>{item.unit}</td>
                                <td><button onClick={()=>addtocart(item)}>Add To Cart</button></td>
                            </tr>
                        </>
                    )
                })}

            </table>
        </>
    )
}
