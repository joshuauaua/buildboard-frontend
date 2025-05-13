

export default function TaskCard({ task, onClick }) {
  const getColor = () => {
    switch (task.priority) {
      case "high":
        return "red";
      case "medium":
        return "orange";
      case "low":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <div className="task-card" onClick={onClick} style={{ borderLeft: `5px solid ${getColor()}` }}>
      <div>{task.title}</div>
      <div>{task.note}</div>
    </div>
  );
}