import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  border-radius: 7px;
`;

const Poster = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`;

// a href => will kill app
// Use Link
export default ({ id, bg }) => (
  <Container>
    <Link to={`/${id}`}>
      <Poster bg={bg} />
    </Link>
  </Container>
);
