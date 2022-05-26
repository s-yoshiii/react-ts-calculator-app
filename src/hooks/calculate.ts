export const calculate = (button: string, state: State): State => {
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
  }
  //削除の場合
  if (isDeleteButton(button)) {
  }
  //ACの場合
  if (isAllClearButton(button)) {
  }
  //=の場合
  if (isEqualButton(button)) {
  }
  return state;
};
export interface State {
  current: string;
  operand: number;
  operator: string | null;
  isNextClear: boolean;
}
const isNumberButton = (button: string) => {
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
const handleNumberButton = (button: string, state: State): State => {
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
const isOperatorButton = (button: string) => {
  return button === "+" || button === "-";
};

const handleOperatorButton = (button: string, state: State): State => {
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
const isDotButton = (button: string) => {
  throw new Error("Function not implemented.");
};

const isDeleteButton = (button: string) => {
  throw new Error("Function not implemented.");
};

const isAllClearButton = (button: string) => {
  throw new Error("Function not implemented.");
};

const isEqualButton = (button: string) => {
  throw new Error("Function not implemented.");
};
