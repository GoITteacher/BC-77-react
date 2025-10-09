import axios from "axios";
import { Recipe } from "../types/recipe";

interface GetRecipesRes {
    page: string;
    perPage: string;
    totalPages: number;
    results: Recipe[]
}

export const getRecipes = async (title: string, currentPage: number)=>{
    const BASEURL = 'https://tasty-treats-backend.p.goit.global/api';
    const ENDPOINT = '/recipes?'
    
    const url = BASEURL + ENDPOINT;

    const params = {
        page: currentPage,
        limit: 9,
        title: title
    }

    const res = await axios.get<GetRecipesRes>(url, {params});
    return res.data
}