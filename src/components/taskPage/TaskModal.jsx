import { useState, useEffect } from "react";


export default function TaskModal({ task, columns, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: "",
    note: "",
    priority: "medium",
    columnId: columns[0].id,
  });

  useEffect(() => {
    if (task) {
      setFormData(task);
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="modal">
      <h2>{task ? "Edit Task" : "Add Task"}</h2>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="note"
        value={formData.note}
        onChange={handleChange}
        placeholder="Note"
      />
      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <select name="columnId" value={formData.columnId} onChange={handleChange}>
        {columns.map((col) => (
          <option key={col.id} value={col.id}>
            {col.name}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>{task ? "Update" : "Add"}</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}