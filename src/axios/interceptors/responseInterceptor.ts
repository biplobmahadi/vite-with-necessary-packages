import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { ICustomAxiosRequestConfig } from "../../interfaces/axios";
import useRefreshToken from "../hooks/useRefreshToken";

export default function responseInterceptor(instance: AxiosInstance) {
  const refresh = useRefreshToken();

  const responseIntercept = instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const { config, response } = error;
      let prevRequest: ICustomAxiosRequestConfig = config;

      if (response?.status === 404 && !prevRequest.sent) {
        prevRequest.sent = true;
        const newAccessToken = await refresh();
        if (newAccessToken && prevRequest.headers) {
          prevRequest.headers.Authorization = `Bearer new-access-tokennnn`;
        }
        return instance(prevRequest);
      }
      return Promise.reject(error);
    }
  );
  return responseIntercept;
}
