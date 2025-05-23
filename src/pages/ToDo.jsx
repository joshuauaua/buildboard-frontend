import "./ToDo.css";
import { useState, useEffect } from "react";
import CardContainer from "../components/taskPage/CardContainer";
import Modal from "../components/taskPage/Modal";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ToDo() {
  const [tasks, setTasks] = useState([{

    title: "Loading Tasks...",
    description: "",
    dueDate: "",
    teamMember: "",
    project: "",
    status: "Ej påbörjad",
  }],);



  //Fetch all tasks 

  useEffect (()=> {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5069/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);



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

  const uniqueDeadlines = [...new Set(tasks.map((t) => t.deadline))];

  return (
    <div>

      <h1>TEST SAMI</h1>
      <header className="header-content-top">
        <h1 className="header-title">Task</h1>
        <h3 className="header-subtitle">
          <Link to="/dashboard">PlanIT</Link> / <Link to="/task">Task</Link>
        </h3>

        <Modal onAddTask={handleNewTask} />
      </header>


        {/* Filter UI */}

        <div className="filter-dropdown">
        <label htmlFor="filterType">Filter:</label>
        <select
          id="filterType"
          value={
            filter.member
              ? `member:${filter.member}`
              : filter.project
              ? `project:${filter.project}`
              : filter.deadline
              ? `deadline:${filter.deadline}`
              : ""
          }
          onChange={(e) => {
            const [type, value] = e.target.value.split(":");

            if (!type || !value) {
              // Reset all filters
              setFilter({ member: "", project: "", deadline: "" });
              return;
            }

            // Reset other filters when one is chosen
            setFilter({
              member: type === "member" ? value : "",
              project: type === "project" ? value : "",
              deadline: type === "deadline" ? value : "",
            });
          }}
        >
          <option value="">All Tasks</option>

          <optgroup label="By Member">
            {uniqueMembers.map((m) => (
              <option key={`member-${m}`} value={`member:${m}`}>
                {m}
              </option>
            ))}
          </optgroup>

          <optgroup label="By Project">
            {uniqueProjects.map((p) => (
              <option key={`project-${p}`} value={`project:${p}`}>
                {p}
              </option>
            ))}
          </optgroup>

          <optgroup label="By Deadline">
            {uniqueDeadlines.map((d) => (
              <option key={`deadline-${d}`} value={`deadline:${d}`}>
                {new Date(d).toLocaleDateString()}
              </option>
            ))}
          </optgroup>
        </select>

        {/* Clear Filters Button */}
        <button
          onClick={() => setFilter({ member: "", project: "", deadline: "" })}
          style={{ marginLeft: "1rem" }}
        >
          Clear Filters
        </button>
      </div>
      
      

      {/* Task Columns */}
      <main className="main-content">

        <h2 className="main-title">Task Board</h2>

        <div style={{ display: "flex", marginTop: "20px" }}>
          <CardContainer
            title="Ej påbörjad"
            numberOfTasks={filteredTasks.filter((t) => t.status === "Ej påbörjad").length}
            tasks={filteredTasks.filter((t) => t.status === "Ej påbörjad")}
          />
          <CardContainer
            title="Påbörjad"
            numberOfTasks={filteredTasks.filter((t) => t.status === "Påbörjad").length}
            tasks={filteredTasks.filter((t) => t.status === "Påbörjad")}
          />
          <CardContainer
            title="Avslutad"
            numberOfTasks={filteredTasks.filter((t) => t.status === "Avslutad").length}
            tasks={filteredTasks.filter((t) => t.status === "Avslutad")}
          />
        </div>



      </main>
    </div>
  );
}
