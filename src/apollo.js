import ApolloClient from "apollo-boost";

// resolvers: Resolve several thing from client (like field)
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      likeMovie: (_, { id }, { cache }) => {
        cache.writeData({
          id: `Movie:${id}`,
          data: {
            isLiked: true
          }
        });
      }
    }
  }
});

export default client;
