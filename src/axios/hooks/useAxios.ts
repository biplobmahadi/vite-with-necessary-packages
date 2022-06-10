import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../instance";

export default function useAxiosGet<R>(
  url: string,
  config?: AxiosRequestConfig | undefined
) {
  const [data, setData] = useState<R>();

  const fetchData = async (controller: AbortController) => {
    try {
      const response = await axiosInstance.get<R>(url, {
        ...config,
        signal: controller.signal,
      });
      setData(response.data);

      // My assumption:
      // {response: {data : {
      //   isSuccess: boolean;
      //   data: some data
      //   message: string;
      //   },
      //   config, ...}}
    } catch (error) {
      console.error(error, "error is: -");
    }
  };
  console.log("final child called");
  useEffect(() => {
    const controller = new AbortController();

    fetchData(controller);
    return () => controller.abort();
  }, []);

  return { data };
}
