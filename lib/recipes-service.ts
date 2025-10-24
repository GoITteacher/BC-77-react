import axios from "./serverConfig";

export interface RecipeItem {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
}

interface SearchRecipesRes{
    recipes: RecipeItem[];
    limit: number;
    skip:number;
    total:number;
}
export const searchRecipes = async (q:string)=>{
    const params = {q};
    const res = await axios.get<SearchRecipesRes>('/recipes/search', {params})
    return res.data
}
export const getRecipeDetails = async (id:string)=>{
    const res = await axios.get<RecipeItem>(`/recipes/${id}`)
    return res.data
}