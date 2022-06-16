import { AxiosInstance, AxiosRequestConfig } from "axios";
import { ICancellation } from "../../interfaces/axios";
import request from "./request";

const axiosRequests = (instance: AxiosInstance) => {
  return {
    getRequest: <R>(
      url: string,
      cancellation?: ICancellation,
      config?: AxiosRequestConfig
    ): Promise<R | undefined> =>
      request<R>(instance, "get", url, cancellation, config),
    postRequest: <D, R>(
      url: string,
      data?: D,
      cancellation?: ICancellation,
      config?: AxiosRequestConfig
    ): Promise<R | undefined> =>
      request<R, D>(instance, "post", url, cancellation, config, data),
    putRequest: <D, R>(
      url: string,
      data?: D,
      cancellation?: ICancellation,
      config?: AxiosRequestConfig
    ): Promise<R | undefined> =>
      request<R, D>(instance, "put", url, cancellation, config, data),
    deleteRequest: <R>(
      url: string,
      cancellation?: ICancellation,
      config?: AxiosRequestConfig
    ): Promise<R | undefined> =>
      request<R>(instance, "delete", url, cancellation, config),
  };
};

export default axiosRequests;
