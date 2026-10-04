import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTask(title.trim(), priority);
    setTitle("");
    setPriority("Medium");
  };

  return (
    <form
      className="mb-4 flex flex-col gap-2 sm:flex-row"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="What do you need to accomplish?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-2.5 text-xs text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="rounded-lg border border-slate-200 px-3 py-2.5 text-xs text-slate-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

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