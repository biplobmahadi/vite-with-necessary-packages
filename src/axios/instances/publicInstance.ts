import axios, { AxiosInstance } from "axios";
import useEnvVariables from "../../utils/useEnvVariables";

const { baseURL } = useEnvVariables();

export const axiosPublicInstance: AxiosInstance = axios.create({
  baseURL,
});
