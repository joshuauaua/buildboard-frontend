import React from "react";
import { Target, Calendar, Users, Clock } from "lucide-react";
import "./QuickShortcuts.css";

const QuickShortcuts = () => {
  return (
    <section className="quick-shortcuts">
      <div className="shortcuts-header">
        <h2>Snabbgenvägar</h2>
      </div>

      <div className="shortcuts-grid">
        <button className="shortcut-button">
          <Target className="shortcut-icon" />
          <span>Mina mål</span>
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
          <Clock className="shortcut-icon" />
          <span>Senaste</span>
        </button>
      </div>
    </section>
  );
};

export default QuickShortcuts;