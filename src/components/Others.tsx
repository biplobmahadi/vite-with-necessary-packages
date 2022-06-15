import React, { useEffect, useState } from "react";
import useAxios from "../axios/hooks/useAxios";
import axiosInstance from "../axios/instance";
import { IPostPayload, ISinglePost } from "../interfaces/posts";
import APIPaths from "../paths/APIPaths";

export default function Others() {
  const { postRequest, putRequest, deleteRequest, getRequest } = useAxios();

  const handlePost1 = async () => {
    const res = await postRequest<IPostPayload, ISinglePost>(
      APIPaths.Post.All,
      {
        userId: 12,
        title: "hi tfhere",
        body: "kiref",
      },
      { isCancel: false }
    );
    console.log("res1,", res);
  };
  const handlePost2 = async () => {
    const res = await postRequest<IPostPayload, ISinglePost>(
      APIPaths.Post.All,
      {
        userId: 132,
        title: "hi thasere",
        body: "kireff",
      }
    );
    console.log("res2,", res);
  };
  const handlePost3 = async () => {
    const res = await postRequest<IPostPayload, ISinglePost>(
      APIPaths.Post.All,
      {
        userId: 142,
        title: "hi thedsre",
        body: "kirefff",
      }
    );
    console.log("res3,", res);
  };
  const handlePut = async () => {
    const res = await putRequest<IPostPayload, ISinglePost>(
      APIPaths.Post.ById(1),
      {
        userId: 12,
        title: "hi there",
        body: "kire",
      }
    );
    console.log("put res", res);
  };
  const handleDelete = async () => {
    const res = await deleteRequest<ISinglePost>(APIPaths.Post.ById(1));
    console.log("del res", res);
  };

  const handleGetRequest = async () => {
    const res = await getRequest<ISinglePost[]>(APIPaths.Post.All, {
      isCancel: false,
    });
    console.log("get res", res);
  };
  const [posts, setPosts] = useState<any>();
  const fetchData = async () => {
    const res = await getRequest<ISinglePost[]>(APIPaths.Post.All);
    setPosts(res);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("effect get res", posts);
  return (
    <div>
      <p>Others</p>
      <button onClick={handlePost1}>Post1</button>
      <button onClick={handlePost2}>Post2</button>
      <button onClick={handlePost3}>Post3</button>
      <button onClick={handlePut}>Put</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleGetRequest}>get</button>
    </div>
  );
}
