import React, { useState } from "react";
import styles from "./Panel.module.css";

interface IProps {
  children: any;
  handleMouseMove: (width: number) => void;
}

const Panel: React.FC<IProps> = (props: IProps) => {
  const [move, setMove] = useState(false);
  const handleMove = (width: number) => {
    if (move) {
      props.handleMouseMove(width);
    }
  };
  return (
    <div
      className={styles.Panel}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseDown={() => setMove(true)}
      onMouseUp={() => setMove(false)}
    >
      {props.children}
    </div>
  );
};

export default Panel;
