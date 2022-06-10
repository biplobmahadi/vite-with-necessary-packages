import { Fragment } from "react";
import useGetPosts from "../controllers/post/useGetPosts";
import { ISinglePost } from "../interfaces/posts";

export default function Posts() {
  const { posts, loading } = useGetPosts();

  console.log("posts all", posts, loading);
  return (
    <Fragment>
      {loading && "loading..."}
      {posts?.length &&
        posts.map((post: ISinglePost) => <li key={post.id}>{post.title}</li>)}
    </Fragment>
  );
}
