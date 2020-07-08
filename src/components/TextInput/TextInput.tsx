import React, { useState } from "react";
import styles from "./TextInput.module.css";

interface IProps {
  handleClicked: (mediaQuery: string) => void;
}

const TextInput: React.FC<IProps> = ({ handleClicked }) => {
  const [suggestions, setSuggestion] = useState([
    "@media (max-width: 600px)",
    "@media (min-width: 600px)",
  ]);
  const [suggested, setSuggested] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  const onTextChange = (value: string) => {
    let newSuggestions: Array<string> = [];
    if (value.length) {
      newSuggestions = suggestions.filter((item) => item.includes(value));
    }
    setSuggested([...newSuggestions]);
    setText(value);
  };

  const suggestionSelected = (value: string) => {
    setSuggested([]);
    setText(value);
  };

  let renderSuggestion = suggestions.length ? (
    <ul className={styles.Suggestions}>
      {suggested.map((item, index) => (
        <li onClick={() => suggestionSelected(item)} key={index}>
          {item}
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <form className={styles.InputText}>
      <div className={styles.Input}>
        <input
          value={text}
          type="text"
          onChange={(e) => onTextChange(e.target.value)}
          placeholder="@media query"
        />
        {renderSuggestion}
      </div>
      <button
        className={styles.AddBtn}
        onClick={(e) => {
          e.preventDefault();
          setText("");
          handleClicked(text);
        }}
      >
        Add
      </button>
    </form>
  );
};

export default TextInput;
