import useSWR from "swr";

const Page2 = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR(
    "https://jsonplaceholder.typicode.com/photos",
    fetcher
  );
  console.log(data, "data");
  return (
    <div>
      {data?.map((el: any) => (
        <li>{el.title}</li>
      ))}
    </div>
  );
};

export default Page2;
