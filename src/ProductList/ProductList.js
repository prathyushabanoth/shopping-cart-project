import React from 'react';
import  "./ProductList.css";

export default function ProductList({pitems,addProduct}) {
    console.log(pitems)
    return (
        <div className="wrapper">
            {
                pitems.map((product,ind)=>{
                    return <div className="products" key={ind}>
                        <img src={product.image} alt={product.title} className="product-img"/>
                        <div>
                           <span className="item">Title:</span>{product.title}
                        </div>
                        <div>
                        <span className="item">category</span>{product.category}
                        </div>
                        <div>
                        <span className="item">Price </span>${product.price}
                        </div>
                        <div>
                            <button type="button" className="product-btn" onClick={()=>addProduct(product)}>AddToCart</button>
                        </div>
                    </div>
                })
            }
            
        </div>
    )
}
