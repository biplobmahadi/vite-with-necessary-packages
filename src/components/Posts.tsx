import { Fragment, useState } from "react";
import useGetPosts from "../controllers/post/useGetPosts";
import { ISinglePost } from "../interfaces/posts";
import APIPaths from "../paths/APIPaths";
import ChildPost from "./ChildPost";
import hudai from "./hudai";

let rendered = true;
export default function Posts() {
  const { data, loading, mutate } = useGetPosts();
  const [count, setCount] = useState<number>(0);

  rendered && hudai();
  rendered = false;
  console.log("posts all", data, loading);
  return (
    <Fragment>
      {loading && "loading..."}
      {count}
      <ChildPost />
    </Fragment>
  );
}
