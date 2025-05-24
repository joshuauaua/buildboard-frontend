import axios from "axios";
import "./Modal.css";
import { useState, useEffect } from "react";



//Dropdown of users
function UserDropdown({ value, onChange }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsernames() {
      try {
        const response = await fetch("https://localhost:7007/Users");
        const data = await response.json();
        setUsers(data);
        console.log(users);
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
      <label htmlFor="user">Assigned To:</label>
      <br />
      <select
        id="user"
        name="UserID_FK"
        value={value}
        onChange={onChange}
        disabled={loading}
      >
        <option value="">-- Choose a user --</option>
        {users.map((user) => (
          <option key={user.userID} value={user.userID}>
            {user.username}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function Modal({ onAddTask }) {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    Title: "",
    Description: "",
    DueDate: "",
    UserID_FK: "",
    GoalID_FK: "",
    Status: "Ej påbörjad", // default status
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskParsed = {
      ...formData,
      UserID_FK: parseInt(formData.UserID_FK, 10),
      GoalID_FK: parseInt(formData.GoalID_FK, 10)
    }
    onAddTask(taskParsed); // pass to parent
    setIsOpen(false);
    console.log("Submitting taskParsed:", taskParsed);

    try {
      const response = await axios.post(`https://localhost:7007/tasks`, taskParsed);
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
        <div className="modal-container">
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
                  name="Title"
                  value={formData.Title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Due Date:</label>
                <br />
                <input
                  type="date"
                  name="DueDate"
                  value={formData.DueDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <UserDropdown
                value={formData.UserID_FK}
                onChange={handleChange}
              />

              <div>
                <label>Project:</label>
                <br />
                <input
                  type="text"
                  name="GoalID_FK"
                  value={formData.GoalID_FK}
                  onChange={handleChange}
                  required
                />
              </div>

    

              <div className="modal-footer" style={{ marginTop: "10px" }}>
                <button type="button" 
                onClick={() => setIsOpen(false)}
                className="cancel-btn"
                >Cancel</button>
                <button type="submit" className="todo-btn">Add Task</button>
              </div>



            </form>
          </div>
        </div>
      )}
    </>
  );
}