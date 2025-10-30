import { nextApi } from "./api";


export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export const fetchTasks = async () => {
  const res = await nextApi.get<Task[]>("/tasks");
  return res.data;
};

export const fetchTask = async (id:string) => {
  const res = await nextApi.get<Task>(`/tasks/${id}`);
  return res.data;
};

export const createTask = async (taskText: string) => {
  const res = await nextApi.post<Task>("/tasks", { text: taskText });
  return res.data;
}