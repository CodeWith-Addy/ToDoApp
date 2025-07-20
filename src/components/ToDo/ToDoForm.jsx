import React from "react";
import { useState } from "react";

function ToDoForm({ onFormSubmit }) {
  const [inputValue, setinputValue] = useState("");

  const handleSetInput = (value) => {
    setinputValue(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(inputValue);
    setinputValue("");
  };

  return (
    <section className="toDoInputSection">
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input
          type="text"
          className="todoInputField"
          value={inputValue}
          onChange={(e) => handleSetInput(e.target.value)}
        ></input>
        <button type="submit" className="submit-item">
          Add Task
        </button>
      </form>
    </section>
  );
}

export default ToDoForm;
