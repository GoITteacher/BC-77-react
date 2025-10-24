import axios from "./serverConfig";

export interface Product{
    id:number;
    title: string;
    category: string;
}

export interface ProductDetails{
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage:number;
  rating: number;
  stock:number;
  brand: string;
  sku:  string;
  weight: number;
  thumbnail:string;
  images: string[];
}

interface GetProductByCategoryRes {
    products: Product[],
    skip: number;
    limit: number;
    total: number;
}

export const getCategoryList = async ()=>{
    const res = await axios.get<string[]>('/products/category-list');
    return res.data;
}

export const getProductByCategory = async (category:string)=>{
    const res = await axios.get<GetProductByCategoryRes>(`/products/category/${category}`);
    return res.data;
}

export const getProductDetails = async (productId:string)=>{
    const res = await axios.get<ProductDetails>(`/products/${productId}`);
    return res.data;
}