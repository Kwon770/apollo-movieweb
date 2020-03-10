import React from "react";
import { Link } from "react-router-dom";

// a href => will kill app
// Use Link
export default ({ id }) => (
  <div>
    <Link to={`/${id}`}>{id}</Link>
  </div>
);
