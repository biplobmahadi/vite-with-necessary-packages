import { getData } from "../../axios/helpers/getData";
import { IAxiosResponse } from "../../interfaces/axios";
import { ISinglePost } from "../../interfaces/posts";
import APIPaths from "../../paths/APIPaths";

export default function useGetPosts() {
  const { data } = getData<IAxiosResponse<ISinglePost[]>>(APIPaths.Post.All);
  console.log("child hook called", data);
  return { posts: data?.data, loading: !data };
}
