import React, { useRef } from "react";
import useSWR from "swr";

const usePost = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  //   const random = useRef(Date.now());
  const { data } = useSWR(
    "https://jsonplaceholder.typicode.com/photos",
    fetcher
  );
  return data;
};

export default usePost;
