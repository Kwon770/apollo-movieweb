import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

// query getMovie(%id: Int!) {} => query for apollo
// movie(id: $id){} => query for graphql
const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

export default () => {
  // Get id from uri
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id }
  });
  if (loading) {
    return "loading";
  }
  if (data && data.movie) {
    return data.movie.title;
  }
};
