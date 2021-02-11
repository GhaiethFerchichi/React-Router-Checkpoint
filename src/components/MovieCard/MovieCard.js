import { BsStar } from "react-icons/bs";

import "react-responsive-modal/styles.css";

import classes from "./MovieCard.module.css";

const MovieCard = (props) => {
  const { id, title, rate, posterUrl } = props.movie;

  return (
    <div
      className={classes.cardBorderWrap}
      onClick={() => props.movieClickHandler(id)}
    >
      <div className={classes.card}>
        <img src={posterUrl} alt={title} className={classes.poster} />
        <div style={{ padding: 15 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>{title}</h2>
            <div>
              {rate} {"  "} <BsStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
