import MovieForm from "../components/MovieForm/MovieForm";

const Movie = (props) => {
  return (
    <div>
      <MovieForm
        originalMovies={props.originalMovies}
        id={props.match.params.id}
        {...props}
      />
    </div>
  );
};

export default Movie;
