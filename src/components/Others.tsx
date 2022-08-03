import { useEffect } from "react";
import useAxiosPrivate from "../axios/hooks/usePrivateAxios";
import useRefreshToken from "../axios/hooks/useRefreshToken";
import useGetPosts from "../controllers/post/useGetPosts";
import { IPostPayload, ISinglePost } from "../interfaces/posts";
import APIPaths from "../paths/APIPaths";

export default function Others() {
  const { privateDelete, privateGet, privatePost, privatePut } =
    useAxiosPrivate();

  const { data, loading } = useGetPosts();
  console.log("posts all in others", data, loading);
  const handlePost1 = async () => {
    const res = await privatePost<ISinglePost, IPostPayload>(
      APIPaths.Post.All,
      {
        userId: 12,
        title: "hi tfhere",
        body: "kiref",
      }
      // { activateAbort: false }
    );
    console.log("res1,", res);
  };
  const handlePut = async () => {
    const res = await privatePut<ISinglePost, IPostPayload>(
      APIPaths.Post.ById(1),
      {
        userId: 12,
        title: "hi there",
        body: "kire",
      }
    );
    console.log("put res", res);
  };
  const handleDelete = async () => {
    const res = await privateDelete<ISinglePost>(APIPaths.Post.ById(1));
    console.log("del res", res);
  };

  const handleGetRequest = async () => {
    const res = await privateGet<ISinglePost[]>(APIPaths.Post.All);
    console.log("get res", res);
  };
  // const [posts, setPosts] = useState<any>();
  // const fetchData = async () => {
  //   const res = await getRequest<ISinglePost[]>(APIPaths.Post.All);
  //   setPosts(res);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log("effect get res", posts);

  const refresh = useRefreshToken();
  const handleRefreshRequest = async () => {
    const res = await refresh();
    console.log("get refresh", res);
  };
  useEffect(() => {
    localStorage.setItem("access-token", "access-token");
  }, []);
  return (
    <div>
      <p>Others</p>
      <button onClick={handlePost1}>Post1</button>
      <button onClick={handlePut}>Put</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleGetRequest}>get</button>
      <button onClick={handleRefreshRequest}>refresh</button>
    </div>
  );
}
