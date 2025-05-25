import React from "react";
import { Target, Calendar, Users, Clock } from "lucide-react";
import "./QuickShortcuts.css";
import { Link } from "react-router-dom";

const QuickShortcuts = () => {
  return (
    <section className="quick-shortcuts">
      <div className="shortcuts-header">
        <h2>Snabbgenvägar</h2>
      </div>

      <div className="shortcuts-grid">
        <button className="shortcut-button">
          <Target className="shortcut-icon" />
          <span>Mina uppgifter</span>
        </button>
        <button className="shortcut-button">
          <Calendar className="shortcut-icon" />
          <span>Kalender</span>
        </button>
        <button className="shortcut-button">
          <Users className="shortcut-icon" />
          <span>Team</span>
        </button>
        <button className="shortcut-button">
          <Link to ="/tasks">
          <Clock className="shortcut-icon" />
          <span>Senaste</span></Link>
        </button>
      </div>
    </section>
  );
};

export default QuickShortcuts;