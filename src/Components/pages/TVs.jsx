import "../CSS/TVs.css";

import React from "react";
import TV from "../TV";
import tvs from "../../tvDummy";

export default function TVs() {
  return (
    <div className="app-container">
      {tvs.results.map((item) => {
        return (
          <TV
            title={item.name}
            poster={item.poster_path}
            description={item.overview}
            grade={item.vote_average}
          />
        );
      })}
    </div>
  );
}
