import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTask(title.trim());
    setTitle("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you need to accomplish?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">
        + Add Task
      </button>
    </form>
  );
}

export default TaskForm;