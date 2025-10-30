import { NextRequest, NextResponse } from "next/server";
import { tastyApi } from "../api";

export async function GET(req: NextRequest){
    const url = new URL(req.url);
    
    const urlParams = url.searchParams;
    const params = Object.fromEntries(urlParams.entries())

    const res = await tastyApi.get(`/recipes`, {params})
    return NextResponse.json(res.data)
}

