import React, { useEffect, useState } from "react";
import { BsStar } from "react-icons/bs";
import { FcHome } from "react-icons/fc";

import ReactPlayer from "react-player";

import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import classes from "./MovieForm.module.css";

const MovieForm = (props) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Movie = props.originalMovies.filter(
    (el) => Number(el.id) === Number(props.id)
  );
  console.log(props);
  const { title, description, rate, posterUrl, trailerUrl } = Movie[0];

  const navigateToHomePage = () => {
    props.history.push("/");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyItems: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p
        onClick={navigateToHomePage}
        style={{ color: "white", fontSize: "20px" }}
      >
        Back To HOME PAGE ? Click ME <FcHome />
      </p>

      <h1 style={{ color: "white" }}>Description of {title}</h1>
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
            <div style={{ textAlign: "center" }}>
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
    </div>
  );
};

export default MovieForm;
