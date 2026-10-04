function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-slate-200 py-8 text-center">
        <h3 className="text-sm font-medium text-slate-700">
          No tasks yet
        </h3>

        <p className="mt-1 text-xs text-slate-400">
          Add your first task above to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div
          className={`flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-3 ${
            task.completed ? "bg-slate-50" : "bg-white"
          }`}
          key={task.id}
        >
          <button
            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-xs ${
              task.completed
                ? "border-indigo-600 bg-indigo-600 text-white"
                : "border-slate-300 bg-white text-transparent hover:border-indigo-400"
            }`}
            onClick={() => onToggle(task.id)}
          >
            ✓
          </button>

          <span
            className={`flex-1 text-xs ${
              task.completed
                ? "text-slate-400 line-through"
                : "text-slate-700"
            }`}
          >
            {task.title}
          </span>

          <span
            className={`rounded-full px-2 py-1 text-[10px] font-medium ${
              task.priority === "High"
                ? "bg-red-50 text-red-600"
                : task.priority === "Medium"
                ? "bg-yellow-50 text-yellow-600"
                : "bg-green-50 text-green-600"
            }`}
          >
            {task.priority || "Medium"}
          </span>

          <button
            className="rounded-md bg-red-50 px-3 py-1.5 text-[10px] font-medium text-red-500 transition hover:bg-red-100"
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