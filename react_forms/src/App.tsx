import { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputText("");
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleCompleted = (taskId) => {
    setTasks(tasks.map((task) => task.id === taskId ? { ...task, completed: !task.completed } : task))
  };

  return (
    <>
      <TaskInput
        inputText={inputText}
        handleSubmit={handleSubmit}
        handleInputText={handleInputText}
      />

      <TaskList
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleCompleted={handleCompleted}
      />
    </>
  )
}

export default App;
