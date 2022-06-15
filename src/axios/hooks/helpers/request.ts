// IMPORTANT: params and generics are different for reuseability

import { AxiosError, AxiosRequestConfig } from "axios";
import { ICancellation } from "../../../interfaces/axios";
import axiosInstance from "../../instance";

let controller: AbortController;

const request = async <R, D = any>(
  method: string,
  url: string,
  cancellation: ICancellation = {
    isCancel: true,
  },
  config?: AxiosRequestConfig,
  data?: D
): Promise<R | undefined> => {
  try {
    if (cancellation.isCancel && controller) controller.abort();
    controller = new AbortController();

    const response = await axiosInstance({
      method: method,
      url: url,
      data: data,
      signal: controller.signal,
      ...config,
    });

    return response.data;
  } catch (error) {
    console.error(error as AxiosError);
  }
};

export default request;
