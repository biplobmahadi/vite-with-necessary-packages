import axiosRequests from "../helpers/axiosRequests";
import { axiosPublicInstance } from "../instances";

export default function usePublicAxios() {
  const {
    getRequest: publicGet,
    postRequest: publicPost,
    putRequest: publicPut,
    deleteRequest: publicDelete,
  } = axiosRequests(axiosPublicInstance);

  return { publicGet, publicPost, publicPut, publicDelete };
}
