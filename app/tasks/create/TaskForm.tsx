"use client";

import { createTask } from "@/lib/tasks-api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const TaskForm = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      router.push("/tasks");
    },
  });

  const handleSubmit = (formData: FormData) => {
    const task = formData.get("task") as string;
    mutation.mutate(task);
  };

  const handleCancelBtnClick = () => {
    router.push("/tasks");
  };

  return (
    <form action={handleSubmit}>
      <input type="text" name="task" placeholder="Task description" />
      <button type="submit">Create Task</button>
      <button type="button" onClick={handleCancelBtnClick}>
        Cancel
      </button>
    </form>
  );
};

export default TaskForm;
