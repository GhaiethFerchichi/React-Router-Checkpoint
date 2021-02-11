import React, { useState } from "react";

import Filter from "../components/Filter/Filter";
import MovieList from "../components/MovieList/MovieList";

const Home = (props) => {
  const { originalMovies } = props;
  const [wordToSearch, setWordToSearch] = useState("");

  const [filtredMovies, setFiltredMovies] = useState(originalMovies);

  const wordToSearchHandler = (e) => {
    const word = e.target.value;
    setWordToSearch(word);

    if (word !== "") {
      const filtredMovies = originalMovies.filter(
        (el) =>
          el.title.toLowerCase().includes(word.toLowerCase()) ||
          el.rate.toString().includes(word)
      );
      // console.log(filtredMovies);
      setFiltredMovies(filtredMovies);
    } else {
      setFiltredMovies(originalMovies);
    }
  };

  // const changeOriginalMoviesHandler = (obj) => {
  //   const newMoviesList = [...originalMovies];
  //   obj.id = newMoviesList[newMoviesList.length - 1]["id"] + 1;
  //   newMoviesList.push(obj);
  //   setOriginalMoviesHandler(newMoviesList);
  //   // setWordToSearch("");
  //   setFiltredMovies(newMoviesList);
  // };

  const movieClickHandler = (id) => {
    props.history.push("/Movies/" + id);
    // console.log(props.history);
  };

  return (
    <div className="App">
      <div className="containerDiv">
        <Filter
          wordToSearch={wordToSearch}
          wordToSearchHandler={wordToSearchHandler}
        />
        {/* <Add addHandler={changeOriginalMoviesHandler} /> */}
      </div>
      <MovieList movies={filtredMovies} movieClickHandler={movieClickHandler} />
    </div>
  );
};

export default Home;
