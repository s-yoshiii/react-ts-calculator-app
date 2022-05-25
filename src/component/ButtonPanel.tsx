import React, { FC } from "react";
type Props = {};
const ButtonPanel: FC<Props> = (props) => {
  return (
    <div>
      <button>9</button>
      <button>8</button>
      <button>7</button>
      <button>6</button>
      <button>5</button>
      <button>4</button>
      <button>3</button>
      <button>2</button>
      <button>1</button>
      <button>AC</button>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default ButtonPanel;
