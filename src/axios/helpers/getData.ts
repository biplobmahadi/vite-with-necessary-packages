import { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { axiosPublicInstance } from "../instances";

export const getData = <R>(
  url: string,
  config?: AxiosRequestConfig | undefined
) => {
  const [data, setData] = useState<R>();

  const fetchData = async (controller: AbortController) => {
    try {
      const response = await axiosPublicInstance.get<R>(url, {
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
