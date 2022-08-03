import axiosRequests from "../helpers/axiosRequests";
import { axiosPublicInstance } from "../instances";

export default function usePublicAxios() {
  const {
    getRequest: publicGet,
    postRequest: publicPost,
    putRequest: publicPut,
    patchRequest: publicPatch,
    deleteRequest: publicDelete,
  } = axiosRequests(axiosPublicInstance);

  return { publicGet, publicPost, publicPut, publicPatch, publicDelete };
}
