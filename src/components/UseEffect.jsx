import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function UseEffect() {
    let [myname, setname] = useState("groot")

    let updatemyname = () => {
        setname("jatin")
    }

    let [city, setcity] = useState([])


    // run only one time
    let groot = async () => {
        let apidata = await fetch("https://dummyjson.com/products")
        let result = await apidata.json()
        let mydata = await result.products
        setcity(mydata)
    }



    useEffect(() => {
        groot()
    }, []) // 


    let go = useNavigate()
    let produtdetails = (itemdata) => {
        go("/ProductDetailsPage", { state: itemdata })
    }

    return (
        <>
            <h1>Useeffect hook component</h1>

            <h1>my name is {myname}</h1>
            <button onClick={updatemyname}>click here</button>

            {city.map((item) => {
                return (
                    <>
                        {/* <div className='box1' onClick={()=>produtdetails(item)}>
                            <img src={item.thumbnail} />

                        </div> */}


                        <Link to={`/ProductDetailsPage2/${encodeURIComponent(JSON.stringify(item))}`}>
                            <div className='box1'>
                                <img src={item.thumbnail} />
                            </div>
                        </Link>
                    </>
                )
            })}



            {/* <p>Useeffect hook : the useeffect hook is allow us to side effect in your funtion component. some example of side effect is : updating data , fetching data etc . 
            the useEffect accept two parameter first is function and second is dependency list . </p>
                useeffect(function,dependency list) */}

        </>
    )
}
