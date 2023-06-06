import React, { useState } from "react";

export default function TextForm(props) {
  // convert to uppercase
  const handleUpClick = () => {
    setText(text.toUpperCase());
    text.length > 0
      ? props.showAlert("Text converted to UpperCase", "success")
      : props.showAlert("Please type something in the textbox first", "danger");
  };

  // convert to LowerCase
  const handleDownClick = () => {
    setText(text.toLowerCase());
    text.length > 0
      ? props.showAlert("Text converted to LowerCase", "success")
      : props.showAlert("Please type something in the textbox first", "danger");
  };

  // Change text on click
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Return word count
  function countWords(text) {
    let word = text.split(/\s+/);
    if (word[word.length - 1] === "") return word.length - 1;
    return word.length;
  }

  // clear Text
  const handleClearClick = () => {
    setText("");
    let clearIt = window.confirm("Do you want to clear?");
    if (clearIt)
      text.length > 0
        ? props.showAlert("Cleared Text", "success")
        : props.showAlert("Nothing to clear", "warning");
    else props.showAlert("Didn't clear anything", "success");
  };

  // copy text to Clip Board
  const handleCopyClick = () => {
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    text.length > 0
      ? props.showAlert("Copied successfully to clipboard", "success")
      : props.showAlert("Please type something in the textbox first", "danger");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    text.length > 0
      ? props.showAlert("Removed all extra spaces", "success")
      : props.showAlert("Please type something in the textbox first", "danger");
  };

  const [text, setText] = useState("");

  function previewText() {
    if (text === "") return "Nothing to Preview.";
    return text;
  }

  function reverse(color) {
    if (color === "dark") return "light";
    return "dark";
  }

  return (
    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          id="myBox"
          onChange={handleOnChange}
          value={text}
          className={`exampleFormControlTextarea1 text-${reverse(
            props.mode.name
          )} p-2`}
          rows="8"
          cols="130"
        ></textarea>
      </div>
      <button
        className={`btn btn-${props.col} mx-2 my-1`}
        onClick={handleUpClick}
      >
        Convert To UpperCase
      </button>
      <button
        className={`btn btn-${props.col} mx-2 my-1`}
        onClick={handleDownClick}
      >
        Convert To LowerCase
      </button>
      <button
        className={`btn btn-${props.col} mx-2 my-1`}
        onClick={handleClearClick}
      >
        Clear Text
      </button>
      <button
        className={`btn btn-${props.col} mx-2 my-1`}
        onClick={handleCopyClick}
      >
        Copy Text
      </button>
      <button
        className={`btn btn-${props.col} mx-2 my-1`}
        onClick={handleExtraSpaces}
      >
        Format Text
      </button>

      <h2 className="my-3">Your Text Summary</h2>
      <ul>
        <li>
          {countWords(text.trim())} <i>words</i> and {text.trim().length} <i>characters</i>
        </li>
        <li className="my-2">
          {(text.trim().length / 300).toFixed(3)} <i>Minutes</i> read
        </li>
      </ul>
      <h2 className="my-2">Text Preview</h2>
      <div className="textPrev">
        <h5>
          <li>{previewText()}</li>
        </h5>
      </div>
    </div>
  );
}

// Default row and column of text-box
TextForm.defaultProps = {
  row: 7,
  column: 135,
};
