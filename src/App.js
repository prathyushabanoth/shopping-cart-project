import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import RouterConfig from "./RouterConfig";

function App() {
  let [products,setProducts]=useState([]);
  let [citems,setCitems]=useState([]);
  useEffect(()=>{
    let fetchProducts=async()=>{
        let apiData=await fetch("http://localhost:3500/products");
        let data=await apiData.json();
        setProducts(data)
    }
    fetchProducts();
  },[]);
  let addProduct=(item)=>{
      //console.log(item);
      const productExist=citems.find(citem=>citem.id===item.id)
      if(productExist){
        setCitems(citems.map(citem=>citem.id===item.id?{...citem,quantity:productExist.quantity+1}:citem))
      }
      else{
      setCitems([...citems,{...item,quantity:1}])
      }
  }
  let removeProduct=(item)=>{
    const productExist=citems.find(citem=>citem.id===item.id);
    if(productExist.quantity===1){
      setCitems(citems.filter((citem)=>citem.id===item.id))
    }
    else{
      setCitems(citems.map((citem)=>{
        return citem.id===item.id ? {...productExist,quantity:productExist.quantity-1}:citem
      }))
    }
  }
  // console.log(products)
  console.log(citems)
  return (
        <BrowserRouter>
        <Header cartitems={citems}/>
        <RouterConfig pitems={products} addProduct={addProduct} cartitems={citems} removeProduct={removeProduct}/>
        <Footer/>
        </BrowserRouter>
  );
}

export default App;
