const APIPaths = {
  Post: {
    GetAll: "/posts",
    GetPostById: (id: number) => `/posts/${id}`,
  },
};
export default APIPaths;
