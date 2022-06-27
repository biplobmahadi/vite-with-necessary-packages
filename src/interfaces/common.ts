export interface IResponse<T> {
  isSuccess: boolean;
  data: T;
  message: string;
}
