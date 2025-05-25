import "./CalendarHeader.css";
import { Link } from "react-router-dom";
import React from "react";


export default function TaskHeader(){

  return (
    <div className="header-container">
      <div className="header-title">
        <h1 className="header-title">Calendar</h1>
        <p className="header-subtitle">Add your tasks and manage them</p>
      </div>
      <div className="header-subtitle-right">
      <h4>
          <Link to="/dashboard" className="header-subtitle-right">BuildBoard</Link> / <Link to="/task" className="header-subtitle-right">Calendar</Link>
        </h4>
      </div>
      
    </div>
  );
}
  