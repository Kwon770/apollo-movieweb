# Frontend, Movie Web built with React, Apollo, GraphQL

The Web connected to [MovieQl-Server](https://github.com/Kwon770/movieql)\
The Web made by Apollo

```bash
$ yarn add styled-components
$ yarn add react-router-dom
$ yarn add apollo-boost
$ yarn add @apollo-react-hooks
$ yarn add graphql

```

## What i learn

### ApolloClient setting & Resolvers & Mutation Usage

- uri: To connect backend-side
- resolvers: Resolve/Send serveral thing from client (like field)

```js
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  resolvers: {
    // The field name must be same with api (type in db)
    Movie: {},
    // This Mutaion is same with backend-Mutation
    Mutation: {}
    }
  }
});
```

### Query usage from front

- Using ```gql``/``` to write query
- Using ```useQuery(query, variables)``` to send query
- ```query getMovie($id: Int!) {}``` => query for Apollo
- ```movie(id: $id){}``` => query for graphql

```js
import { gql } from "apollo-boost";

const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
        id
        }
    }
`;

const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) }
```

### useParams()

- Get string from url (https://localhost:4000/#/155 => "155")

```js
import { useParams } from "react-router-dom";

export default = () => {
    const { id } = useParams();

    ~
}
```

### &#60;a href/&#62; & Link

- ```<a href>``` kill app, you must use ```<Link />```

```js
import { Link } from "react-router-dom";

// https://localhost:4000 => https://localhost:4000/#/${id}
<Link to={`/${id}`}> 
    ~
</Link>
```

### optional


### Using Local-State 

- Using Local-State(data) with Backend-State(data)
- ```@client``` make query only send to client-side (telegraph ql)
- To use Local-State from different page, you must get id by query => Apollo distinguish by id

```js
// Apollo.js

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  resolvers: {
    
    // isLiked is apply on Local-State 
    Movie: {
      isLiked: () => false
    },

    // cache: local cache of Apollo 
    // cache.writeData: Write data on 'local'
    Mutation: {
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
```

```js
// Home.js

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
      isLiked @client
    }
  }
`;
```

```js
// Detail.js

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
      isLiked @client
    }
  }
`;
```