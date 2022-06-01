import React, { useCallback, useEffect, useState } from "react";
import { ButtonCode, calculate, keyDownCodes, State } from "../hooks/calculate";
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

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      let key = e.key;
      const isKeyCode = keyDownCodes.find((keyDownCode) => {
        return keyDownCode === key;
      });
      if (isKeyCode === undefined) {
        return;
      }
      const convertButton = () => {
        switch (key) {
          case "Enter":
            key = "=";
            break;
          case "Backspace":
            key = "D";
            break;
          case "Delete":
            key = "AC";
            break;
          default:
        }
        return key as ButtonCode;
      };
      const nextState = calculate(convertButton(), state);
      setState(nextState);
    },
    [state]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown, state]);
  return (
    <>
      <Display value={state.current} />
      <ButtonPanel buttonHandler={buttonHandler} />
    </>
  );
};

export default Calculator;
