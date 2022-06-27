import axios from "axios";
import { QueryFunctionContext } from "react-query";

const defaultQueryFn = ({ queryKey, signal }: QueryFunctionContext) =>
  axios
    .get(`http://localhost:5050/${queryKey}`, { signal })
    .then((res) => res.data);

export default defaultQueryFn;
