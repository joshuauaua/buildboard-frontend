import React from "react";
import "./DashboardHeader.css";

/**
 * @typedef {Object} DashboardHeaderProps
 * @property {string} formattedDate - The formatted date string.
 */

const DashboardHeader = ({ formattedDate }) => {
  return (
    <div className="dashboard-header">
      <div>
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-date">{formattedDate}</p>
      </div>
      <div className="dashboard-actions">
        <button className="dashboard-add-button">Add Task</button>
      </div>
    </div>
  );
};

export default DashboardHeader;