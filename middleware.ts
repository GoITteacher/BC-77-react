import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { parse } from "cookie";
import { checkServerSession } from "./lib/serverApi";

const privateRoutes = [ '/user-info', '/posts','/profile'];
const publicRoutes = ['/sign-in', 'sign-up'];



export async function middleware(req: NextRequest){
    const {pathname} = req.nextUrl;// /profile

    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken');
    const refreshToken = cookieStore.get('refreshToken');

    const isPrivateRoute = privateRoutes.some(route=>pathname.startsWith(route))// true
    const isPublicRoute = publicRoutes.some(route=>pathname.startsWith(route))

    if(!accessToken){
        if(refreshToken){


            const data = await checkServerSession()

            const setCookie = data.headers['set-cookie'];
            
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
            
                        
                        if(isPrivateRoute){
                            return NextResponse.next({
                                headers: {
                                    Cookie: cookieStore.toString()
                                }
                            })
                        }

                        if(isPublicRoute){
                            return NextResponse.redirect(new URL('/', req.url), {
                                headers: {
                                    Cookie: cookieStore.toString()
                                }
                            })
                        }
                    }

        }

        if(isPublicRoute){
            return NextResponse.next();
        }

        if(isPrivateRoute){
            return NextResponse.redirect(new URL('/', req.url))
        }
    }


    if(isPrivateRoute){
        return NextResponse.next()
    }

    if(isPublicRoute){
        return NextResponse.redirect(new URL('/', req.url))
    }
}