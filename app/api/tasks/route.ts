import { NextResponse } from "next/server";
import { ApiError, globalApi } from "../api";

export async function GET(){
    try{
        const res = await globalApi.get('/tasks');
        return NextResponse.json(res.data);
    }catch(err){
        const error = err as ApiError;
        return NextResponse.json({
            error: error.response?.data.error || error.message
        }, {
            status: error.status
        })
    }
    
}

export async function POST(){
    
}