import React, { FC } from "react";
type Props = {
  value: string;
};
const Display: FC<Props> = (props) => {
  const { value } = props;
  const displayValue = parseFloat(value).toLocaleString();
  return <div className="display">{displayValue}</div>;
};

export default Display;
