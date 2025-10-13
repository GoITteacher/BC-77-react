import Axios from "axios";
import { Book, CreatedBook, UpdatedBook } from "../types/book";

const axios = Axios.create({
    baseURL: "http://localhost:3000"
})

const sleep = (ms: number)=> new Promise(res=>setTimeout(res,ms));

export const getBooks = async ()=>{
    const res = await axios.get<Book[]>('/books');
    await sleep(2000)
    return res.data
}
export const createBook = async (data: CreatedBook)=>{
    const res = await axios.post<Book>('/books', data);
    await sleep(2000)
    return res.data
}
export const updateBook = async (data: UpdatedBook)=>{
    const res = await axios.patch<Book>(`/books/${data.id}`, data);
    return res.data
}
export const deleteBook = async (id: string)=>{
    const res = await axios.delete<Book>(`/books/${id}`);
    return res.data
}

