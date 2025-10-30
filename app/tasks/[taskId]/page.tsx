import { fetchTask } from "@/lib/tasks-api";

export default async function SingleTask({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) {
  const { taskId } = await params;
  const task = await fetchTask(taskId);
  return (
    <div>
      <h1>Single task {taskId} page.</h1>
      <h2>{task.text}</h2>
    </div>
  );
}
