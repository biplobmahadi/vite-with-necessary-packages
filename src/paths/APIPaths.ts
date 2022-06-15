const APIPaths = {
  Post: {
    All: "/posts",
    ById: (id: number) => `/posts/${id}`,
  },
};
export default APIPaths;
