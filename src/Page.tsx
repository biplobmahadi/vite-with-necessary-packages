import { useRef } from "react";
import useSWR from "swr";
import usePost from "./usePost";

const Page = () => {
  const data = usePost();
  console.log(data, "data");
  return (
    <div>
      {data ? data?.map((el: any) => <li>{el.title}</li>) : "loading..."}
    </div>
  );
};

export default Page;
