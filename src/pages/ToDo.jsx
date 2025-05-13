import "../styles/ToDo.css";
import { useState } from "react";
import CardContainer from "../components/taskPage/CardContainer";
import Modal from "../components/taskPage/Modal";

export default function ToDo() {
  const [tasks, setTasks] = useState([
    // Example task structure
    {
      title: "Design UI",
      description: "Create mockups",
      deadline: "2025-05-15",
      teamMember: "Alice",
      project: "Alpha",
      status: "To Do",
    },
    {
      title: "Design UI",
      description: "Create mockups",
      deadline: "2025-05-15",
      teamMember: "Alice",
      project: "Alpha",
      status: "To Do",
    },
    {
      title: "Design UI",
      description: "Create mockups",
      deadline: "2025-05-15",
      teamMember: "Alice",
      project: "Alpha",
      status: "To Do",
    },

    {
      title: "API Integration",
      description: "Connect backend",
      deadline: "2025-05-14",
      teamMember: "Bob",
      project: "Beta",
      status: "Doing",
    },
    {
      title: "Build Frontend",
      description: "React Project",
      deadline: "2025-05-23",
      teamMember: "Bob",
      project: "Beta",
      status: "Doing",
    },
    {
      title: "API Integration",
      description: "Connect backend",
      deadline: "2025-05-14",
      teamMember: "Bob",
      project: "Beta",
      status: "Doing",
    },

    {
      title: "Write Tests",
      description: "Unit tests",
      deadline: "2025-05-10",
      teamMember: "Alice",
      project: "Alpha",
      status: "Done",
    },
  ]);

  const [filter, setFilter] = useState({
    member: "",
    project: "",
    deadline: "",
  });

  const filteredTasks = tasks.filter((task) => {
    return (
      (!filter.member || task.teamMember === filter.member) &&
      (!filter.project || task.project === filter.project) &&
      (!filter.deadline || task.deadline === filter.deadline)
    );
  });

  const handleNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const uniqueMembers = [...new Set(tasks.map((t) => t.teamMember))];
  const uniqueProjects = [...new Set(tasks.map((t) => t.project))];

  return (
    <div>
      <header className="task-header">
        <h1>Task</h1>
        <Modal onAddTask={handleNewTask} />

        {/* Filter UI */}

        <div>
          <label>Filter by Member: </label>
          <select
            onChange={(e) => setFilter({ ...filter, member: e.target.value })}
          >
            <option value="">All</option>
            {uniqueMembers.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          <label>Filter by Project: </label>
          <select
            onChange={(e) => setFilter({ ...filter, project: e.target.value })}
          >
            <option value="">All</option>
            {uniqueProjects.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          <label>Filter by Deadline: </label>
          <input
            type="date"
            onChange={(e) => setFilter({ ...filter, deadline: e.target.value })}
          />
        </div>
      </header>

      {/* Task Columns */}
      <div style={{ display: "flex", marginTop: "20px" }}>
        <CardContainer
          title="To Do"
          tasks={filteredTasks.filter((t) => t.status === "To Do")}
        />
        <CardContainer
          title="Doing"
          tasks={filteredTasks.filter((t) => t.status === "Doing")}
        />
        <CardContainer
          title="Done"
          tasks={filteredTasks.filter((t) => t.status === "Done")}
        />
      </div>
    </div>
  );
}
