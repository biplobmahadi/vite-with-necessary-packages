import axios from "axios";
import { useMutation } from "react-query";
import { IPosts } from "../../interfaces/posts";

const mutationFn = (variables: IPosts) =>
  axios.post("http://localhost:5050/posts", variables).then((res) => res.data);

export const postPosts = () => useMutation<IPosts, any, IPosts>(mutationFn);
