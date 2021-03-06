import React, { Suspense, useState } from "react";
import "./App.css";

import { Redirect, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/Navigation/NavigationBar";
import Spinner from "./UI/Spinner/Spinner";

const AddMovie = React.lazy(() => import("./Views/AddMovie"));
const Home = React.lazy(() => import("./Views/Home"));
const Movie = React.lazy(() => import("./Views/Movie"));

function App() {
  const [originalMovies, setOriginalMovies] = useState([
    {
      id: 0,
      title: "The Matrix",
      description:
        "Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
      posterUrl:
        "https://mypostercollection.com/wp-content/uploads/2018/07/The-Matrix-Poster-MyPosterCollection.com-2-783x1024.jpg?x35407",
      rate: 8.7,
      trailerUrl: "https://youtu.be/m8e-FF8MsqU",
    },
    {
      id: 1,
      title: "Inception",
      description:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
      posterUrl:
        "https://i.pinimg.com/564x/f8/93/dd/f893ddd2a59971af701321ce5824ea6a.jpg",
      rate: 8.8,
      trailerUrl: "https://youtu.be/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "Transcendence",
      description:
        "Will's desperate wife uploads his consciousness into a quantum computer to save him. He soon begins making groundbreaking discoveries but also displays signs of a dark and hidden motive.",
      posterUrl:
        "https://cdn.traileraddict.com/content/warner-bros-pictures/transcendence-10.jpg",
      rate: 6.3,
      trailerUrl: "https://youtu.be/VCTen3-B8GU",
    },
    {
      id: 3,
      title: "Gladiator",
      description:
        "Commodus takes over power and demotes Maximus, one of the preferred generals of his father, Emperor Marcus Aurelius. As a result, Maximus is relegated to fighting till death as a gladiator.",
      posterUrl:
        "https://i.pinimg.com/originals/71/8c/9b/718c9b2977145aa13490d8841dc7ad34.jpg",
      rate: 8.5,
      trailerUrl: "https://youtu.be/owK1qxDselE",
    },
    {
      id: 4,
      title: "The GodFather",
      description:
        "The Godfather is an American film series that consists of three crime films directed by Francis Ford Coppola inspired by the 1969 novel of the same name by Italian American author Mario Puzo.",
      posterUrl:
        "https://cdn.shopify.com/s/files/1/0969/9128/products/Godfather-HollywoodClassicOriginalMoviePoster_363a1aec-7215-43ac-ba38-b972c06e69bc.jpg?v=1591603005",
      rate: 9.1,
      trailerUrl: "https://youtu.be/sY1S34973zA",
    },
  ]);

  const setOriginalMoviesHandler = (obj) => {
    setOriginalMovies(obj);
  };

  return (
    <div>
      <NavigationBar />
      <div style={{ marginTop: "50px" }}>
        <Switch>
          <Route
            path="/Movies"
            exact
            render={(props) => (
              <Suspense fallback={<Spinner />}>
                <Home
                  originalMovies={originalMovies}
                  setOriginalMoviesHandler={setOriginalMoviesHandler}
                  {...props}
                />
              </Suspense>
            )}
          />
          <Route
            path="/Movies/:id"
            render={(props) => (
              <Suspense fallback={<Spinner />}>
                <Movie originalMovies={originalMovies} {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/AddMovie"
            render={(props) => (
              <Suspense fallback={<Spinner />}>
                <AddMovie {...props} />
              </Suspense>
            )}
          />
          <Redirect to="/Movies" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
