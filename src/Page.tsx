import useSWR from "swr";

const Page = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR(
    "https://jsonplaceholder.typicode.com/photos",
    fetcher
  );
  console.log(data, "data");
  return (
    <div>
      {data ? data?.map((el: any) => <li>{el.title}</li>) : "loading..."}
    </div>
  );
};

export default Page;
