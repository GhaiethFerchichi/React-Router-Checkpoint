import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";

import classes from "./NavigationItems.module.css";

function NavigationItems() {
  const linkPaths = ["Home", "News", "Contact", "About"];
  let navigationItemsWithLinks = null;
  navigationItemsWithLinks = linkPaths.map((el) => (
    <NavigationItem link={el} />
  ));
  return <ul className={classes.ul}>{navigationItemsWithLinks}</ul>;
}

export default NavigationItems;
