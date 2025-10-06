import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TaskUpdateData } from "../types/task";
import { updateTask } from "../services/taskService";

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updatedTask: TaskUpdateData) => updateTask(updatedTask),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
