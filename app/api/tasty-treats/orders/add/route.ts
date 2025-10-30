import { NextRequest, NextResponse } from "next/server";
import { tastyApi } from "../../api";
import { ApiError } from "@/app/api/api";

export async function POST(req: NextRequest){
    try{
        const body = await req.json();
        const res = await tastyApi.post('/orders/add', body);
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