import './App.css';
import React, { useState } from 'react';
import Header from './components/Header.js';
import ToDoTask from './components/ToDoTask.js'

function App() {
  const [tasks, setTasks] = useState([{ name: "clean the house", checked: false }, { name: "buy food", checked: true }]);

function checkTask(index) {
  const newTasks = tasks.map((task,i) => i===index ? {name: task.name, checked: !task.checked} : task);
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
        />
      ))}
    </div>
  );
}

export default App;
