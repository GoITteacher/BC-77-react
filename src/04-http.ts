/**
 * Типізація HTTP-запитів з Axios
 *
 * https://dummyjson.com/docs/posts
 */

import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

interface GetPostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

const getAllPosts = async (): Promise<GetPostsResponse> => {
  const response = await axios.get<GetPostsResponse>(
    "https://dummyjson.com/posts"
  );
  return response.data;
};

const getPostById = async (postId: number): Promise<Post> => {
  const response = await axios.get<Post>(
    `https://dummyjson.com/posts/${postId}`
  );
  return response.data;
};

interface NewPostData {
  title: string;
  body: string;
  tags: string[];
}

const createPost = async (newPost: NewPostData): Promise<Post> => {
  const response = await axios.post<Post>(
    "https://dummyjson.com/posts/add",
    newPost
  );
  return response.data;
};

interface HttpResponse<T> {
  data: T;
  code: number;
}

const getAllPostsData: HttpResponse<Post> = {
  data: {
    id: 1,
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    tags: ["history", "american", "crime"],
    reactions: {
      likes: 192,
      dislikes: 25,
    },
    views: 305,
    userId: 121,
  },
  code: 200,
};

const createUserData: HttpResponse<number> = {
  data: 5,
  code: 201,
};
