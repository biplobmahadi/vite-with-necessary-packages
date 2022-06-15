export interface ISinglePost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostPayload {
  userId: number;
  title: string;
  body: string;
}
