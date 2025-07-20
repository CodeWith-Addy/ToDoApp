import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";

function ToDoData({ data, onHandleDeleteToDo, onHandleCompleteToDo }) {
  return (
    <li className={`toDoItem ${data[1] ? "completed-item" : ""}`}>
      <p>{data[0]}</p>
      <button className="complete" onClick={() => onHandleCompleteToDo(data[0])}>
        <FaRegCircleCheck />
      </button>
      <button className="delete" onClick={() => onHandleDeleteToDo(data[0])}>
        <MdDeleteForever />
      </button>
    </li>
  );
}

export default ToDoData;
