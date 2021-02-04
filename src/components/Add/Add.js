import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import classes from "./Add.module.css";

const Add = props => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const { addHandler } = props;

  const Savebtn = () => {
    let obj = {
      title: document.getElementById("txtTitle").value,
      description: document.getElementById("txtDescription").value,
      posterUrl: document.getElementById("txtPosterUrl").value,
      rate: document.getElementById("txtRate").value,
      trailerUrl: document.getElementById("txtTrailer").value
    };
    addHandler(obj);
    onCloseModal();
  };

  return (
    <>
      <button onClick={onOpenModal} className={classes.btn}>
        Add Movie
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={classes.container}>
          <h1>Add new Movie</h1>
          <br />
          <div>
            <label htmlFor='txtTitle'>Title : </label>
            <input type='text' id='txtTitle' placeholder='Title' />
          </div>
          <br />
          <div>
            <label htmlFor='txtDescription'>Description : </label>
            <textarea id='txtDescription' placeholder='Film Description' />
          </div>
          <br />
          <div>
            <label htmlFor='txtPosterUrl'>Poster URL : </label>
            <input type='text' id='txtPosterUrl' placeholder='Poster URL' />
          </div>
          <br />
          <div>
            <label htmlFor='txtRate'>Rate : </label>
            <input type='text' id='txtRate' placeholder='Poster URL' />
          </div>
          <br />
          <div>
            <label htmlFor='txtTrailer'>Trailer URL from Youtube : </label>
            <input type='text' id='txtTrailer' placeholder='Trailer URL' />
          </div>
          <button className={classes.btn} onClick={() => Savebtn()}>
            Save
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Add;
