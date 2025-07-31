import { connectionSrc } from "@/lib/db";
import {Product} from "@/lib/model/product"
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    // await mongoose.connect(connectionSrc)
    // const data =await Product.find()
    // console.log(data)

    // return NextResponse.json({result:data})
    let data = []
    let success=true;
    try {
        await mongoose.connect(connectionSrc)
        data = await Product.find()
    } catch (error) {
        data = { result: "error" }
        success=false
    }
    return NextResponse.json({ result: data, success})
}

export async function POST(request) {
    await mongoose.connect(connectionSrc);
    // let product = new Product({
    //     name:"Iphone 15 pro max",
    //     price:"45000",
    //     color:"black",
    //     company:"Apple",
    //     category:"Mobile"
    // })

    const payload = await request.json();
    await mongoose.connect(connectionSrc);
    let product = new Product(payload);

    const result = await product.save()
    return NextResponse.json({ result:result, success:true })
    
}