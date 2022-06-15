import {
  deleteRequest,
  getData,
  getRequest,
  postRequest,
  putRequest,
} from "./helpers";

export default function useAxios() {
  return { getData, getRequest, postRequest, putRequest, deleteRequest };
}
