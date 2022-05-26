import React, { FC } from "react";
type Props = {
  buttonHandler: (code: string) => void;
};
const ButtonPanel: FC<Props> = (props) => {
  const { buttonHandler } = props;
  return (
    <div className="btns">
      <button className="btn btn__number" onClick={() => buttonHandler("9")}>
        9
      </button>
      <button className="btn btn__number" onClick={() => buttonHandler("8")}>
        8
      </button>
      <button className="btn btn__number" onClick={() => buttonHandler("7")}>
        7
      </button>
      <button className="btn btn__number" onClick={() => buttonHandler("6")}>
        6
      </button>
      <button className="btn btn__number" onClick={() => buttonHandler("5")}>
        5
      </button>
      <button className="btn btn__number" onClick={() => buttonHandler("4")}>
        4
      </button>
      <button className="btn btn__number" onClick={() => buttonHandler("3")}>
        3
      </button>
      <button className="btn btn__number" onClick={() => buttonHandler("2")}>
        2
      </button>
      <button className="btn btn__number" onClick={() => buttonHandler("1")}>
        1
      </button>
      <button className="btn btn__number" onClick={() => buttonHandler("0")}>
        0
      </button>
      <button className="btn btn__dot" onClick={() => buttonHandler(".")}>
        .
      </button>
      <button className="btn btn__ac" onClick={() => buttonHandler("AC")}>
        AC
      </button>
      <button className="btn" onClick={() => buttonHandler("D")}>
        D
      </button>
      <button className="btn" onClick={() => buttonHandler("+")}>
        +
      </button>
      <button className="btn" onClick={() => buttonHandler("-")}>
        -
      </button>
      <button className="btn" onClick={() => buttonHandler("=")}>
        =
      </button>
    </div>
  );
};

export default ButtonPanel;
