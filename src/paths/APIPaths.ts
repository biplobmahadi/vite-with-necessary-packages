const APIPaths = {
  Post: {
    All: "/postss",
    ById: (id: number) => `/posts/${id}`,
  },
  Auth: {
    Refresh: "https://jsonplaceholder.typicode.com/photos",
  },
};
export default APIPaths;
