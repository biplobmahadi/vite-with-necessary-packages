import { getPosts } from "./reactQuery/posts";

const Page2 = () => {
  const { data, isLoading, isError, error } = getPosts();
  return (
    <div>{!isLoading ? <p>{JSON.stringify(data?.data)}</p> : "loading..."}</div>
  );
};

export default Page2;
