import { cookies } from "next/headers";
import {  NextResponse } from "next/server";
import { globalApi } from "../../api";

export async function POST(){

    const cookieStore = await cookies();

    await globalApi.post('/auth/logout', null, {
       headers: {
        Cookie: cookieStore.toString()
       }
    })

    cookieStore.delete('accessToken');
    cookieStore.delete('refreshToken');

    return NextResponse.json({message: "Logged out successfully"})
}