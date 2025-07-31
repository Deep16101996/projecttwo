"use client"
import { useEffect, useState } from "react"
// import "./style.css"
import Link from "next/link"

export default function Page(props) {
    const[name,setName] = useState("")
    const[price,setPrice] = useState("")
    const[color,setColor] = useState("")
    const[company,setCompany] = useState("")
    const[category,setCategory]=useState("")
       
     useEffect(()=>{
        getProductDetail()
     },[])

      const getProductDetail = async () => {
         let productId = props.params.editproduct;
         let productData = await fetch("http://localhost:3000/products/"+productId)
         productData=await productData.json()
         if(productData.success){
            let result = productData.result;
            setName(result.name)
            setPrice(result.price)
            setColor(result.color)
            setCompany(result.company)
            setCategory(result.category)
         }
      }

        const updateProduct = async ()=>{
            let productId = props.params.editproduct;
            let data = await fetch("http://localhost:3000/products/"+productId,{
                method:"PUT",
                body:JSON.stringify({name,price,color,company,category})
            })
            data = await data.json();
            if(data.result){
                alert("Product updated successfully")
            }
        }
    
    return(
        <div>
            <h1>Update Products</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Product Name" className="input"></input>
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Product Price" className="input"></input>
            <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="Product Color" className="input"></input>
            <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Product Company" className="input"></input>
            <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Product Category" className="input"></input>
            <button className="btn" onClick={updateProduct}>Update Product</button>
            <Link href={"/products"}>Go to Product List</Link>
        </div>
    )
}