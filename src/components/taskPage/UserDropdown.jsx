// components/UserDropdown.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserDropdown.css"; // Adjust the path as needed

export default function UserDropdown({ value, onChange }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5069/Users") // adjust URL as needed
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Failed to fetch users:", error));
  }, []);

  return (
    <>
      <label className="form-label">Assign to:</label>
      <select className="form-input" name="UserID_FK" value={value} onChange={onChange} required>
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name || user.username}
          </option>
        ))}
      </select>
    </>
  );
}