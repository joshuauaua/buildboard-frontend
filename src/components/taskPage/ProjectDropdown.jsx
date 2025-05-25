// components/ProjectDropdown.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProjectDropdown.css"; // Adjust the path as needed

export default function ProjectDropdown({ value, onChange }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5069/api/projects") // adjust URL as needed
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Failed to fetch projects:", error));
  }, []);

  return (
    <>
      <label className="form-label">Projekt</label>
      <select name="ProjectID_FK" value={value} onChange={onChange} className="form-input" required>
        <option value="">Select a project</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.title || project.name}
          </option>
        ))}
      </select>
    </>
  );
}