import useGetPosts from "../controllers/post/useGetPosts";

export default function ChildPost() {
  const { data, loading, mutate } = useGetPosts();
  console.log("posts all in child", data, loading);
  return (
    <div>
      <button onClick={() => mutate("/photos")}>meo</button>
    </div>
  );
}
