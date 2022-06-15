import { Fragment, useState } from "react";
import useGetPosts from "../controllers/post/useGetPosts";
import { ISinglePost } from "../interfaces/posts";
import hudai from "./hudai";

let rendered = true;
export default function Posts() {
  const { posts, loading } = useGetPosts();
  const [count, setCount] = useState<number>(0);

  rendered && hudai();
  rendered = false;
  console.log("posts all", posts, loading);
  return (
    <Fragment>
      {loading && "loading..."}
      {posts?.length &&
        posts.map((post: ISinglePost) => <li key={post.id}>{post.title}</li>)}
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>meo</button>
    </Fragment>
  );
}
