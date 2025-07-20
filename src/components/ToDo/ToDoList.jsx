import React, { useState } from "react";
import "./ToDoStyles.css";
import { FaClipboardList } from "react-icons/fa";
import { getLocalStorage, setLocalStorage } from "./LocalStorage";
import ToDoForm from "./ToDoForm";
import ToDoData from "./ToDoData";

function ToDoList() {
  const [items, setItems] = useState(() => getLocalStorage());
  setLocalStorage(items);

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (items.some((item) => item[0] === inputValue)) {
      return;
    }
    setItems((prev) => [...prev, [inputValue, false]]);
  };

  const handleDeleteToDo = (value) => {
    const newItems = items.filter((currItem) => currItem[0] !== value);
    setItems(newItems);
  };

  const handleClearAllButton = () => setItems([]);

  const handleCompleteTask = (value) => {
    setItems((prev) =>
      prev.map(([val, check]) => (val === value ? [val, !check] : [val, check]))
    );
  };

  return (
    <section className="ToDoComponent">
      <header>
        <h1 className="app-header">
          To-Do List
          <span>
            <FaClipboardList />
          </span>
        </h1>
      </header>
      <ToDoForm onFormSubmit={handleFormSubmit} />
      <section className="myUnorderedList">
        <ul>
          {items.map((item, index) => (
            <ToDoData
              key={index}
              data={item}
              onHandleDeleteToDo={handleDeleteToDo}
              onHandleCompleteToDo={handleCompleteTask}
            />
          ))}
        </ul>
        {items.length > 0 ? (
          <button className="clear-all" onClick={handleClearAllButton}>
            CLEAR ALL
          </button>
        ) : null}
      </section>
    </section>
  );
}

export default ToDoList;
