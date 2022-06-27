import { useQuery } from "react-query";
import { IResponse } from "../../interfaces/common";
import { IPosts } from "../../interfaces/posts";

export const getPosts = () => useQuery<IResponse<IPosts[]>>("postss");
