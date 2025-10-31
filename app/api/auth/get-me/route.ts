import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { globalApi } from "../../api";


export async function GET(){
    const cookieStore = await cookies();

    const apiRes = await globalApi.get('/users/me', {
        headers: {
        Cookie: cookieStore.toString()
        }
    })


    return NextResponse.json(apiRes.data);
    
}