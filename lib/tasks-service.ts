import axios from 'axios';

export interface Task {
    text: string;
    completed: boolean;
    createAt: number;
    id: string;
}

const BASE_URL = 'https://62584f320c918296a49543e7.mockapi.io/tasks'

export const fetchTasks = async(title:string)=>{
    const params = {
        search: title
    }
    const res = await axios.get<Task[]>(BASE_URL, {params});
    return res.data
}

