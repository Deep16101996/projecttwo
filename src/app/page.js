
"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const[file,setFile]=useState()
  const onSubmit=async(e)=>{
    e.preventDefault();
    console.log(file)
    const data = new FormData();
    data.set('file',file);
    let result = await fetch("upload",{
      method:"POST",
      body:data
    })
    console.log(result)
    if(result.success){
      alert("File uploaded successfully")
    }
  }

  return (
    <div className={styles.page}>
      <Link href="/productss" >Products</Link>
      <Link href="/addproduct">Add Product</Link>

      <h1>Upload Image</h1>
      <form onSubmit={onSubmit}>
        <input type="file" name="file" onChange={(e)=>setFile (e.target.files?.[0])}></input>
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
}
