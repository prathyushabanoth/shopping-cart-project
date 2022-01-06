import React from 'react'
import "./CartList.css";
import { useNavigate } from "react-router";
export default function CartList({cartitems,addProduct,removeProduct}) {
    let navigation=useNavigate();
    console.log(cartitems);
    let total=cartitems.reduce((sum,item)=>sum+item.price*item.quantity,0);
    let orderedItems=cartitems.reduce((sum,item)=>sum+item.quantity,0);
    let navigate=()=>{
        navigation("/login")
    }
    return (
        <>
        <div className="cart-header">
            <h2>CartItems</h2>
            {
                (cartitems.length===0) && (<div>No items are added to the cart</div>)
            }
        </div>
        <div>
                {
                    cartitems.map((citem,ind)=>{
                        return <div key={ind} className="cart-list">
                                <img src={citem.image} alt={citem.title} className="cart-img"/>
                                <div>{citem.title}</div>
                                <div>${citem.price}</div>
                                <div>{citem.quantity}</div>
                                <div>${citem.price*citem.quantity}</div>
                                <div>
                                    <button type="button" onClick={()=>addProduct(citem)}>+</button>
                                    <button type="button" onClick={()=>removeProduct(citem)}>-</button>
                                    </div>
                            </div>
                    })
                }
        </div>
        <div>
            <div>
            orderedItems {orderedItems}
            Total ${total}
            </div>
            <div>
            <button type="button" onClick={navigate}>Proceed</button>
            </div>
        </div>
        </>
    )
}
