import React, { useEffect, useState } from "react";
import {
  ButtonCode,
  calculate,
  handleKeydown,
  State,
} from "../hooks/calculate";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";

const Calculator = () => {
  const [state, setState] = useState<State>({
    current: "0",
    operand: 0,
    operator: null,
    isNextClear: false,
  });
  const buttonHandler = (code: ButtonCode) => {
    const nextState = calculate(code, state);
    setState(nextState);
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [state]);
  return (
    <>
      <Display value={state.current} />
      <ButtonPanel buttonHandler={buttonHandler} />
    </>
  );
};

export default Calculator;
