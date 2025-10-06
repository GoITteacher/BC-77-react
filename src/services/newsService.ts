import axios from "axios";
import { NewsArticle } from "../types/newsArtilce";


interface SearchArticlesRes{
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}

export const searchArticles= async (query: string, page:string)=>{
    const baseUrl = 'https://newsapi.org/v2';
    const endPoint = '/everything';
    const url = baseUrl + endPoint;

    const params = {
        q: query,
        page: page,
        apiKey: `${import.meta.env.VITE_NEWS_API_KEY}`,
        pageSize: 5,
    }

    const res = await axios.get<SearchArticlesRes>(url, {params});
    return res.data;
}