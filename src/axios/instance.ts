import axios, { AxiosInstance } from "axios";
import useEnvVariables from "../utils/useEnvVariables";

const { baseURL } = useEnvVariables();

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
