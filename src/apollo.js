import ApolloClient from "apollo-boost";

// resolvers: Resolve several thing from client (like field)
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  resolvers: {
    // The name must be same with api (type in db)
    Movie: {
      isLiked: () => false
    },
    // Mutaion like backend-Mutation
    Mutation: {
      // root, arguemnt, context
      togglelikeMovie: (_, { id, isLiked }, { cache }) => {
        cache.writeData({
          id: `Movie:${id}`,
          data: {
            isLiked: !isLiked
          }
        });
      }
    }
  }
});

export default client;
