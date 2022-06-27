import { useQueryClient } from "react-query";
import { IPosts } from "./interfaces/posts";
import { getPosts, postPosts } from "./reactQuery/posts";

const Page = () => {
  const { data, isLoading } = getPosts();
  const { mutate: postPost } = postPosts();
  const queryClient = useQueryClient();

  const handleSubmit = () => {
    const data: IPosts = { userId: 4, body: "haha", title: "ah" };
    postPost(data, {
      onSuccess() {
        queryClient.invalidateQueries("posts");
      },
    });
  };

  return (
    <>
      <div>
        {!isLoading ? <p>{JSON.stringify(data?.data)}</p> : "loading..."}
      </div>
      <button onClick={handleSubmit}>submit</button>
    </>
  );
};

export default Page;
