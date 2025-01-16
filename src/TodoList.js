import { useState } from 'react';
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const addTask = () => {
    const task = {
      id: Date.now(),
      text: newTask,
    };
    setTasks([...tasks, task]);
    setNewTask('');
  };
  const deletTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  return (
    <>
      <h1>Interactive Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => {
          return (
            <li key={task.id}>
              {task.text}
              <button onClick={() => deletTask(task.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default TodoList;
