import { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../../instance";

export const getData = <R>(
  url: string,
  config?: AxiosRequestConfig | undefined
) => {
  const [data, setData] = useState<R>();

  const fetchData = async (controller: AbortController) => {
    try {
      const response = await axiosInstance.get<R>(url, {
        ...config,
        signal: controller.signal,
      });
      setData(response.data);
    } catch (error) {
      console.error(error as AxiosError);
    }
  };
  console.log("final child called");
  useEffect(() => {
    const controller = new AbortController();

    fetchData(controller);
    return () => controller.abort();
  }, []);

  return { data };
};
