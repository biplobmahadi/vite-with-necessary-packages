import { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

export default function requestInterceptor(instance: AxiosInstance) {
  const requestIntercept = instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const accessToken = localStorage.getItem("access-token");
      if (config.headers) {
        config.headers.Authorization = `${accessToken}`;
      }
      return config;
    },
    (error: AxiosError) => Promise.reject(error)
  );
  return requestIntercept;
}
