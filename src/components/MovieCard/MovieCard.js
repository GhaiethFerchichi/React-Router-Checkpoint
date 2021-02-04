import React, { useState } from "react";
import { BsStar } from "react-icons/bs";
import ReactPlayer from "react-player";
import { Modal } from "react-responsive-modal";

import "react-responsive-modal/styles.css";

import classes from "./MovieCard.module.css";

const MovieCard = props => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const { title, description, rate, posterUrl, trailerUrl } = props.movie;

  return (
    <div className={classes.cardBorderWrap}>
      <div className={classes.card}>
        <img src={posterUrl} alt={title} className={classes.poster} />
        <div style={{ padding: 15 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>{title}</h2>
            <div>
              {rate} {"  "} <BsStar />
            </div>
          </div>
          <p className={classes.description}>{description}</p>

          <div>
            <button onClick={onOpenModal} className={classes.btn}>
              Trailer
            </button>
            <Modal open={open} onClose={onCloseModal} center>
              <ReactPlayer url={trailerUrl} />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
