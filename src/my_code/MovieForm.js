import React from "react";

const MovieForm = () => {
  return (
    <div>
      <form data-testid="movie-form" onSubmit={() => console.log("clicked")}>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default MovieForm;
