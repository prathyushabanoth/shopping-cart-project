import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({cartitems}) {
    console.log(cartitems)
     let total=()=>{
         return cartitems.reduce((sum,item)=>sum+Number(item.quantity),0);
     }
    return (
        <header>
            <div>
                <Link to="/" className="brand">CartDemo</Link>
            </div>
            <div>
            <Link to="/login" className="link">Login</Link>
                <Link to="/register" className="link">Register</Link>
            
                <Link to="/cart" className="link">
                    <i className="fas fa-shopping-cart"></i>{total()}
                </Link>
            </div>
        </header>
    )
}
