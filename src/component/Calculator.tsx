import React, { useState } from "react";
import { calculate, State } from "../hooks/calculate";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";

const Calculator = () => {
  const [state, setState] = useState<State>({
    current: "0",
    operand: 0,
    operator: null,
    isNextClear: false,
  });
  const buttonHandler = (code: string) => {
    const nextState = calculate(code, state);
    setState(nextState);
  };
  return (
    <div>
      <Display />
      <ButtonPanel buttonHandler={buttonHandler} />
      Calculator
    </div>
  );
};

export default Calculator;
