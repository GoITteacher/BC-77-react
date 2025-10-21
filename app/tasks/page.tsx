import { fetchTasks } from "@/lib/tasks-service";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query";
import Tasks from "./Tasks";

export default async function TasksPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tasks", { search: "" }],
    queryFn: () => fetchTasks(""),
  });

  return (
    <div>
      <h1>Tasks</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Tasks />
      </HydrationBoundary>
    </div>
  );
}
