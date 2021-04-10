import React from "react";
import MovieForm from "./MovieForm";

const NewMovie = () => {
  return (
    <div>
      <h2 data-testid="page-title">New Movie</h2>
      <MovieForm />
    </div>
  );
};

export default NewMovie;
