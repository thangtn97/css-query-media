import React, { useEffect } from "react";
import styles from "./QueryItem.module.css";

interface IProps {
  query: string;
  width: number;
  removeQuery: () => void;
}

const QueryItem: React.FC<IProps> = ({ query, width, removeQuery }) => {
  const checkMax = query.includes("@media (max-width: ");
  const checkMin = query.includes("@media (min-width: ");
  let style = {};
  let regex = /\d+/g;
  let result = query.match(regex);
  let num = width;
  if (result) {
    num = parseInt(result[0]);
  }
  if (checkMax) {
    if (width <= num) {
      style = { backgroundColor: "#8ec07c" };
    }
  } else if (checkMin) {
    if (width >= num) {
      style = { backgroundColor: "#8ec07c" };
    }
  }
  return (
    <li className={styles.QueryItem} style={style}>
      {query}
      <span onClick={removeQuery} style={{ cursor: "pointer" }}>
        -
      </span>
    </li>
  );
};

export default QueryItem;
