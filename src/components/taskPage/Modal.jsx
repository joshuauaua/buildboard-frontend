import axios from "axios";
import "./Modal.css";
import { useState, useEffect } from "react";



//Dropdown of users
function UserDropdown({ value, onChange }) {
  const [usernames, setUsernames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsernames() {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsernames(data.usernames);
      } catch (error) {
        console.error("Error fetching usernames:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsernames();
  }, []);

  return (
    <div>
      <label htmlFor="username">Assigned To:</label>
      <br />
      <select
        id="username"
        name="teamMember"
        value={value}
        onChange={onChange}
        disabled={loading}
      >
        <option value="">-- Choose a user --</option>
        {usernames.map((username) => (
          <option key={username} value={username}>
            {username}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function Modal({ onAddTask }) {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    teamMember: "",
    project: "",
    status: "Ej påbörjad", // default status
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onAddTask(formData); // pass to parent
    setIsOpen(false);

    const { teamMember, ...newTask } = formData; // omit teamMember if not needed

    try {
      const response = await axios.post(`http://localhost:5069/tasks`, newTask);
      console.log("Task added successfully:", response.data);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="todo-btn">
        <img src="/src/assets/add.svg" alt="New Task" />    New Task 
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="modal-close"
            >
              ×
            </button>

            <h2>Add Task</h2>

            <form onSubmit={handleSubmit}>
              <div>
                <label>Title:</label>
                <br />
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Due Date:</label>
                <br />
                <input
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <UserDropdown
                value={formData.teamMember}
                onChange={handleChange}
              />

              <div>
                <label>Project:</label>
                <br />
                <input
                  type="text"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={{ marginTop: "10px" }}>
                <button type="submit" className="todo-btn">Add Task</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}