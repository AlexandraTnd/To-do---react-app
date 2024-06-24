import './App.css';
import React, { useState } from 'react';
import Header from './components/Header.js';
import ToDoTask from './components/ToDoTask.js'

function App() {
  const [tasks, setTasks] = useState([{ name: "clean the house", checked: false, update: false }, { name: "buy food", checked: true, update: false }]);

function checkTask(index) {
  const newTasks = tasks.map((task,i) => i===index ? {name: task.name, checked: !task.checked} : task);
  setTasks(newTasks);
}

function deleteTask(index) {
  const newTasks = [...tasks].filter((task, i) => i !== index);
  setTasks(newTasks);
}

function updateTask(taskName, index) {
  if (taskName === "") {
    const newTasks = tasks.map((task,i) => i===index ? {name: task.name, update: !task.update} : task);
    setTasks(newTasks);
  }
  else {
    const newTasks = tasks.map((task,i) => i === index ? {name: taskName, checked: false, update:false} : task);
    setTasks(newTasks);
  }
}

function cancelUpdate(index) {
  const newTasks = tasks.map((task,i) => i===index ? {name: task.name, update: !task.update} : task);
    setTasks(newTasks);
}

  return (
    <div className="container">
      <Header />
      {tasks.map((task, index) => (
        <ToDoTask
          key={index}
          index={index}
          task={task}
          checkTask={checkTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ))}
    </div>
  );
}

export default App;
