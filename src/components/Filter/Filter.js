import React from "react";

import classes from "./Filter.module.css";

const Filter = props => {
  const { wordToSearch, wordToSearchHandler } = props;
  return (
    <div>
      <h1 className={classes.h1Style}>Search</h1>
      <input
        type='text'
        placeholder='Search by Title/Rate'
        onChange={e => wordToSearchHandler(e)}
        value={wordToSearch}
        className={classes.textBox}
      />
    </div>
  );
};

export default Filter;
