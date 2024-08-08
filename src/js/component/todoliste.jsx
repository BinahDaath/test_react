import React, { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([
    "Walk dog",
    "Buy groceries",
    "Study",
    "Clean house",
  ]);
  const [task, setTask] = useState("");
  const [chessTable, setchessTable] = useState([
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""]
]);
  return (
    <div onClick={a}>
    </div>
  );
}