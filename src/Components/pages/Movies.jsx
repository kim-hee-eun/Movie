import "../CSS/Movies.css";

import Movie from "../Movie";
import React from "react";
import movies from "../../movieDummy";

export default function Movies() {
  return (
    <div className="app-container">
      {movies.results.map((item) => {
        return (
          <Movie
            title={item.title}
            poster={item.poster_path}
            description={item.overview}
            grade={item.vote_average}
          />
        );
      })}
    </div>
  );
}
