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
    return handleDotButton(button, state);
  }
  //削除の場合
  if (isDeleteButton(button)) {
    return handleDeleteButton(button, state);
  }
  //ACの場合
  if (isAllClearButton(button)) {
    return handleAllClearButton(state);
  }
  //=の場合
  if (isEqualButton(button)) {
    return handleEqualButton(button, state);
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
  return button === ".";
};

const handleDotButton = (button: string, state: State): State => {
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
const isDeleteButton = (button: string) => {
  return button === "D";
};

const handleDeleteButton = (button: string, state: State): State => {
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
const isAllClearButton = (button: string) => {
  return button === "AC";
};

const handleAllClearButton = (state: State): State => {
  return {
    current: "0",
    operand: 0,
    operator: null,
    isNextClear: false,
  };
};
const isEqualButton = (button: string) => {
  return button === "=";
};
const handleEqualButton = (button: string, state: State): State => {
  throw new Error("Function not implemented.");
};
const operate = (state: State) => {
  throw new Error("Function not implemented.");
};
