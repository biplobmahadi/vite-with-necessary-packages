// IMPORTANT: params and generics are different for reuseability

import { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { ICancellation } from "../../interfaces/axios";

let controller: AbortController;

const request = async <R, D = any>(
  instance: AxiosInstance,
  method: string,
  url: string,
  cancellation: ICancellation = {
    activateAbort: true,
  },
  config?: AxiosRequestConfig,
  data?: D
): Promise<R | undefined> => {
  try {
    if (cancellation.activateAbort && controller) controller.abort();
    controller = new AbortController();

    const response = await instance({
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
