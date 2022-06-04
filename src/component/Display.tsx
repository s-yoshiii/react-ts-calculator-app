import React, { FC } from "react";
type Props = {
  value: string;
};
const Display: FC<Props> = (props) => {
  const { value } = props;
  const valLength = value.length;
  return (
    <div
      className={`display${
        valLength > 16
          ? " display--large"
          : valLength > 13
          ? " display--xxlarge"
          : valLength > 12
          ? " display--xlarge"
          : valLength > 9
          ? " display--large"
          : ""
      }`}
    >
      {valLength > 16 ? "TOO LARGE" : parseFloat(value).toLocaleString()}
    </div>
  );
};

export default Display;
