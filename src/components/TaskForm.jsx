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
    <form
      className="mb-4 flex gap-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="What do you need to accomplish?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-2.5 text-xs text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
      />

      <button
        type="submit"
        className="rounded-lg bg-indigo-600 px-4 py-2.5 text-xs font-medium text-white transition hover:bg-indigo-700"
      >
        + Add Task
      </button>
    </form>
  );
}

export default TaskForm;