export interface CreatedBook{
   "price": number;
    "pages": number;
    "author": string;
    "title": string;
    "description": string;
    "createdAt": string; 
}

export interface UpdatedBook{
    id: string,
   "price"?: number;
    "pages"?: number;
    "author"?: string;
    "title"?: string;
    "description"?: string;
}

export interface Book{
    "id": string;
    "price": number;
    "pages": number;
    "author": string;
    "title": string;
    "description": string;
    "createdAt": string;
}