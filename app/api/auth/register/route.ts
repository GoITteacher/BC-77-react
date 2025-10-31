import { NextRequest, NextResponse } from "next/server";
import { ApiError, globalApi } from "../../api";
import { cookies } from "next/headers";
import { parse } from "cookie";

export async function POST(req: NextRequest){
    const body = await req.json();
    try{
        const res = await globalApi.post('/auth/register', body);

        const cookieStore = await cookies();
        const setCookie = res.headers['set-cookie'];

        if(setCookie){
                // Примусово робимо масив
            const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];

            // Проходимось по масиву та парсимо кожне значення
            // щоб отримати результат у вигляді обʼєкту
            for (const cookieStr of cookieArray) {

                const parsed = parse(cookieStr);
                // Створюємо налаштування для cookies
                const options = {
                expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
                path: parsed.Path,
                maxAge: Number(parsed["Max-Age"]),
                };

                // Методом cookieStore.set додаємо кукі до нашого запиту
                if (parsed.accessToken) {
                    // cookieStore.set('імʼя ключа',  'значення токену',  додаткові налаштування)
                    cookieStore.set("accessToken", parsed.accessToken, options);
                }
                if (parsed.refreshToken) {
                    cookieStore.set("refreshToken", parsed.refreshToken, options);
                }
            }

            return NextResponse.json(res.data);
        }
        
        return NextResponse.json({error: 'Unauthorized'}, {status: 401})

    }catch(err){
        const error = err as ApiError;
        return NextResponse.json({
            error: error.response?.data.error || error.message
        },
        {
            status:error.status
        })
    }
    
}