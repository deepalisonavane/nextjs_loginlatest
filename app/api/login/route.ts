import { NextResponse } from "next/server"
export const GET = async(req:Request , res:Response)=>{
    console.log("GET request")
 }

 export const POST = async(request:Request)=>{
  const data = await request.json()
return NextResponse.json ({
   data
})  
}