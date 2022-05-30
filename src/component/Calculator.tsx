import React, { useState } from "react";
import { ButtonCode, calculate, State } from "../hooks/calculate";
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
  const keydown = (e: KeyboardEvent): void => {
    console.log(e.key);
    const button = e.key as ButtonCode;
    const nextState = calculate(button, state);
    setState(nextState);
  };
  document.addEventListener("keydown", keydown);
  //  return () => document.removeEventListener("keydown", handleKeyDown);
  return (
    <>
      <Display value={state.current} />
      <ButtonPanel buttonHandler={buttonHandler} />
    </>
  );
};

export default Calculator;
