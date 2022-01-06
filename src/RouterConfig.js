import React from 'react'
import { Routes,Route } from "react-router-dom";
import ProductList from "./ProductList/ProductList";
import CartList from "./CartList/CartList";
import Register from "./Register/Register";
import Login from "./Login/Login";
export default function RouterConfig({pitems,addProduct,cartitems,removeProduct}) {
    // console.log(pitems)
    // console.log(citems)
    return (
        <div>
        <Routes>
            <Route path="/" element={<ProductList pitems={pitems} addProduct={addProduct}/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/cart" element={<CartList cartitems={cartitems} addProduct={addProduct} removeProduct={removeProduct}/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        </div>
    )
}
