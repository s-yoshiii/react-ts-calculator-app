import React, { FC } from "react";
type Props = {
  value: string;
};
const Display: FC<Props> = (props) => {
  const { value } = props;
  return <div className="display">{value}</div>;
};

export default Display;
