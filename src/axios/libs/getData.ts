/* 
  ####### Check
    1. child and final child render everytime when state change in parent, but api will not call
      only if state is used in url then api will call - like swr
    2. if url same and call this many time in same page tn api will call once
        if url not same tn it must call
    3. mutate url can change data - like swr
*/

import { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { ICache } from "../../interfaces/axios";
import { axiosPublicInstance } from "../instances";

let cache: ICache = {};

export const getData = <R>(
  url: string | null,
  config?: AxiosRequestConfig | undefined
) => {
  const [data, setData] = useState<R>();

  const fetchData = async (controller: AbortController) => {
    try {
      if (url) {
        if (!cache[`${url}`]) {
          const response = await axiosPublicInstance.get<R>(url, {
            ...config,
            signal: controller.signal,
          });
          cache[`${url}`] = JSON.stringify(response.data);
          setData(response.data);
        } else {
          const responseData = JSON.parse(cache[`${url}`]);
          setData(responseData);
        }
      }
    } catch (error) {
      console.error(error as AxiosError);
    }
  };

  const mutate = async (url: string) => {
    console.log("i am");
    const response = await axiosPublicInstance.get<R>(url, config);
    setData(response.data);
  };
  // console.log("final child called", data);
  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller);
    return () => {
      controller.abort();
      cache = {};
    };
  }, []);

  return { data, mutate };
};
