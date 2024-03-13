import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";

const fontAwesomeURL = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css";
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = fontAwesomeURL;
document.head.appendChild(styleLink);

import AddTaskInput from "./components/AddTaskInput.jsx";
import ToDoList from "./components/ToDoList.jsx";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = (text) => {
    if (!text.trim()) {
      alert("Please enter a task!");
      return; 
    }

    setTasks([...tasks, { id: Math.random(), text, completed: false }]);
    setInputValue("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const getRemainingTasks = () => tasks.filter((task) => !task.completed).length;

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <p>{getRemainingTasks()} tasks still to do</p>
      <AddTaskInput
        inputValue={inputValue}
        onAddTask={addTask}
        onInputChange={setInputValue}
        pendingTasks={getRemainingTasks()}
      />
      <ToDoList tasks={tasks} onDeleteTask={deleteTask} />
      
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
