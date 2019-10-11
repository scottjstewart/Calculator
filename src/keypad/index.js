import React from "react";
import useStyles from "./styles";

export default function Keypad({ onClick }) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.buttonContainer}>
        <button
          className={classes.button}
          name="("
          onClick={e => onClick(e.target.name)}
        >
          (
        </button>
        <button
          className={classes.button}
          name="CE"
          onClick={e => onClick(e.target.name)}
        >
          CE
        </button>
        <button
          className={classes.button}
          name=")"
          onClick={e => onClick(e.target.name)}
        >
          )
        </button>
        <button
          className={classes.button}
          name="C"
          onClick={e => onClick(e.target.name)}
        >
          C
        </button>
        <br />

        <button
          className={classes.button}
          name="1"
          onClick={e => onClick(e.target.name)}
        >
          1
        </button>
        <button
          className={classes.button}
          name="2"
          onClick={e => onClick(e.target.name)}
        >
          2
        </button>
        <button
          className={classes.button}
          name="3"
          onClick={e => onClick(e.target.name)}
        >
          3
        </button>
        <button
          className={classes.button}
          name="+"
          onClick={e => onClick(e.target.name)}
        >
          +
        </button>
        <br />

        <button
          className={classes.button}
          name="4"
          onClick={e => onClick(e.target.name)}
        >
          4
        </button>
        <button
          className={classes.button}
          name="5"
          onClick={e => onClick(e.target.name)}
        >
          5
        </button>
        <button
          className={classes.button}
          name="6"
          onClick={e => onClick(e.target.name)}
        >
          6
        </button>
        <button
          className={classes.button}
          name="-"
          onClick={e => onClick(e.target.name)}
        >
          -
        </button>
        <br />

        <button
          className={classes.button}
          name="7"
          onClick={e => onClick(e.target.name)}
        >
          7
        </button>
        <button
          className={classes.button}
          name="8"
          onClick={e => onClick(e.target.name)}
        >
          8
        </button>
        <button
          className={classes.button}
          name="9"
          onClick={e => onClick(e.target.name)}
        >
          9
        </button>
        <button
          className={classes.button}
          name="*"
          onClick={e => onClick(e.target.name)}
        >
          x
        </button>
        <br />

        <button
          className={classes.button}
          name="."
          onClick={e => onClick(e.target.name)}
        >
          .
        </button>
        <button
          className={classes.button}
          name="0"
          onClick={e => onClick(e.target.name)}
        >
          0
        </button>
        <button
          className={classes.button}
          name="="
          onClick={e => onClick(e.target.name)}
        >
          =
        </button>
        <button
          className={classes.button}
          name="/"
          onClick={e => onClick(e.target.name)}
        >
          ÷
        </button>
        <br />
      </div>
    </div>
  );
}
