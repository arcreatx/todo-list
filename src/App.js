import React, {useState} from 'react';
import "./App.css"

function App() {

  const [tasks, setTasks] = useState([
    {id:"task_1", title: "Learn JS", status: 0},
    {id:"task_2", title: "Code a Todo List level 2", status: 0}
  ]);

  const [showIncomplete, setShowIncomplete] = useState(false);

  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task ={
        id: Date.now(),
        title: newTask,
        status: 0
      }
      setTasks([...tasks, task])
    }
  }


  return (
    <div className="container">
  <h1 className="title">To-do list
    <span>Get one item done at a time.</span>
  </h1>
  <ul className="task-list">
    {tasks.filter(task => showIncomplete ? task.status !== 1 : true).map((task) => (
      <li key={task.id} className={task.status ? "done" : ""}>
      <span className="label">{task.title}</span>
      <div className="action">
        <input type="checkbox" className="btn-action btn-action-done"/>
        <button className="btn-action btn-action-delete">✖</button>
      </div>
    </li>
    ))}
  </ul>
  <div className="filter-wrapper">
    <label htmlFor="filter" className="filter-label">Show incompleted tasks only</label>
    <input type="checkbox" id="filter" checked={showIncomplete}/>
  </div>
  <form onSubmit={handleSubmit} className="form">
    <label htmlFor="newitem">Add to the todo list</label>
    <input type="text" id="newitem" value={newTask} />
    <button type="submit">Add Item</button>
  </form>
    </div>
  );
}

export default App;
