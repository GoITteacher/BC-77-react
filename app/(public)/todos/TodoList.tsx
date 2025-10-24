"use client";

import { getTodos } from "@/lib/todos-service";
import { useQuery } from "@tanstack/react-query";
import css from "./TodoList.module.css";
import { useState } from "react";

export default function TodoList() {
  const [userId, setUserId] = useState("");

  const { data } = useQuery({
    queryKey: ["todos", { userId: userId }],
    queryFn: () => getTodos(userId),
    refetchOnMount: false,
    enabled: Boolean(userId),
  });

  const todoItems = data?.todos || [];
  const completedCount = todoItems.filter((item) => item.completed).length;
  const remainingCount = todoItems.length - completedCount;

  return (
    <section className={css.wrapper}>
      <header className={css.header}>
        <h2 className={css.title}>Todo list</h2>
        <div className={css.counters}>
          <span className={css.counter}>
            Total <strong>{todoItems.length}</strong>
          </span>
          <span className={`${css.counter} ${css.counterPositive}`}>
            Done <strong>{completedCount}</strong>
          </span>
          <span className={`${css.counter} ${css.counterMuted}`}>
            Remaining <strong>{Math.max(remainingCount, 0)}</strong>
          </span>
        </div>
      </header>

      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      {todoItems.length === 0 ? (
        <p className={css.empty}>No tasks yet — add one to get started.</p>
      ) : (
        <ul className={css.list}>
          {todoItems.map((el) => {
            return (
              <li
                className={`${css.item} ${el.completed ? css.itemCompleted : ""}`}
                key={el.id}
              >
                <input
                  className={css.checkbox}
                  type="checkbox"
                  checked={el.completed}
                  disabled
                  aria-label={
                    el.completed ? "Completed task" : "Outstanding task"
                  }
                />
                <p
                  className={`${css.text} ${el.completed ? css.textCompleted : ""}`}
                >
                  {el.todo}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
