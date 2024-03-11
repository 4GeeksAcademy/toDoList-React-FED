// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/index.css"; // Import CSS from the styles folder

import AddTaskInput from "./components/AddTaskInput.jsx";
import ToDoList from "./components/ToDoList.jsx";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = (text) => {
    setTasks([...tasks, { id: Math.random(), text, completed: false }]);
    setInputValue('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const getRemainingTasks = () => tasks.filter((task) => !task.completed).length;

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTaskInput inputValue={inputValue} onAddTask={addTask} onInputChange={setInputValue} />
      <ToDoList tasks={tasks} onDeleteTask={deleteTask} />
      <p>{getRemainingTasks()} tasks still to do</p>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);