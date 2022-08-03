import { AxiosInstance, AxiosRequestConfig } from "axios";
import { IAbortOption } from "../../interfaces/axios";
import request from "./request";

const axiosRequests = (instance: AxiosInstance) => {
  return {
    getRequest: <R>(
      url: string,
      abortOption?: IAbortOption,
      config?: AxiosRequestConfig
    ): Promise<R | undefined> =>
      request<R>(instance, "get", url, abortOption, config),
    postRequest: <R, D>(
      url: string,
      data?: D,
      abortOption?: IAbortOption,
      config?: AxiosRequestConfig
    ): Promise<R | undefined> =>
      request<R, D>(instance, "post", url, abortOption, config, data),
    putRequest: <R, D>(
      url: string,
      data?: D,
      abortOption?: IAbortOption,
      config?: AxiosRequestConfig
    ): Promise<R | undefined> =>
      request<R, D>(instance, "put", url, abortOption, config, data),
    patchRequest: <R, D>(
      url: string,
      data?: D,
      abortOption?: IAbortOption,
      config?: AxiosRequestConfig
    ): Promise<R | undefined> =>
      request<R, D>(instance, "patch", url, abortOption, config, data),
    deleteRequest: <R>(
      url: string,
      abortOption?: IAbortOption,
      config?: AxiosRequestConfig
    ): Promise<R | undefined> =>
      request<R>(instance, "delete", url, abortOption, config),
  };
};

export default axiosRequests;
