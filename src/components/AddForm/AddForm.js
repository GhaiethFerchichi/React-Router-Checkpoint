import classes from "./AddForm.module.css";

const AddForm = (props) => {
  return (
    <div className={classes.container}>
      <h1>Add new Movie</h1>
      <br />
      <div>
        <label htmlFor="txtTitle">Title : </label>
        <input type="text" id="txtTitle" placeholder="Title" />
      </div>
      <br />
      <div>
        <label htmlFor="txtDescription">Description : </label>
        <textarea id="txtDescription" placeholder="Film Description" />
      </div>
      <br />
      <div>
        <label htmlFor="txtPosterUrl">Poster URL : </label>
        <input type="text" id="txtPosterUrl" placeholder="Poster URL" />
      </div>
      <br />
      <div>
        <label htmlFor="txtRate">Rate : </label>
        <input type="text" id="txtRate" placeholder="Poster URL" />
      </div>
      <br />
      <div>
        <label htmlFor="txtTrailer">Trailer URL from Youtube : </label>
        <input type="text" id="txtTrailer" placeholder="Trailer URL" />
      </div>
      <button className={classes.btn} onClick={props.navigateToHomePage}>
        Save
      </button>
    </div>
  );
};

export default AddForm;
