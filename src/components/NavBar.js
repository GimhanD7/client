import { Link } from "react-router-dom"
import React from "react"
import { BsFillGearFill } from "react-icons/bs";
const NavBar = ()=>{
    return (
            <header>
                <div className="container">
                    
                        <Link to="/dashboard"><BsFillGearFill/>Dashboard Page</Link>
                        <h1>ROVISTER LERANING MANAGEMENT SYSTEM</h1>

                       
                  
                </div>
            </header>
    )
}
export default NavBar