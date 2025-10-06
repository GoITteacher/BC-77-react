import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../services/taskService";

export const useTasks = (query: string) => {
  return useQuery({
    queryKey: ["tasks", query],
    queryFn: () => getTasks(query),
  });
};
