"use client"
import { useRouter } from "next/navigation";

export default function DeleteProduct(props) {
    //   console.log(props.id)
   
    const router = useRouter();
      const deleteRecord = async()=>{
        let response = await fetch("http://localhost:3000/products/"+props.id,{
            method:"delete"
        });
        response = await response.json();
        if(response.success){
            alert("Product Deleted Successfully");
            router.push("/productss");
        }
      }
      return <button onClick={deleteRecord}>Delete</button>
}