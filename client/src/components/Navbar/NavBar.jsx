import React from "react";
import {Link} from "react-router-dom";

const NavBar = () =>{
    return(
        <div>
            <ul>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/cart"}>Carrito</Link></li>
                <li><Link to={"/profile"}>Perfil</Link></li>
            </ul>
        </div>
    )
}
export default NavBar;
