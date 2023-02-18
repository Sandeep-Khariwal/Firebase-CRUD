import React from "react"
import NavBar from "./NavBar"


const Assignment1 = ({setLogin}) =>{
    return(
        <div>
         <NavBar/>
        <div className="assignment1" >
            <h1>This is CRUD Operation Assignment Using Firebase</h1>
            <button onClick={()=>setLogin(false)} >Log out</button>
        </div>

        </div>
    )
}

export default Assignment1