import { AxiosRequestConfig } from "axios";
import { ICancellation } from "../../../interfaces/axios";
import request from "./request";

export const deleteRequest = async <R>(
  url: string,
  cancellation?: ICancellation,
  config?: AxiosRequestConfig | undefined
): Promise<R | undefined> => {
  const response = await request<R>("delete", url, cancellation, config);
  return response;
};
