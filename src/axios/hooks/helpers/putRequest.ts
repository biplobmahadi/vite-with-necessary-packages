import { AxiosRequestConfig } from "axios";
import { ICancellation } from "../../../interfaces/axios";
import request from "./request";

export const putRequest = async <D, R>(
  url: string,
  data?: D,
  cancellation?: ICancellation,
  config?: AxiosRequestConfig | undefined
): Promise<R | undefined> => {
  const response = await request<R, D>("put", url, cancellation, config, data);
  return response;
};
