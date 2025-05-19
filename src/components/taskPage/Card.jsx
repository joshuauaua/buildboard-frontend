export default function Card({ task }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "To Do":
        return "lightcoral"; 
      case "Doing":
        return "khaki"; 
      case "Done":
        return "lightgreen"; 
      default:
        return "white";
    }
  };

  return (
    <div className="card-style" style={{
      backgroundColor: "white",
      border: "1px solid #ccc",
      borderLeftColor: getStatusColor(task.status),
      borderLeftWidth: "15px",
      padding: "40px",
      marginBottom: "10px",
    }}>


      <h4>{task.title}</h4>
      <small className="task-deadline">{task.deadline}</small><br />
      <small>{task.teamMember}</small><br />
      <small>Project: {task.project}</small>
    </div>
  );
}
