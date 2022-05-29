export type Operator = "+" | "-" | "*" | "/";
export type NumberCode =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";
export type ButtonCode = NumberCode | Operator | "." | "D" | "AC" | "=";
export interface State {
  current: string;
  operand: number;
  operator: string | null;
  isNextClear: boolean;
}

export const calculate = (button: ButtonCode, state: State): State => {
  //数字の場合
  if (isNumberButton(button)) {
    return handleNumberButton(button, state);
  }
  //+-の場合
  if (isOperatorButton(button)) {
    return handleOperatorButton(button, state);
  }
  //.の場合
  if (isDotButton(button)) {
    return handleDotButton(button, state);
  }
  //削除の場合
  if (isDeleteButton(button)) {
    return handleDeleteButton(button, state);
  }
  //ACの場合
  if (isAllClearButton(button)) {
    return handleAllClearButton();
  }
  //=の場合
  if (isEqualButton(button)) {
    return handleEqualButton(state);
  }
  return state;
};

const isNumberButton = (button: ButtonCode): button is NumberCode => {
  return (
    button === "0" ||
    button === "1" ||
    button === "2" ||
    button === "3" ||
    button === "4" ||
    button === "5" ||
    button === "6" ||
    button === "7" ||
    button === "8" ||
    button === "9"
  );
};
const handleNumberButton = (button: ButtonCode, state: State): State => {
  if (state.isNextClear) {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false,
    };
  }
  if (state.current === "0") {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false,
    };
  }
  return {
    current: `${state.current}${button}`,
    operand: state.operand,
    operator: state.operator,
    isNextClear: false,
  };
};
const isOperatorButton = (button: ButtonCode): button is Operator => {
  return button === "+" || button === "-" || button === "*" || button === "/";
};

const handleOperatorButton = (button: ButtonCode, state: State): State => {
  if (state.operator === null) {
    return {
      current: state.current,
      operand: parseFloat(state.current),
      operator: button,
      isNextClear: true,
    };
  }
  const nextValue = operate(state);
  return {
    current: `${nextValue}`,
    operand: nextValue,
    operator: button,
    isNextClear: true,
  };
};
const isDotButton = (button: ButtonCode) => {
  return button === ".";
};

const handleDotButton = (button: ButtonCode, state: State): State => {
  if (state.current.indexOf(".") !== -1) {
    return state;
  }
  return {
    current: `${state.current}.`,
    operand: state.operand,
    operator: button,
    isNextClear: false,
  };
};
const isDeleteButton = (button: ButtonCode) => {
  return button === "D";
};

const handleDeleteButton = (button: ButtonCode, state: State): State => {
  if (state.current.length === 1) {
    return {
      current: "0",
      operand: state.operand,
      operator: button,
      isNextClear: false,
    };
  }
  return {
    current: state.current.substring(0, state.current.length - 1),
    operand: state.operand,
    operator: button,
    isNextClear: false,
  };
};
const isAllClearButton = (button: ButtonCode) => {
  return button === "AC";
};

const handleAllClearButton = (): State => {
  return {
    current: "0",
    operand: 0,
    operator: null,
    isNextClear: false,
  };
};
const isEqualButton = (button: ButtonCode) => {
  return button === "=";
};
const handleEqualButton = (state: State): State => {
  if (state.operand === null) {
    return state;
  }
  const nextValue = operate(state);
  return {
    current: `${nextValue}`,
    operand: 0,
    operator: null,
    isNextClear: true,
  };
};
const operate = (state: State): number => {
  const current = parseFloat(state.current);
  if (state.operator === "+") {
    return state.operand + current;
  }
  if (state.operator === "-") {
    return state.operand - current;
  }
  if (state.operator === "*") {
    return state.operand * current;
  }
  if (state.operator === "/") {
    return state.operand / current;
  }
  return current;
};
