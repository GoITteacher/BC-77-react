import { NextRequest, NextResponse } from "next/server";
import { tastyApi } from "../../api";

type Params = {
    params: Promise<{id:string}>
}

export async function GET(req: NextRequest, {params}:Params ){
    const {id} = await params;
    const res = await tastyApi.get(`/recipes/${id}`)
    return NextResponse.json(res.data)
}

