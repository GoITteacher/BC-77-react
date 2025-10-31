import axios, { AxiosError } from "axios";

export type ApiError = AxiosError<{error:string}>;

export const globalApi = axios.create({
    baseURL: 'https://notehub-api.goit.study',
    withCredentials: true
})