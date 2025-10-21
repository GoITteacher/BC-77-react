import { fetchPosts } from "@/lib/posts-service";
import Link from "next/link";

export default async function Posts() {
  const items = await fetchPosts();
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {items.map((el) => {
          return (
            <li key={el.id}>
              <Link href={`/posts/${el.id}`}>{el.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// localhost:3000/posts/1/2 localhost:3000/posts/[postId]/[tagId]
// localhost:3000/posts/2 localhost:3000/posts/[postId]/[tagId]
// localhost:3000/posts/3 localhost:3000/posts/[postId]/[tagId]
// localhost:3000/posts/4 localhost:3000/posts/[postId]/[tagId]
