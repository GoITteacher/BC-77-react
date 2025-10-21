"use client";
import { deleteTask, fetchTasks } from "@/lib/tasks-service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

export default function Tasks() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");

  const { data } = useQuery({
    queryKey: ["tasks", { search: search }],
    queryFn: () => fetchTasks(search),
    refetchOnMount: false,
  });

  const mutation = useMutation({
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {data?.map((el) => {
        return (
          <li key={el.id}>
            <Link href="">{el.text}</Link>
            <button onClick={() => mutation.mutate(el.id)}>Delete</button>
          </li>
        );
      })}
    </div>
  );
}
