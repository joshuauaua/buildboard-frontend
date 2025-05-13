import React, { useState } from "react";
import Column from "./Column";
import TaskModal from "./TaskModal";



export default function KanbanBoard() {
  const [columns, setColumns] = useState([
    { id: "todo", name: "To Do" },
    { id: "in-progress", name: "In Progress" },
    { id: "done", name: "Done" },
  ]);

  const [tasks, setTasks] = useState([
    { id: "1", title: "Example Task", note: "Some details", columnId: "todo", priority: "medium" },
  ]);

  const [selectedTask, setSelectedTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = () => {
    setSelectedTask(null);
    setShowModal(true);
  };

  const handleCardClick = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  const handleSaveTask = (taskData) => {
    if (taskData.id) {
      // Update
      setTasks((prev) =>
        prev.map((t) => (t.id === taskData.id ? { ...t, ...taskData } : t))
      );
    } else {
      // Add
      const newTask = {
        ...taskData,
        id: Date.now().toString(),
      };
      setTasks((prev) => [...prev, newTask]);
    }
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleAddTask}>Add Task</button>
      <div className="board">
        {columns.map((col) => (
          <Column
            key={col.id}
            column={col}
            tasks={tasks.filter((t) => t.columnId === col.id)}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
      {showModal && (
        <TaskModal
          task={selectedTask}
          columns={columns}
          onClose={() => setShowModal(false)}
          onSave={handleSaveTask}
        />
      )}
    </div>
  );
}