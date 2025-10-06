import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTask } from "../services/taskService";
import { NewTaskData } from "../types/task";

export const useCreateTask = (onSuccess: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (taskData: NewTaskData) => addTask(taskData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      onSuccess();
    },
  });
};
