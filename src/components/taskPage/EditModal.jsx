import axios from "axios";
import "./EditModal.css";
import { useState, useEffect } from "react";



//Dropdown of users
function UserDropdown({ value, onChange }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsernames() {
      try {
        const response = await fetch("http://localhost:7007/Users");
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

  //Dropdown of projects
 function ProjectDropdown({ value, onChange }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("http://localhost:7007/Projects");
        const data = await response.json();
        setProjects(data);
        console.log(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div>
      <label htmlFor="project">Project:</label>
      <br />
      <select
        id="project"
        name="ProjectID_FK"
        value={value}
        onChange={onChange}
        disabled={loading}
      >
        <option value="">-- Select a Project --</option>
        {projects.map((project) => (
          <option key={project.projectID} value={project.projectID}>
            {project.name}
          </option>
        ))}
      </select>
    </div>
  );
}



  
  





export default function EditModal({ onAddTask }) {
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
      const response = await axios.post(`http://localhost:7007/tasks`, taskParsed);
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


            <header className="modal-header">
            
            <h2 className="modal-title">Edit Task</h2>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="modal-close"
            >
              ×
            </button>

            </header>

            

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

              <ProjectDropdown
                value={formData.ProjectID_FK}
                onChange={handleChange}
              />
                <br />
              </div>

              <div>
                <label for="status">Status</label>
                <br />
                
                <select id="status" name="Status" value={formData.Status} onChange={handleChange} required>
                <option value="Ej påbörjad">Ej påbörjad</option>
                <option value="Påbörjad">Pågående</option>
                <option value="Avslutad">Slutförd</option>
                </select>
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