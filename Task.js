import React from 'react';

function Task({ task, onComplete, onDelete }) {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button onClick={() => onComplete(task.id)}>✓</button>
      <button onClick={() => onDelete(task.id)}>✗</button>
    </li>
  );
}

export default Task;
