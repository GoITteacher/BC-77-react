import axios from "axios";
import { Article } from "../types/article";

interface ArticlesResponse {
  hits: Article[];
}


export const getArticles = async (topic: string)=>{
    const result = await axios.get<ArticlesResponse>(
      `https://hn.algolia.com/api/v1/search?query=${topic}`
    );
    return result.data.hits
}