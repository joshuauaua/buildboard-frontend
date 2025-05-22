
import axios from 'axios';
import './Modal.css'
import { useState } from "react";

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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(formData); // pass task up
    setIsOpen(false);
    const taskUsername = formData.teamMember;
    const { teamMember, ...newTask } = formData;
    (async () => {
      try {
        const response = await axios.post(`http://localhost:5069/tasks`, newTask);
        console.log("Task added successfully:", response.data);
      } catch (error) {
        console.error("Error adding task:", error);
      }
    })();  
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="custom-btn btn-1">+</button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "1rem",
              width: "300px",
              position: "relative"
            }}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: 5,
                right: 10,
                border: "none",
                background: "none",
                fontSize: "18px",
              }}
            >
              ×
            </button>

            <h2>Add Task</h2>

            <form onSubmit={handleSubmit}>
              <div>
                <label>Title:</label><br />
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />
              </div>

              <div>
                <label>Due Date:</label><br />
                <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} required />
              </div>

              <div>
                <label>Assigned To:</label><br />
                <input type="text" name="teamMember" value={formData.teamMember} onChange={handleChange} required />
              </div>

              <div>
                <label>Label:</label><br />
                <input type="text" name="project" value={formData.project} onChange={handleChange} required />
              </div>

              <div style={{ marginTop: "10px" }}>
                <button type="submit">Add Task</button>


              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}