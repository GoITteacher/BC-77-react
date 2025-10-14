
import { useDebounce } from "use-debounce";
import { getTasks } from "../services/taskService";
import { useQuery } from "@tanstack/react-query";


export const useTasks = (query: string)=>{
  const [debounceQuery] = useDebounce(query, 300);

  const tasksQuery = useQuery({
    queryKey: ["tasks", debounceQuery],
    queryFn: () => getTasks(debounceQuery),
  });

  return tasksQuery
}
