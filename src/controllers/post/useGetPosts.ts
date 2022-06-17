import { getData } from "../../axios/libs/getData";
import { IAxiosResponse } from "../../interfaces/axios";
import { ISinglePost } from "../../interfaces/posts";
import APIPaths from "../../paths/APIPaths";

export default function useGetPosts() {
  const { data, mutate } = getData(APIPaths.Post.All);
  // console.log("child hook called", data);
  return { data, loading: !data, mutate: mutate };
}
