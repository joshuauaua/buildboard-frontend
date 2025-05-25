import "./Card.css";
import EditModal from "../taskPage/EditModal";


function showUser(teamMember) {
  const name = String(teamMember);
  return name.charAt(0).toUpperCase() + name.slice(1);
}


function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}


export default function Card({ task }) {


  

  const getStatusColor = (status) => {
    switch (status) {
      case "Påbörjad":
        return "lightcoral"; 
      case "Ej påbörjad":
        return "khaki"; 
      case "Avslutad":
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


      <header className="card-header">      
      <h4>{task.title}</h4>
      <button className="edit-btn"><img src="./src/assets/edit.svg" alt="edit-icon">  
      </img> </button>
      </header>

      <main className="card-main">
      <small className="task-deadline">{formatDate(task.dueDate)}</small>
      <small>  •  </small>
      <small> <img src="./src/assets/user.png" className="userProfilePicture"/> {showUser(task.teamMembers[0])}</small><br />
      </main>


      <footer className="card-footer">
        <small>Project: {task.project}</small>
        <button className="add-label"> + Add Label </button>

      </footer>
    </div>
  );
}