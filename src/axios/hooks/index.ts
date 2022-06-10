import { AxiosRequestConfig } from "axios";
import axiosInstance from "../instance";

class AppAxios {
  static get<R>(url: string, config?: AxiosRequestConfig | undefined) {
    axiosInstance.get<R>(url, config);
  }
  static post<D, R>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig | undefined
  ) {
    axiosInstance.post<R>(url, data, config);
  }
  static put<D, R>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig | undefined
  ) {
    axiosInstance.put<R>(url, data, config);
  }
  static delete<R>(url: string, config?: AxiosRequestConfig | undefined) {
    axiosInstance.delete<R>(url, config);
  }
}

export default AppAxios;
