import "./DashboardHeader.css";
import { Link } from "react-router-dom";
import React from "react";


export default function DashboardHeader(){


  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });



  return (
    <div className="header-container">
      <div className="header-title">
        <h1 className="header-title">Dashboard</h1>
        <p className="dashboard-date">{formattedDate}</p>
      </div>
      <div className="header-subtitle-right">
      <h4>
          <Link to="/dashboard" className="header-subtitle-right">BuildBoard</Link> / <Link to="/task" className="header-subtitle-right">Task</Link>
        </h4>
      </div>
      
    </div>
  );
}
  