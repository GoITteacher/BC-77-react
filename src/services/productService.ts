import axios from "axios";
import { Product } from "../types/product";

interface GetProductsRes {
    page: string;
    perPage: string;
    totalPages: number;
    results: Product[]
}

export const getProducts = async (query: string, currentPage: number)=>{
    const BASE_URL = 'https://food-boutique.b.goit.study/api';
    const END_POINT = '/products';
    const url = BASE_URL + END_POINT;

    const params = {
        keyword: query,
        page: currentPage,
        limit: 9
    }

    const res = await axios.get<GetProductsRes>(url, {params});
    return res.data;
}