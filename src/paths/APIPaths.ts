const APIPaths = {
  Post: {
    All: "/posts",
    ById: (id: number) => `/posts/${id}`,
  },
  Auth: {
    Refresh: "https://jsonplaceholder.typicode.com/photos",
  },
};
export default APIPaths;
