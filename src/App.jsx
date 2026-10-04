import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const defaultTasks = [
  {
    id: 1,
    title: "Study React basics",
    completed: false,
  },
  {
    id: 2,
    title: "Finish Activity 1",
    completed: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("studentTasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : defaultTasks;
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("studentTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="mx-auto max-w-3xl px-5 py-10">
        <section className="mb-7">
          <p className="mb-2 text-xs font-semibold tracking-widest text-indigo-600">
            STUDENT PRODUCTIVITY
          </p>

          <h2 className="mb-2 text-2xl font-medium text-slate-900">
            Stay organized. Get things done.
          </h2>

          <p className="text-sm text-slate-500">
            Manage your school tasks and keep track of your
            progress in one simple place.
          </p>
        </section>

        <section className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <span className="text-xs text-slate-500">
              Total Tasks
            </span>

            <strong className="mt-2 block text-2xl text-slate-900">
              {tasks.length}
            </strong>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <span className="text-xs text-slate-500">
              Completed
            </span>

            <strong className="mt-2 block text-2xl text-slate-900">
              {completedTasks}
            </strong>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <span className="text-xs text-slate-500">
              Remaining
            </span>

            <strong className="mt-2 block text-2xl text-slate-900">
              {tasks.length - completedTasks}
            </strong>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="mb-4">
            <h3 className="text-base font-medium text-slate-900">
              My Tasks
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Add and manage your school activities.
            </p>
          </div>

          <TaskForm onAddTask={addTask} />

          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-xs text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />

          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </section>
      </main>

      <footer className="py-10 text-center">
        <p className="text-xs text-slate-400">
          Student Task Manager • React Activity 1
        </p>
      </footer>
    </div>
  );
}

export default App;