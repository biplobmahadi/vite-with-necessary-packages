import { useEffect } from "react";
import requestInterceptor from "../interceptors/requestInterceptor";
import responseInterceptor from "../interceptors/responseInterceptor";
import { axiosPrivateInstance } from "../instances";
import axiosRequests from "../helpers/axiosRequests";

export default function usePrivateAxios() {
  const {
    getRequest: privateGet,
    postRequest: privatePost,
    putRequest: privatePut,
    patchRequest: privatePatch,
    deleteRequest: privateDelete,
  } = axiosRequests(axiosPrivateInstance);

  useEffect(() => {
    const requestIntercept = requestInterceptor(axiosPrivateInstance);
    const responseIntercept = responseInterceptor(axiosPrivateInstance);
    return () => {
      axiosPrivateInstance.interceptors.request.eject(requestIntercept);
      axiosPrivateInstance.interceptors.response.eject(responseIntercept);
    };
  }, []);

  return { privateGet, privatePost, privatePut, privatePatch, privateDelete };
}
