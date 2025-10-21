"use client";

import { useParams } from "next/navigation";

const PostDetails = () => {
  const { postId } = useParams();
  return <div>PostDetails {postId}</div>;
};

export default PostDetails;
