import React from "react";

import "../css/Studentsdata.css"

import { students } from "../data/Students";

function Studentsdata(){
    return(
        <>
            <h1>Students data component</h1>

            <table border={1}>
                <tr>
                    <th>student name</th>
                    <th>image</th>
                    <th>city</th>
                    <th>email</th>
                    <th>course</th>
                    <th>contact numbar</th>
                </tr>

                {students.map((items)=>{
                    return(
                        <>
                            <tr>
                                <td>{items.studentname}</td>
                                <td><img src={items.image}/></td>
                                <td>{items.city}</td>
                                <td>{items.email}</td>
                                <td>{items.course}</td>
                                <td>{items.contactnumber}</td>
                                <td>add cart</td>
                            </tr>
                        </>
                    )
                })}

            </table>


        </>
    )
}

export {Studentsdata}



// products : name , image , price , des , unit 