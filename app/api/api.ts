
import axios, { AxiosError } from "axios";

export const globalApi = axios.create({
    baseURL: 'https://62584f320c918296a49543e7.mockapi.io'
})

export type ApiError = AxiosError<{error: string}>;