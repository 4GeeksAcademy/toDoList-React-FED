// ToDoList.jsx
import React from 'react';
import ToDoItem from './ToDoItem.jsx';

const ToDoList = ({ tasks, onDeleteTask }) => (
  <ul className="todo-list">
    {tasks.map((task) => (
      <ToDoItem key={task.id} task={task} onDeleteTask={onDeleteTask} />
    ))}
    {tasks.length === 0 && <p className="empty-list"> No tasks, add a task! </p>}
  </ul>
);

export default ToDoList;