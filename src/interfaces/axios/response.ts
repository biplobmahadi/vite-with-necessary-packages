export interface IAxiosResponse<T> {
  isSuccess: boolean;
  data: T;
  message: string;
}
