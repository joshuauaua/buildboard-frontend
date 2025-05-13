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
      backgroundColor: getStatusColor(task.status),
      border: "1px solid #ccc",
      padding: "10px",
      marginBottom: "10px"
    }}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <small>Deadline: {task.deadline}</small><br />
      <small>Team: {task.teamMember}</small><br />
      <small>Project: {task.project}</small>
    </div>
  );
}
