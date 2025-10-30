import axios from "axios";

export const tastyApi = axios.create({
    baseURL: "https://tasty-treats-backend.p.goit.global/api",
    withCredentials: true
})