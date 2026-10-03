import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

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

  useEffect(() => {
    localStorage.setItem(
      "studentTasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTasks((currentTasks) => [
      ...currentTasks,
      newTask,
    ]);
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

  return (
    <div className="app">
      <Header />

      <main className="container">
        <section className="welcome">
          <p className="small-title">
            STUDENT PRODUCTIVITY
          </p>

          <h2>Stay organized. Get things done.</h2>

          <p>
            Manage your school tasks and keep track of your
            progress in one simple place.
          </p>
        </section>

        <section className="stats">
          <div className="stat-card">
            <span>Total Tasks</span>
            <strong>{tasks.length}</strong>
          </div>

          <div className="stat-card">
            <span>Completed</span>
            <strong>{completedTasks}</strong>
          </div>

          <div className="stat-card">
            <span>Remaining</span>
            <strong>
              {tasks.length - completedTasks}
            </strong>
          </div>
        </section>

        <section className="task-section">
          <div className="section-header">
            <h3>My Tasks</h3>

            <p>
              Add and manage your school activities.
            </p>
          </div>

          <TaskForm onAddTask={addTask} />

          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </section>
      </main>

      <footer>
        <p>
          Student Task Manager • React Activity 1
        </p>
      </footer>
    </div>
  );
}

export default App;