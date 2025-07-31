"use client"
import { useState } from "react"
import "./style.css"

export default function Page() {
    const[name,setName] = useState("")
    const[price,setPrice] = useState("")
    const[color,setColor] = useState("")
    const[company,setCompany] = useState("")
    const[category,setCategory]=useState("")

    const addProduct=async()=>{
         console.log(name,price,color,company,category)
         let result = await fetch("http://localhost:3000/products",{
            method:"POST",
            body:JSON.stringify({name,price,color,company,category})
         })
         result = await result.json()
         if(result.success){
            alert("Product Added Successfully")
         }
    }
    return(
        <div>
            <h1>Add Products</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Product Name" className="input"></input>
            <input type="text" onChange={(e)=>setPrice(e.target.value)} placeholder="Product Price" className="input"></input>
            <input type="text" onChange={(e)=>setColor(e.target.value)} placeholder="Product Color" className="input"></input>
            <input type="text" onChange={(e)=>setCompany(e.target.value)} placeholder="Product Company" className="input"></input>
            <input type="text" onChange={(e)=>setCategory(e.target.value)} placeholder="Product Category" className="input"></input>
            <button className="btn" onClick={addProduct}>Add Product</button>
        </div>
    )
}