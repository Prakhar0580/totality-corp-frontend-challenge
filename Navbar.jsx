import React from 'react'
import Home from "./Home";
import Cart from "./Cart";
import {NavLink} from "react-router-dom";
function Navbar(){
  return (
    <div>
    <nav>
        <ul>
            <li>
                <NavLink to="/" element={<Home/>}/>
            </li>
            <li>
                <NavLink to="/cart" element={<Cart/>}/>
            </li>
        </ul>
    </nav>
    </div>
  );
}

export default Navbar