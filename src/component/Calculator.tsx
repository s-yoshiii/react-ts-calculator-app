import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent): void => {
      const button = e.key as ButtonCode;
      let nextState = calculate(button, state);
      if (e.key === "Enter") {
        nextState = calculate("=", state);
      }
      setState(nextState);
    };
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
