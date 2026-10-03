
function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">✓</div>

        <h3>No tasks yet</h3>

        <p>
          Add your first task above to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div
          className={`task-item ${
            task.completed ? "completed" : ""
          }`}
          key={task.id}
        >
          <button
            className="check-button"
            onClick={() => onToggle(task.id)}
          >
            {task.completed ? "✓" : ""}
          </button>

          <span className="task-title">
            {task.title}
          </span>

          <button
            className="delete-button"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;