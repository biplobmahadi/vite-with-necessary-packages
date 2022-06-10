import useAxiosGet from "../../axios/hooks/useAxios";
import { IAxiosResponse } from "../../interfaces/axios";
import { ISinglePost } from "../../interfaces/posts";
import APIPaths from "../../paths/APIPaths";

export default function useGetPosts() {
  const { data } = useAxiosGet<IAxiosResponse<ISinglePost[]>>(
    APIPaths.Post.GetAll
  );
  console.log("child hook called", data);
  return { posts: data?.data, loading: !data };
}
