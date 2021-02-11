import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = (props) => {
  const { movies } = props;
  return (
    <div>
      {movies.map((el) => (
        <MovieCard
          key={el.id}
          movieClickHandler={props.movieClickHandler}
          movie={el}
        />
      ))}
    </div>
  );
};

export default MovieList;
