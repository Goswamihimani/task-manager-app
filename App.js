import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost/backend/read.php");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (newTask.trim() === "") return;
    await axios.post("http://localhost/backend/create.php", { task: newTask });
    setNewTask("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.post("http://localhost/backend/delete.php", { id });
    fetchTasks();
  };

  const completeTask = async (id) => {
    await axios.post("http://localhost/backend/complete.php", { id });
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Task Manager</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2" onClick={addTask}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center bg-white p-3 mb-2 border ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span>{task.task}</span>
            <div className="flex gap-2">
              <button
                className="bg-green-500 text-white px-2"
                onClick={() => completeTask(task.id)}
              >
                Done
              </button>
              <button
                className="bg-red-500 text-white px-2"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
