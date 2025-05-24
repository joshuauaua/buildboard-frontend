import "./TaskHeader.css";
import { Link } from "react-router-dom";
import React from "react";


export default function TaskHeader(){

  return (
    <header className="header-container">
      <div className="header-title">
        <h1 className="header-title">Tasks</h1>
        <p className="header-subtitle">Add your tasks and manage them</p>
      </div>
      <div className="header-subtitle-right">
      <h4>
          <Link to="/dashboard" className="header-subtitle-right">PlanIT</Link> / <Link to="/task" className="header-subtitle-right">Task</Link>
        </h4>
      </div>
      
    </header>
  );
}
  