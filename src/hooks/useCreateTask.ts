import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addTask } from "../services/taskService"
import { NewTaskData } from "../types/task"

export const useCreateTask = (onSuccess: ()=>void)=>{
    const queryClient = useQueryClient();

    const createTaskMutation = useMutation({
        mutationFn: (data: NewTaskData)=>addTask(data),
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: ['tasks']})
            onSuccess();
        }
    })

    return createTaskMutation
}