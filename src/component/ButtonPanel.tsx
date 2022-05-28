import React, { FC } from "react";
import { ButtonCode } from "../hooks/calculate";
type Props = {
  buttonHandler: (code: ButtonCode) => void;
};
const ButtonPanel: FC<Props> = (props) => {
  const { buttonHandler } = props;
  return (
    <div className="buttonPanel">
      <button className="button button--ac" onClick={() => buttonHandler("AC")}>
        AC
      </button>
      <button className="button" onClick={() => buttonHandler("D")}>
        D
      </button>
      <button className="button">%</button>
      <button className="button">&divide;</button>
      <button
        className="button button--number"
        onClick={() => buttonHandler("7")}
      >
        7
      </button>
      <button
        className="button button--number"
        onClick={() => buttonHandler("8")}
      >
        8
      </button>
      <button
        className="button button--number"
        onClick={() => buttonHandler("9")}
      >
        9
      </button>
      <button className="button">&times;</button>
      <button
        className="button button--number"
        onClick={() => buttonHandler("4")}
      >
        4
      </button>
      <button
        className="button button--number"
        onClick={() => buttonHandler("5")}
      >
        5
      </button>
      <button
        className="button button--number"
        onClick={() => buttonHandler("6")}
      >
        6
      </button>
      <button className="button" onClick={() => buttonHandler("-")}>
        -
      </button>
      <button
        className="button button--number"
        onClick={() => buttonHandler("1")}
      >
        1
      </button>
      <button
        className="button button--number"
        onClick={() => buttonHandler("2")}
      >
        2
      </button>
      <button
        className="button button--number"
        onClick={() => buttonHandler("3")}
      >
        3
      </button>
      <button className="button" onClick={() => buttonHandler("+")}>
        +
      </button>
      <button
        className="button button--number"
        onClick={() => buttonHandler("0")}
      >
        0
      </button>
      <button className="button button--dot" onClick={() => buttonHandler(".")}>
        .
      </button>

      <button className="button" onClick={() => buttonHandler("=")}>
        =
      </button>
    </div>
  );
};

export default ButtonPanel;
