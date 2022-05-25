import React, { FC } from "react";
type Props = {
  buttonHandler: (code: string) => void;
};
const ButtonPanel: FC<Props> = (props) => {
  const { buttonHandler } = props;
  return (
    <div>
      <button onClick={() => buttonHandler("9")}>9</button>
      <button onClick={() => buttonHandler("8")}>8</button>
      <button onClick={() => buttonHandler("7")}>7</button>
      <button onClick={() => buttonHandler("6")}>6</button>
      <button onClick={() => buttonHandler("5")}>5</button>
      <button onClick={() => buttonHandler("4")}>4</button>
      <button onClick={() => buttonHandler("3")}>3</button>
      <button onClick={() => buttonHandler("2")}>2</button>
      <button onClick={() => buttonHandler("1")}>1</button>
      <button onClick={() => buttonHandler("0")}>0</button>
      <button onClick={() => buttonHandler(".")}>.</button>
      <button onClick={() => buttonHandler("AC")}>AC</button>
      <button onClick={() => buttonHandler("+")}>+</button>
      <button onClick={() => buttonHandler("-")}>-</button>
      <button onClick={() => buttonHandler("=")}>=</button>
    </div>
  );
};

export default ButtonPanel;
