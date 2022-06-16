import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import useRefreshToken from "../hooks/useRefreshToken";

export default function responseInterceptor(instance: AxiosInstance) {
  const refresh = useRefreshToken();

  const responseIntercept = instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const { config, response } = error;

      if (response?.status === 404) {
        const newAccessToken = await refresh();
        if (newAccessToken && config.headers) {
          config.headers.Authorization = `Bearer new-access-tokennnn`;
        }
        return instance(config);
      }
      return Promise.reject(error);
    }
  );
  return responseIntercept;
}
