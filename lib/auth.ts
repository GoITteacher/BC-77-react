
import { User } from "@/types/user";
import { nextApi } from "./api";



export interface RegisterRequest {
    email:string;
    password: string;
}

interface CheckSessionResponse {
    success: boolean;
}


export const register = async (data:RegisterRequest)=>{
    const res = await nextApi.post<User>('/auth/register', data);
    return res.data
}

export const login = async (data:RegisterRequest)=>{
    const res = await nextApi.post<User>('/auth/login', data);
    return res.data
}

export const logout = async ()=>{
    const res = await nextApi.post<User>('/auth/logout');
    return res.data
}


export const checkSession = async ()=>{
    const res = await nextApi.get<CheckSessionResponse>('/auth/session');
    return res.data.success
}


export const getMe = async ()=>{
    const res = await nextApi.get<User>('/auth/get-me');
    return res.data
}