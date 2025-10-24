import axios from "./serverConfig";

export interface TodoItem{
    id: number;
    todo: string;
    completed: boolean;
    userId: string;
}

interface GetTodosRes {
    todos: TodoItem[];
    limit: number;
    skip:number;
    total:number;
}

export const getTodos = async (userId: string)=>{
    const res = await axios.get<GetTodosRes>(`/todos/user/${userId}`);
    return res.data;
}
