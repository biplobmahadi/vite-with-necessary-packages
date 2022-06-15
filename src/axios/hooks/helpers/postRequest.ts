import { AxiosRequestConfig } from "axios";
import { ICancellation } from "../../../interfaces/axios";
import request from "./request";

export const postRequest = async <D, R>(
  url: string,
  data?: D,
  cancellation?: ICancellation,
  config?: AxiosRequestConfig | undefined
): Promise<R | undefined> => {
  const response = await request<R, D>("post", url, cancellation, config, data);
  return response;
};
