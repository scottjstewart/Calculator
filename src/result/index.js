import React from "react";
import useStyles from "./styles";

export default function Result(props) {
  const classes = useStyles();
  return (
    <div className={classes.result}>
      <p className={classes.display}>{props.result}</p>
    </div>
  );
}
