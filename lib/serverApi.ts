import { cookies } from "next/headers";
import { nextApi } from "./api";

export const checkServerSession = async ()=>{
    const cookieStore = await cookies();

    const res = await nextApi.get('/auth/session', {
        headers: {
            Cookie: cookieStore.toString()
        }
    });

    return res
}