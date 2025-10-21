import { fetchPostById } from "@/lib/posts-service";
import PostDetails from "./PostDetails";
import BackButton from "./BackButton";

interface Props {
  params: Promise<{ postId: string }>;
}

export default async function PostDetailsPage({ params }: Props) {
  const { postId } = await params;
  const postInfo = await fetchPostById(+postId);
  return (
    <div>
      <BackButton />
      <h1>PostDetails {postId}</h1>
      <h2>{postInfo.title}</h2>
      <p>{postInfo.body}</p>
      <hr />
      <PostDetails />
    </div>
  );
}

/* 
app/shop/[slug]/page.js  /shop/1   Promise<{ slug: '1' }>
app/shop/[category]/[item]/page.js	 /shop/1/2 Promise<{ category: '1', item: '2' }>
*/
