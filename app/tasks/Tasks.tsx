"use client";

import Lang from "@/components/Lang/Lang";
import { fetchTasks } from "@/lib/tasks-api";
import { useLangStore } from "@/stores/langStore";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function Tasks() {
  const { data: tasks } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
    refetchOnMount: false,
  });

  return (
    <div>
      <Lang />
      <ul>
        {tasks?.map((task) => (
          <li key={task.id}>
            <Link href={`/tasks/${task.id}`}>{task.text}</Link>
            <button>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
