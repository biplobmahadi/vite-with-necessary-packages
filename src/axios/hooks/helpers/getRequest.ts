import { AxiosRequestConfig } from "axios";
import { ICancellation } from "../../../interfaces/axios";
import request from "./request";

export const getRequest = async <R>(
  url: string,
  cancellation?: ICancellation,
  config?: AxiosRequestConfig | undefined
): Promise<R | undefined> => {
  const response = await request<R>("get", url, cancellation, config);
  return response;
};
